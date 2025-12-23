import React, { useState } from "react";
import { ChevronRight } from "lucide-react";

export default function AccordionItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left hover:text-[#d6005a] transition-colors group"
      >
        <span className="text-lg font-medium text-gray-900 group-hover:text-[#d6005a]">
          {question}
        </span>
        <ChevronRight
          className={`w-5 h-5 text-gray-600 transition-transform ${
            isOpen ? "rotate-90" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="pb-6 text-gray-600 leading-relaxed">{answer}</div>
      )}
    </div>
  );
}
