import React, { useState } from "react";
import axios from "axios";
import "../App.css"; 

const InstructorRegistration = () => {
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
    fullName: "",
    gender: "",
    email: "",
    age: "",
    phone: "",
    address: "",
    department: "",
    subjectSpecialization: "",
    degree: "",
    experience: "",
    joiningDate: "",
    qualification: "",
    achievements: "",
    qualificationFile: null,
    achievementFile: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        data.append(key, value);
      });

      await axios.post("http://localhost:8080/instructor/register", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Instructor registered successfully!");
    } catch (err) {
      alert("Error registering instructor!");
    }
  };

  return (
    <div className="container mt-5 mb-5">
      <div
        className="card shadow p-4"
        style={{ maxWidth: "700px", margin: "0 auto", borderRadius: "12px" }}
      >
        <h2 className="text-center mb-4">Instructor Registration</h2>

        <form onSubmit={handleSubmit} className="row g-3">
          {/* Username */}
          <div className="col-md-6">
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

          {/* Password */}
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

          {/* Full Name */}
          <div className="col-md-6">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              name="fullName"
              placeholder="Enter full name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          {/* Gender */}
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
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          {/* Department */}
          <div className="col-md-6">
            <label className="form-label">Department</label>
            <select
              className="form-select"
              name="department"
              value={formData.department}
              onChange={handleChange}
              required
            >
              <option value="">Select Department</option>
              <option value="CSE">Computer Science</option>
              <option value="ECE">Electronics & Communication</option>
              <option value="ME">Mechanical</option>
              <option value="CE">Civil</option>
              <option value="EE">Electrical</option>
            </select>
          </div>

          {/* Subject */}
          <div className="col-md-6">
            <label className="form-label">Subject Specialization</label>
            <select
              className="form-select"
              name="subjectSpecialization"
              value={formData.subjectSpecialization}
              onChange={handleChange}
              required
            >
              <option value="">Select Subject</option>
              <option>Data Structures</option>
              <option>Database Management</option>
              <option>Software Engineering</option>
              <option>Operating Systems</option>
              <option>Networks</option>
            </select>
          </div>

          {/* Degree */}
          <div className="col-md-6">
            <label className="form-label">Degree</label>
            <input
              type="text"
              className="form-control"
              name="degree"
              placeholder="e.g., M.Tech, PhD"
              value={formData.degree}
              onChange={handleChange}
            />
          </div>

          {/* Experience */}
          <div className="col-md-6">
            <label className="form-label">Experience (Years)</label>
            <input
              type="number"
              className="form-control"
              name="experience"
              placeholder="Enter years of experience"
              value={formData.experience}
              onChange={handleChange}
            />
          </div>

          {/* Qualification */}
          <div className="col-md-6">
            <label className="form-label">Highest Qualification</label>
            <input
              type="text"
              className="form-control"
              name="qualification"
              placeholder="e.g., Ph.D in Computer Science"
              value={formData.qualification}
              onChange={handleChange}
            />
          </div>

          {/* Achievements */}
          <div className="col-md-6">
            <label className="form-label">Achievements (if any)</label>
            <input
              type="text"
              className="form-control"
              name="achievements"
              placeholder="Enter achievements"
              value={formData.achievements}
              onChange={handleChange}
            />
          </div>

          {/* Qualification Proof */}
          <div className="col-md-6">
            <label className="form-label">Upload Qualification Proof</label>
            <input
              type="file"
              className="form-control"
              name="qualificationFile"
              accept=".pdf,.jpg,.png"
              onChange={handleChange}
            />
          </div>

          {/* Achievement Proof */}
          <div className="col-md-6">
            <label className="form-label">Upload Achievement Proof</label>
            <input
              type="file"
              className="form-control"
              name="achievementFile"
              accept=".pdf,.jpg,.png"
              onChange={handleChange}
            />
          </div>

          {/* Joining Date */}
          <div className="col-md-6">
            <label className="form-label">Joining Date</label>
            <input
              type="date"
              className="form-control"
              name="joiningDate"
              value={formData.joiningDate}
              onChange={handleChange}
            />
          </div>

          {/* Phone */}
          <div className="col-md-6">
            <label className="form-label">Phone Number</label>
            <input
              type="text"
              className="form-control"
              name="phone"
              placeholder="Enter phone number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          {/* Age */}
          <div className="col-md-6">
            <label className="form-label">Age</label>
            <input
              type="number"
              className="form-control"
              name="age"
              placeholder="Enter age"
              value={formData.age}
              onChange={handleChange}
            />
          </div>

          {/* Address */}
          <div className="col-12">
            <label className="form-label">Address</label>
            <textarea
              className="form-control"
              name="address"
              rows="2"
              placeholder="Enter full address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>

          {/* Submit */}
          <div className="col-12 text-center mt-3">
            <button type="submit" className="btn btn-success px-4">
              Register
            </button>
          </div>
        </form>
      </div>

      {/* informational panel below form */}
      <div className="container mt-4" style={{ maxWidth: 900 }}>
        <div className="card p-3 shadow-sm" style={{ borderRadius: 10 }}>
          <h5>Instructor onboarding</h5>
          <p className="text-muted mb-0">
            After registration, you will receive an email with steps to complete verification and set up
            your teaching profile. Make sure to upload qualification documents to speed up the approval.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InstructorRegistration;
