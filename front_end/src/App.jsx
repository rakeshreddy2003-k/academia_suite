import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ServicesPage from "./components/ServicesPage";
import ContactPage from "./components/ContactPage";
import AdminRegistration from "./components/AdminRegistration";
import StudentRegistration from "./components/StudentRegistration";
import InstructorRegistration from "./components/InstructorRegistration";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/admin" element={<AdminRegistration />} />
        <Route path="/student" element={<StudentRegistration />} />
        <Route path="/instructor" element={<InstructorRegistration />} />
      </Routes>

      {/* Marquee above footer */}
      <marquee className="marquee" behavior="scroll" direction="left">
        🎓 Welcome to Academia Suite — Streamlining Administration, Empowering Learning.
        | Admissions Open 2025 | Stay tuned for upcoming workshops & events! 🌸
      </marquee>

      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
