import React from "react";
import { ArrowRight } from "lucide-react";

export default function FeaturedPressCard({ article }) {
  return (
    <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="grid md:grid-cols-2 gap-0">
        <div className="relative h-64 md:h-full">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-8 flex flex-col justify-center">
          <div className="mb-3">
            <span className="text-[#d6005a] text-xs font-bold uppercase tracking-wider">
              {article.category}
            </span>
            <span className="text-gray-400 text-xs ml-3">{article.date}</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
            {article.title}
          </h2>
          <button className="flex items-center gap-2 text-[#d6005a] font-semibold hover:gap-3 transition-all group">
            Read more
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
