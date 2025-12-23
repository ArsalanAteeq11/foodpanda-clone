import React from "react";

export default function StepCard({ step, icon, description }) {
  return (
    <div className="bg-white rounded-lg p-8 text-center shadow-sm">
      <div className="mb-6 flex justify-center">
        <div className="w-20 h-20 flex items-center justify-center">{icon}</div>
      </div>
      <div className="text-4xl font-bold text-gray-900 mb-4">{step}</div>
      <p className="text-gray-900 font-medium leading-relaxed">{description}</p>
    </div>
  );
}
