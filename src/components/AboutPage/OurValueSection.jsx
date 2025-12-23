import React from "react";

const OurValuesSection = () => {
  return (
    <section className="py-4 md:py-24 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-6 md:mb-10">
          Our values
        </h2>

        {/* Values Pills Layout */}
        <div className="flex flex-col items-center gap-6 md:gap-8">
          {/* Row 1 - Single centered pill */}
          <div className="flex justify-center w-full">
            <button className="px-6 py-2 font-semibold border-2 rounded-full transition-all duration-300 hover:shadow-lg border-[#ff2b85] text-[#ff2b85] hover:bg-[#ff2b85] hover:text-white">
              prioritise, decide, deliver
            </button>
          </div>

          {/* Row 2 - Two pills */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 w-full">
            <button className="px-6 py-2 font-semibold border-2 rounded-full transition-all duration-300 hover:shadow-lg border-[#ff2b85] text-[#ff2b85] hover:bg-[#ff2b85] hover:text-white">
              start with customer, end with customer
            </button>
            <button className="px-6 py-2 font-semibold border-2 rounded-full transition-all duration-300 hover:shadow-lg border-[#ff2b85] text-[#ff2b85] hover:bg-[#ff2b85] hover:text-white">
              own it end-to-end
            </button>
          </div>

          {/* Row 3 - Two pills */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 w-full">
            <button className="px-6 py-2 font-semibold border-2 rounded-full transition-all duration-300 hover:shadow-lg border-[#ff2b85] text-[#ff2b85] hover:bg-[#ff2b85] hover:text-white">
              challenge the status quo
            </button>
            <button className="px-6 py-2 font-semibold border-2 rounded-full transition-all duration-300 hover:shadow-lg border-[#ff2b85] text-[#ff2b85] hover:bg-[#ff2b85] hover:text-white">
              we before me
            </button>
          </div>

          {/* Row 4 - Single centered pill (black) */}
          <div className="flex justify-center w-full">
            <button className="px-6 py-2 font-semibold border-2 rounded-full transition-all duration-300 hover:shadow-lg bg-gray-900 text-white border-gray-900 hover:bg-gray-800">
              plan for tomorrow, focus on today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValuesSection;
