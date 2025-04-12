"use client";

import { useEffect, useState } from "react";
import { AdvocateType } from "@/db/schema";
import { AdvocateCard } from "./components/AdvocateCard";

export default function Home() {
  const [advocates, setAdvocates] = useState<AdvocateType[]>([]);

  useEffect(() => {
    console.log("fetching advocates...");
    // Consider leaving filtering to the backend
    fetch("/api/advocates").then((response) => {
      response.json().then((jsonResponse) => {
        setAdvocates(jsonResponse.data);
      });
    });
  }, []);

  const onChange = (e) => {
    const searchTerm = e.target.value;

    document.getElementById("search-term").innerHTML = searchTerm;
  };

  return (
    <main style={{ margin: "24px" }}>
      <h1>Solace Advocates</h1>
      <br />
      <br />
      <div>
        <p>Search</p>
        {/* Consider keeping the search term in state */}
        <p>
          Searching for: <span id="search-term"></span>
        </p>
        <input style={{ border: "1px solid black" }} onChange={onChange} />
      </div>
      <br />
      <br />
      <div className="grid grid-cols-1 gap-6 px-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {advocates.map((advocate) => (
          <AdvocateCard key={advocate.id} advocate={advocate} />
        ))}
      </div>
    </main>
  );
}
