import React from "react";
import HeroSection from "./HeroSection";

function AboutPage() {
  return (
    <div>
      <HeroSection
        title="About Academia Suite"
        subtitle="Empowering education through intelligent digital management."
      />

      <div className="container my-5">
        <h2 className="fw-bold mb-3">Who We Are</h2>
        <p className="text-muted">
          Academia Suite is a comprehensive educational management platform designed
          to streamline administrative, academic, and communication processes in schools
          and colleges. Our mission is to simplify institutional workflows and enhance
          the learning experience for students and faculty alike.
        </p>

        <h2 className="fw-bold mt-5 mb-3">Our Vision</h2>
        <p className="text-muted">
          To create a unified platform where institutions, instructors, and students
          collaborate seamlessly — leveraging technology to promote excellence and efficiency.
        </p>

        <h2 className="fw-bold mt-5 mb-3">Case Study</h2>
        <p className="text-muted">
          A partner college reduced manual admin work by 40% within 6 months of integrating Academia Suite.
          They automated enrollment verifications and consolidated all student records, enabling the
          administration to focus more on student success.
        </p>

        <h2 className="fw-bold mt-5 mb-3">Our Values</h2>
        <ul className="text-muted">
          <li>📘 Innovation in Education</li>
          <li>🤝 Transparency & Collaboration</li>
          <li>⚡ Efficiency through Automation</li>
          <li>🌍 Sustainability and Accessibility</li>
        </ul>
      </div>
    </div>
  );
}

export default AboutPage;
