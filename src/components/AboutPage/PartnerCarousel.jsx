import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const slides = [
  {
    title: "Growing with our partners",
    description:
      "We work with the best restaurants and stores. We support our partners every step of the way and empower their growth. Ready to take your business to the next level?",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80",
  },
  {
    title: "Delivering happiness",
    description:
      "Our dedicated riders ensure your orders reach customers quickly and safely. Join thousands of delivery partners earning on their own schedule.",
    image:
      "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=800&q=80",
  },
  {
    title: "Fresh & quality products",
    description:
      "From farm to table, we ensure the highest quality standards. Partner with us to showcase your best products to millions of customers.",
    image:
      "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=800&q=80",
  },
];

export default function PartnersCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <section className="bg-[#f5f5f5] min-h-[500px] lg:min-h-[600px] w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentSlide}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                  {slides[currentSlide].title}
                </h2>
                <p className="text-gray-600 text-base lg:text-lg leading-relaxed max-w-md">
                  {slides[currentSlide].description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center gap-4 mt-10 lg:mt-14">
              <button
                onClick={prevSlide}
                className="p-2 hover:bg-gray-200 rounded-full transition-colors duration-200 group"
                aria-label="Previous slide"
              >
                <ArrowLeft className="w-5 h-5 text-gray-800 group-hover:text-[#d6005a] transition-colors" />
              </button>

              <div className="flex items-center gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`transition-all duration-300 rounded-full ${
                      currentSlide === index
                        ? "w-3 h-3 bg-[#d6005a]"
                        : "w-2 h-2 bg-gray-400 hover:bg-gray-500"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="p-2 hover:bg-gray-200 rounded-full transition-colors duration-200 group"
                aria-label="Next slide"
              >
                <ArrowRight className="w-5 h-5 text-gray-800 group-hover:text-[#d6005a] transition-colors" />
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2 relative">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentSlide}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="relative aspect-[4/3] lg:aspect-[16/12] overflow-hidden rounded-lg lg:rounded-none"
              >
                <img
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].title}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
