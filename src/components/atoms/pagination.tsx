"use client";

import React from "react";

export default function Pagination() {
  return (
    <div className="flex items-center justify-between">
      <div>6/1000 Data</div>
      <ul className="flex items-center gap-2">
        <li>prev</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>next</li>
      </ul>
    </div>
  );
}
