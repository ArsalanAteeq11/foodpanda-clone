import React from "react";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import PressReleases from "./pages/PressRelease";
import Partners from "./pages/Partners";
import ScrollToTop from "./components/Layout/ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/newsroom" element={<PressReleases />} />
        <Route path="/partners" element={<Partners />} />
      </Routes>
      <ScrollToTop />
      <Footer />
    </BrowserRouter>
  );
}
