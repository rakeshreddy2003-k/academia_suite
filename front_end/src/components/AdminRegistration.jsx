import React, { useState } from "react";
import "../App.css";
const AdminRegistration = () => {
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
    gender: "",
    degree: "",
    age: "",
    experiences: "",
    phone: "",
    role: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Admin Registered:", formData);
  };

  return (
    <div className="container mt-5 mb-5">
      <div
        className="card shadow p-4"
        style={{ maxWidth: "600px", margin: "0 auto", borderRadius: "12px" }}
      >
        <h2 className="text-center mb-4">Admin Registration</h2>
        <form onSubmit={handleSubmit} className="row g-3">
          <div className="col-md-12">
            <label className="form-label">Username / Email</label>
            <input
              type="email"
              className="form-control"
              name="userName"
              placeholder="Enter your email"
              value={formData.userName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Phone Number</label>
            <input
              type="text"
              className="form-control"
              name="phone"
              placeholder="Enter phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Gender</label>
            <select
              className="form-select"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="col-md-6">
            <label className="form-label">Degree</label>
            <input
              type="text"
              className="form-control"
              name="degree"
              placeholder="e.g., B.Tech, MSc, etc."
              value={formData.degree}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Age</label>
            <input
              type="number"
              className="form-control"
              name="age"
              placeholder="Enter age"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Experience (Years)</label>
            <input
              type="number"
              className="form-control"
              name="experiences"
              placeholder="Enter years of experience"
              value={formData.experiences}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-12">
            <label className="form-label">Role</label>
            <select
              className="form-select"
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
            >
              <option value="">Select Role</option>
              <option value="Student Management">Student Management</option>
              <option value="Fault Management">Fault Management</option>
              <option value="Desktop Engineering">Desktop Engineering</option>
              <option value="Fees Management">Fees Management</option>
            </select>
          </div>

          <div className="col-12 text-center mt-3">
            <button type="submit" className="btn btn-primary px-4">
              Register
            </button>
          </div>
        </form>
      </div>

      {/* informational panel below form */}
      <div className="container mt-4" style={{ maxWidth: 800 }}>
        <div className="card p-3 shadow-sm" style={{ borderRadius: 10 }}>
          <h5>What happens next?</h5>
          <p className="text-muted mb-0">
            After registration, an admin account will be reviewed and activated by the system administrator.
            Admins can manage student records, configure departments, and access reports. Keep your contact
            number and official email handy for verification.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminRegistration;
