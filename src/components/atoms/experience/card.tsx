import Link from "next/link";
import React from "react";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaLinkedin, FaLinkedinIn } from "react-icons/fa";

type tExperienceCard = {
  date: { start: string; end?: string };
  position: string;
  company?: { name: string; linkedin: string; website: string };
  description: string;
};

export default function ExperienceCard({
  date,
  description,
  position,
  company,
}: tExperienceCard) {
  return (
    <div className="space-y-4 p-4">
      <p className="text-base font-medium md:text-lg ">
        {date.start} - {date.end ?? "Now"}
      </p>
      <div className="space-y-3">
        <p className="font-semibold text-rose-400 md:text-lg md:font-bold">
          {position}
        </p>
        <div className={`flex items-center gap-4 ${!company && "hidden"}`}>
          <p>{company?.name}</p>
          <div className="flex items-center gap-2">
            {company?.linkedin && (
              <Link
                href={company.linkedin}
                target="_blank"
                className="rounded-full bg-white p-1 "
              >
                <i className="text-xs text-blue-500">
                  <FaLinkedinIn />
                </i>
              </Link>
            )}
            {company?.website && (
              <Link
                href={company.website}
                target="_blank"
                className="rounded-full bg-white p-1"
              >
                <i className="text-xs text-black">
                  <AiOutlineGlobal />
                </i>
              </Link>
            )}
          </div>
        </div>
      </div>
      <details className="space-y-3">
        <summary className="text-sm md:text-base">Description</summary>
        <p className="text-sm md:text-base">{description}</p>
      </details>
    </div>
  );
}
