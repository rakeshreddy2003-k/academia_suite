import React from "react";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/logo.png"; // optional: if not present, remove this line and the <img> below

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
          {/* If you don't want the image, you can delete the img tag below */}
          <img
            src={logo}
            alt="Academia Suite"
            style={{ width: 36, height: 36, marginRight: 10 }}
            onError={(e) => { e.target.style.display = 'none'; }}
          />
          Academia Suite
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                aria-current={location.pathname === "/" ? "page" : undefined}
                className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
                to="/"
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === "/about" ? "active" : ""}`}
                to="/about"
              >
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === "/services" ? "active" : ""}`}
                to="/services"
              >
                Services
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`}
                to="/contact"
              >
                Contact
              </Link>
            </li>

            {/* portals */}
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === "/admin" ? "active" : ""}`}
                to="/admin"
              >
                Admin
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === "/student" ? "active" : ""}`}
                to="/student"
              >
                Student
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === "/instructor" ? "active" : ""}`}
                to="/instructor"
              >
                Instructor
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
