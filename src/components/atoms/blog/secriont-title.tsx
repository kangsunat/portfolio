import React from "react";

export default function SectionTitle({ section }: { section: string }) {
  return (
    <div className="border-b border-rose-400 pb-4 text-xl font-bold md:text-2xl">
      {section}
    </div>
  );
}
