import React from "react";

export default function FilterTags({ activeFilter, onFilterChange }) {
  const filters = [
    "All",
    "Business",
    "Campaigns",
    "Editorials",
    "Food delivery",
    "motorcycles",
    "labour issues",
  ];

  return (
    <div className="mb-8">
      <h3 className="text-gray-900 font-semibold mb-4">Discover latest news</h3>
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-all ${
              activeFilter === filter
                ? "bg-gray-900 text-white hover:bg-gray-800"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
            }`}
            onClick={() => onFilterChange(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
}
