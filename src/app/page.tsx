"use client";

import { useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { AdvocateType } from "@/db/schema";
import { AdvocateCard } from "./components/AdvocateCard";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [advocates, setAdvocates] = useState<AdvocateType[]>([]);

  // TODO: debounce
  useEffect(() => {
    fetch(`/api/advocates?search=${encodeURIComponent(searchQuery)}`).then(
      (response) => {
        response.json().then((jsonResponse) => {
          setAdvocates(jsonResponse.data as AdvocateType[]);
        });
      }
    );
  }, [searchQuery]);

  return (
    <main style={{ margin: "24px" }}>
      <h1>Solace Advocates</h1>
      <br />
      <br />
      <div className="w-full max-w-md mx-auto p-4">
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
          </span>
          {/* Untested hypothesis: users only need to search by city and/or speciality */}
          <input
            type="text"
            placeholder="City, Speciality"
            aria-label="Search by city or specialty"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>
      <br />
      <br />
      <div className="grid grid-cols-1 gap-6 px-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {advocates.map((advocate) => (
          <AdvocateCard key={advocate.id} advocate={advocate} />
        ))}
      </div>
      <br />
      <div className="px-4 text-sm text-gray-600 italic">
        Only the first 50 matches are displayed
      </div>
    </main>
  );
}
