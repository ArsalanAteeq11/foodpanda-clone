import React from "react";

export default function PressCard({ article }) {
  return (
    <div className="group cursor-pointer">
      <div className="relative h-48 rounded-lg overflow-hidden mb-4">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div>
        <span className="text-[#d6005a] text-xs font-bold uppercase tracking-wider">
          {article.category}
        </span>
        <h3 className="text-gray-900 font-bold text-lg mt-2 mb-2 leading-snug group-hover:text-[#d6005a] transition-colors">
          {article.title}
        </h3>
        <p className="text-gray-500 text-sm">{article.date}</p>
      </div>
    </div>
  );
}
