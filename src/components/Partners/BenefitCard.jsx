import React from "react";

export default function BenefitCard({ title, image }) {
  return (
    <div className="relative h-56 rounded-lg overflow-hidden group cursor-pointer">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
      {/* <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all" /> */}
      <div className="absolute top-6 left-6">
        <h3 className="text-white font-bold text-xl uppercase leading-tight max-w-37.5">
          {title}
        </h3>
      </div>
    </div>
  );
}
