import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// ✅ Import background images
import bg1 from "../assets/bg.jpg";
import bg2 from "../assets/bg1.jpeg";
import bg3 from "../assets/bg2.jpeg";
import bg4 from "../assets/bg3.jpeg";

function Hero() {
  const images = [bg1, bg2, bg3, bg4];
  const [currentIndex, setCurrentIndex] = useState(0);

  // 🔁 Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div
      className="hero-section position-relative text-center text-white overflow-hidden"
      style={{
        height: "100vh",
        borderRadius: "0 0 40px 40px",
        boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
      }}
    >
      {/* 🔹 Background images that change */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`hero-bg ${index === currentIndex ? "active" : ""}`}
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "absolute",
            inset: 0,
            transition: "opacity 1.5s ease-in-out",
            opacity: index === currentIndex ? 1 : 0,
          }}
        ></div>
      ))}

      {/* 🔹 Overlay gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, rgba(0,96,120,0.5), rgba(227,124,120,0.4))",
          zIndex: 1,
        }}
      ></div>

      {/* 🔹 Text content on top of the image */}
      <div
        className="container position-relative"
        style={{
          zIndex: 2,
          top: "55%",
          transform: "translateY(-50%)",
        }}
      >
        <h1 className="display-5 fw-bold text-white">
          Welcome to Academia Suite
        </h1>
        <p className="text-light mt-3 mb-4 fs-5">
          Streamline college management and connect students, instructors, and
          administrators on one powerful platform.
        </p>
        <a href="#about" className="btn btn-warning px-4 py-2">
          Learn More
        </a>
      </div>

      {/* 🔹 Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="hero-arrow left"
        aria-label="Previous Slide"
        style={{
          position: "absolute",
          top: "50%",
          left: "20px",
          transform: "translateY(-50%)",
          background: "rgba(255,255,255,0.3)",
          border: "none",
          borderRadius: "50%",
          width: "45px",
          height: "45px",
          color: "#fff",
          fontSize: "1.3rem",
          cursor: "pointer",
          zIndex: 3,
        }}
      >
        <FaChevronLeft />
      </button>

      <button
        onClick={handleNext}
        className="hero-arrow right"
        aria-label="Next Slide"
        style={{
          position: "absolute",
          top: "50%",
          right: "20px",
          transform: "translateY(-50%)",
          background: "rgba(255,255,255,0.3)",
          border: "none",
          borderRadius: "50%",
          width: "45px",
          height: "45px",
          color: "#fff",
          fontSize: "1.3rem",
          cursor: "pointer",
          zIndex: 3,
        }}
      >
        <FaChevronRight />
      </button>
    </div>
  );
}

export default Hero;
