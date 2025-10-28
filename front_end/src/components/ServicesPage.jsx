import React from "react";
import HeroSection from "./HeroSection";

function ServicesPage() {
  const services = [
    {
      title: "Admin Management",
      description:
        "Centralized control over departments, instructors, and students with secure authentication.",
      icon: "🧑‍💼",
    },
    {
      title: "Student Enrollment",
      description:
        "Simplified registration and record tracking for students across multiple courses and semesters.",
      icon: "🎓",
    },
    {
      title: "Instructor Coordination",
      description:
        "Manage teaching schedules, course assignments, and faculty information with ease.",
      icon: "👩‍🏫",
    },
    {
      title: "Data Analytics",
      description:
        "Generate real-time reports on student performance, attendance, and academic progress.",
      icon: "📊",
    },
  ];

  return (
    <div>
      <HeroSection
        title="Our Services"
        subtitle="A unified platform for managing education efficiently."
      />

      <div className="container my-5">
        <div className="row g-4 justify-content-center">
          {services.map((service, index) => (
            <div className="col-md-5 col-lg-4" key={index}>
              <div className="card shadow border-0 h-100 text-center p-4 hover-card">
                <div className="display-5 mb-3">{service.icon}</div>
                <h5 className="fw-bold">{service.title}</h5>
                <p className="text-muted">{service.description}</p>
                <p className="small text-muted">Includes role-based access, audit logs, and secure backups.</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5">
          <h4>Frequently Asked</h4>
          <p className="text-muted">Q: Can I migrate existing student data? <br/>A: Yes — we support CSV import and API-based migrations.</p>
          <p className="text-muted">Q: Is there mobile access? <br/>A: Academia Suite is responsive and works on mobile devices.</p>
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;
