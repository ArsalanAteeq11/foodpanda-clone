import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { IoChevronUp } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* TOP GRID */}
        <div className="flex items-center gap-3 mb-6">
          <img src="./images/foodpanda_logo_2023.svg" alt="" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* LOGO + NAVIGATE */}
          <div>
            <h4 className="font-semibold mb-4">Navigate</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">About</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
              <li className="hover:text-white cursor-pointer">Newsroom</li>
            </ul>
          </div>

          {/* COLLABORATE */}
          <div>
            <h4 className="font-semibold mb-4">Collaborate</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white cursor-pointer">
                Explore careers
              </li>
              <li className="hover:text-white cursor-pointer">
                Become a rider
              </li>
              <li className="hover:text-white cursor-pointer">
                Feed your team
              </li>
            </ul>
          </div>

          {/* SOCIALS */}
          <div className="md:text-right">
            <h4 className="font-semibold mb-4">Follow us on</h4>
            <div className="flex md:justify-end gap-4">
              <a className="hover:text-pink-500 cursor-pointer">
                <FaFacebookF size={20} />
              </a>
              <a className="hover:text-pink-500 cursor-pointer">
                <FaLinkedinIn size={20} />
              </a>
              <a className="hover:text-pink-500 cursor-pointer">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm gap-4">
          <p>Copyright © 2025 foodpanda</p>
          <p className="hover:text-white cursor-pointer">Privacy Policy</p>
        </div>
      </div>

      {/* SCROLL TO TOP */}
      {/* <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 cursor-pointer right-6 bg-[#ff2b85] hover:bg-[#ff2b85]/90 
        text-white p-3 rounded-md shadow-lg transition"
      >
        <IoChevronUp size={22} />
      </button> */}
    </footer>
  );
}
