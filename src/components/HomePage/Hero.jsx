import React from "react";

export default function Hero({
  type = "video", // "video" | "image"
  src,
  heading,
  button,
  subText,
  height = "h-[450px]",
  textPosition = "bottom-left", // bottom-left | center
  overlay = true,
}) {
  return (
    <section className="w-full">
      <div className={`relative w-full ${height}`}>
        {/* BACKGROUND */}
        {type === "video" ? (
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={src} type="video/mp4" />
          </video>
        ) : (
          <img
            src={src}
            alt="hero"
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}

        {/* OVERLAY */}
        {overlay && <div className="absolute inset-0 bg-black/30"></div>}

        {/* CONTENT */}
        <div
          className={`relative z-10 h-full px-6 flex flex-col ${
            textPosition === "center"
              ? "items-center justify-center text-center"
              : "justify-end"
          }`}
        >
          {heading?.text && (
            <h1 className={heading.className}>{heading.text}</h1>
          )}

          {button !== undefined && (
            <button className="px-8 py-3 ml-10 mb-16 bg-[#ff2b85] rounded-3xl text-white text-lg w-max cursor-pointer font-bold ">
              {button}
            </button>
          )}
        </div>
      </div>

      {/* TEXT SECTION (OPTIONAL) */}
      {subText?.length > 0 && (
        <div className="my-20 px-10 max-w-7xl ">
          {subText.map((item, index) => (
            <p key={index} className={item.className}>
              {item.text}
            </p>
          ))}
        </div>
      )}
    </section>
  );
}
