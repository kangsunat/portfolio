import React from "react";

export default function SectionTitle({ section }: { section: string }) {
  return (
    <div className="text-2xl font-bold border-b border-rose-400 pb-4">
      {section}
    </div>
  );
}
