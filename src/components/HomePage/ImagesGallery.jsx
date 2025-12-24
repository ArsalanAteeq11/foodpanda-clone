import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
const storiesData = [
  {
    id: 1,
    imageUrl: "./images/foodpanda-8.webp",
    title: "Crimson Forest",
    desc: "foodpanda strengthens merchant care with record onboarding milestone in Asia",
    date: "17.12.2025",
  },
  {
    id: 2,
    imageUrl: "./images/foodpanda-9.jpg",
    title: "Crimson Forest",
    desc: "foodpanda strengthens merchant care with record onboarding milestone in Asia",
    date: "17.12.2025",
  },
  {
    id: 3,
    imageUrl: "./images/foodpanda-10.jpg",
    title: "Crimson Forest",
    desc: "foodpanda strengthens merchant care with record onboarding milestone in Asia",
    date: "17.12.2025",
  },
  {
    id: 4,
    imageUrl: "./images/foodpanda-11.png",
    title: "Crimson Forest",
    desc: "foodpanda strengthens merchant care with record onboarding milestone in Asia",
    date: "17.12.2025",
  },
  {
    id: 5,
    imageUrl: "./images/foodpanda-8.webp",
    title: "Crimson Forest",
    desc: "foodpanda strengthens merchant care with record onboarding milestone in Asia",
    date: "17.12.2025",
  },
  {
    id: 6,
    imageUrl: "./images/foodpanda-9.jpg",
    title: "Crimson Forest",
    desc: "foodpanda strengthens merchant care with record onboarding milestone in Asia",
    date: "17.12.2025",
  },
  {
    id: 7,
    imageUrl: "./images/foodpanda-10.jpg",
    title: "Crimson Forest",
    desc: "foodpanda strengthens merchant care with record onboarding milestone in Asia",
    date: "17.12.2025",
  },
  {
    id: 8,
    imageUrl: "./images/foodpanda-11.png",
    title: "Crimson Forest",
    desc: "foodpanda strengthens merchant care with record onboarding milestone in Asia",
    date: "17.12.2025",
  },
  {
    id: 9,
    imageUrl: "./images/foodpanda-8.webp",
    title: "Crimson Forest",
    desc: "foodpanda strengthens merchant care with record onboarding milestone in Asia",
    date: "17.12.2025",
  },
];
const StoryCard = ({ story }) => {
  return (
    <motion.div
      className="relative w-72 h-96 flex-shrink-0 rounded-lg overflow-hidden shadow-xl group"
      whileHover={{
        y: -8,
        transition: {
          type: "spring",
          stiffness: 300,
        },
      }}
    >
      <img
        src={story.imageUrl}
        alt={story.title}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 pointer-events-none"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
      <div className="relative z-10 flex flex-col justify-end h-full p-6 text-white">
        <h3 className="font-bold text-xl tracking-wide">{story.title}</h3>
        <h3 className="font-bold text-2xl mt-15 tracking-wide">{story.desc}</h3>
        <h3 className="font-semi-bold tracking-wide">{story.date}</h3>
      </div>
    </motion.div>
  );
};
export default function CarouselCards() {
  const trackRef = useRef(null);
  const containerRef = useRef(null);
  const [dragConstraint, setDragConstraint] = useState(0);
  useEffect(() => {
    const calculateConstraints = () => {
      if (containerRef.current && trackRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const trackWidth = trackRef.current.scrollWidth;
        setDragConstraint(containerWidth - trackWidth);
      }
    };
    calculateConstraints();
    window.addEventListener("resize", calculateConstraints);
    return () => window.removeEventListener("resize", calculateConstraints);
  }, []);
  return (
    <div className="font-sans w-full py-12 md:py-20 flex flex-col items-center justify-center bg-[#f5f5f6]">
      <div className="w-full max-w-7xl mx-auto px-4">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-black  ">
            Have you heard?
          </h1>
          <p className="mt-4 text-lg text-gray-400">
            The industry is changing fast! Stay up to date with foodpanda press.
            Catch up on the lates news, updates and reports here.
          </p>
        </header>

        <motion.div
          ref={containerRef}
          className="relative overflow-hidden cursor-grab"
          whileTap={{ cursor: "grabbing" }}
        >
          {/* LEFT BLUR */}
          <div
            className="pointer-events-none absolute left-0 top-0 h-full w-24 z-20 
    bg-gradient-to-r from-[#f5f5f6] via-[#f5f5f6]/80 to-transparent"
          ></div>

          {/* RIGHT BLUR */}
          <div
            className="pointer-events-none absolute right-0 top-0 h-full w-24 z-20 
    bg-gradient-to-l from-[#f5f5f6] via-[#f5f5f6]/80 to-transparent"
          ></div>
          <motion.div
            ref={trackRef}
            className="flex space-x-6 pb-6 px-4"
            drag="x"
            dragConstraints={{
              right: 0,
              left: dragConstraint - 32,
            }}
            dragElastic={0.15}
          >
            {storiesData.map((story) => (
              <StoryCard key={story.id} story={story} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
