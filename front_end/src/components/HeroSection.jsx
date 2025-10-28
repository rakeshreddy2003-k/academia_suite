import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import bg1 from "../assets/bg.jpg";
import bg2 from "../assets/bg1.jpeg";
import bg3 from "../assets/bg2.jpeg";
import bg4 from "../assets/bg3.jpeg";

function HeroSection({ title, subtitle, children }) {
  const images = [bg1, bg2, bg3, bg4];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div
      className="hero-section position-relative text-center text-white mb-5 overflow-hidden"
      style={{
        height: "100vh", // 🔥 increased from 80vh → full screen
        borderRadius: "0 0 40px 40px",
        boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
      }}
    >
      {/* Background images */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`hero-bg ${index === currentIndex ? "active" : ""}`}
          style={{
            backgroundImage: `url(${img})`,
          }}
        ></div>
      ))}

      {/* Overlay gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, rgba(0,96,120,0.5), rgba(227,124,120,0.4))",
          zIndex: 1,
        }}
      ></div>

      {/* Hero text content */}
      <div
        className="container position-relative"
        style={{
          zIndex: 2,
          top: "55%",
          transform: "translateY(-50%)",
        }}
      >
        <h1
          className="fw-bold mb-3 brand-font"
          style={{
            fontSize: "3.5rem",
            textShadow: "0 4px 10px rgba(0,0,0,0.5)",
          }}
        >
          {title}
        </h1>
        <p
          className="lead mb-2"
          style={{
            fontSize: "1.5rem",
            maxWidth: "850px",
            margin: "0 auto",
            textShadow: "0 2px 6px rgba(0,0,0,0.4)",
          }}
        >
          {subtitle}
        </p>
        {children && <div className="mt-3">{children}</div>}
      </div>

      {/* Navigation Arrows */}
      <button onClick={handlePrev} className="hero-arrow left" aria-label="Previous Slide">
        <FaChevronLeft />
      </button>
      <button onClick={handleNext} className="hero-arrow right" aria-label="Next Slide">
        <FaChevronRight />
      </button>
    </div>
  );
}

export default HeroSection;
