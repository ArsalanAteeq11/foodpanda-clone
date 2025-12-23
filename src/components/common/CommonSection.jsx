import React from "react";

export default function SplitSection({
  title,
  description,
  description2,
  image,
  imagePosition = "right", // "left" | "right"
  button, // array of buttons
  subImages = [],
}) {
  console.log("button", button);
  return (
    <section className="w-full py-16">
      <div
        className={`max-w-7xl mx-auto flex flex-col-reverse gap-10 px-6 
        ${imagePosition === "left" ? "md:flex-row-reverse" : "md:flex-row"}`}
      >
        {/* TEXT SIDE */}
        <div className="flex-1 flex flex-col gap-4 justify-center">
          <h2 className="text-3xl md:text-5xl font-bold text-black">{title}</h2>

          <p className=" text-black text-lg ">{description}</p>
          {description2 !== undefined && (
            <p className="mt-6 text-black text-lg">{description2}</p>
          )}
          {button !== undefined && (
            <button className="px-6 py-2 mt-4 bg-[#ff2b85] rounded-3xl text-white w-max cursor-pointer font-bold ">
              {button}
            </button>
          )}
          {/* BUTTONS (conditional) */}
          {subImages.length > 0 && (
            <div className=" flex flex-wrap gap-3">
              {subImages.map((img, index) => (
                <a key={index} href={img.link} target="_blank" rel="noreferrer">
                  <img
                    src={img.image}
                    alt={img.alt}
                    className="h-12 cursor-pointer"
                  />
                </a>
              ))}
            </div>
          )}
        </div>

        {/* IMAGE SIDE */}
        <div className="flex-1">
          <img
            src={image}
            alt="section visual"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
