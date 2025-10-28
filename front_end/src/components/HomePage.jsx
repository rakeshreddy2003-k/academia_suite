import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function HomePage() {
  return (
    <div>
      {/* Hero / Welcome */}
      <div className="container text-center my-5 hero-welcome">
        <h1 className="fw-bold mb-4">Welcome to Academia Suite</h1>
        <p className="text-muted mb-4">
          Manage all your academic operations — administration, students, and instructors — all in one place.
        </p>

        <p className="lead extra-text">
          Academia Suite helps colleges automate administration, improve student outcomes, and provide
          faculty the tools they need to teach and manage with less friction. Explore features like
          enrollment automation, attendance tracking, fee management, instructor scheduling, and analytics.
        </p>
      </div>

      {/* Portal Cards */}
      <div className="container">
        <div className="row justify-content-center g-4">
          <div className="col-md-3">
            <div className="card shadow-lg border-0 hover-card">
              <div className="card-body">
                <h5 className="card-title mb-3">Admin Portal</h5>
                <p className="text-muted">Register new admins and manage system settings.</p>
                <Link to="/admin" className="btn btn-primary w-100">Go to Admin</Link>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card shadow-lg border-0 hover-card">
              <div className="card-body">
                <h5 className="card-title mb-3">Student Portal</h5>
                <p className="text-muted">Enroll, track, and update student academic details.</p>
                <Link to="/student" className="btn btn-success w-100">Go to Student</Link>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card shadow-lg border-0 hover-card">
              <div className="card-body">
                <h5 className="card-title mb-3">Instructor Portal</h5>
                <p className="text-muted">Add or manage instructor profiles and schedules.</p>
                <Link to="/instructor" className="btn btn-warning w-100">Go to Instructor</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* More information / Features section */}
      <div className="container my-5">
        <div className="features-grid">
          <div className="feature">
            <h4>Enrollment & Records</h4>
            <p>Streamlined enrollment flow with document uploads, verification checklist, and secure records storage.</p>
          </div>
          <div className="feature">
            <h4>Attendance & Exams</h4>
            <p>Automated attendance tracking, exam scheduling and results management — all in one place.</p>
          </div>
          <div className="feature">
            <h4>Fees & Finance</h4>
            <p>Integrated fee management, invoicing, and reporting for administrations and finance teams.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
