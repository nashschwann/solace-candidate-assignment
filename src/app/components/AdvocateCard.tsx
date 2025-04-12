import React from "react";
import Image from "next/image";
import type { AdvocateType } from "@/db/schema";
import { PhoneIcon } from "@heroicons/react/24/solid";

type AdvocateCardProps = {
  advocate: AdvocateType;
};

export const AdvocateCard: React.FC<AdvocateCardProps> = ({ advocate }) => {
  const {
    firstName,
    lastName,
    city,
    degree,
    specialties,
    yearsOfExperience,
    phoneNumber,
  } = advocate;

  return (
    <div className="bg-white shadow-sm rounded-2xl p-6 flex flex-col items-start w-full h-full border-2 border-solid">
      <div className="flex items-center gap-4 mb-4">
        <Image
          src="/images/avatar.jpg" // Placeholder
          alt={`${firstName} ${lastName}`}
          width={64}
          height={64}
          className="rounded-full object-cover"
          priority
        />
        <div>
          <h2 className="text-lg font-semibold">
            {firstName} {lastName}
          </h2>
          <p className="text-sm text-gray-600">
            {degree} • {city}
          </p>
          <p className="text-sm text-gray-500">
            {yearsOfExperience} years of experience
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {specialties.map((spec, i) => (
          <span
            key={i}
            className="bg-gray-100 text-gray-700 text-xs font-medium px-2.5 py-1 rounded-full"
          >
            {spec}
          </span>
        ))}
      </div>

      <a
        href={`tel:${phoneNumber}`}
        className="ms-auto mt-auto inline-flex items-center gap-2 bg-primary text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors"
      >
        <PhoneIcon className="w-5 h-5" />
        Learn more
      </a>
    </div>
  );
};
