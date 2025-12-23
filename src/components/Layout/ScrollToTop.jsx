import { useEffect, useState } from "react";
import { IoChevronUp } from "react-icons/io5";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    setIsVisible(window.scrollY > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-0 right-0 p-4 flex flex-col items-center gap-2 z-50">
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-[#ff2b85] hover:bg-[#ff2b85]/90 cursor-pointer text-white shadow-lg z-50"
            size="icon"
          >
            <IoChevronUp size={22} />
          </button>
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
