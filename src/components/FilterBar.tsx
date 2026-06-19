'use client';

import { useState } from "react";

  const filterTerms = ["All Services", "Public", "Private", "Emergency"];

export default function FilterBar() {
const [activeFilter, setActiveFilter] = useState("All Services")

  return (
    
    <div className="px-6 py-5 shadow-lg rounded-md">
          <div className="flex flex-row flex-wrap justify-between items-center mb-4">
            <h1 className="font-semibold text">Nearby Hospitals</h1>
         
              <button className="flex items-center gap-1.5 text-primary text-xs font-medium ">Sort by Distance
                 <span className="material-symbols-outlined text-primary">sort</span>
              </button>
            </div>
          

          {/* filter pills */}
          <div className="flex items-center justify-center gap-2 flex-wrap">
            {filterTerms.map((filter) => (
              <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-1.5 text-xs bg-white border border-gray-500 text-on-surface-variant rounded-lg ${
                activeFilter === filter 
                ? "border-primary text-primary"
                : "border-gray-400 text-gray-500 hover:border-[555] hover:text-white"
              }`}
              >{filter}</button>
            ))}
          </div>
    </div>
  );
}
