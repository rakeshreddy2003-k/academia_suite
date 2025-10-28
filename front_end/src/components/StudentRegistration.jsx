import React, { useState } from "react";
import axios from "axios";
import "../App.css";
const StudentRegistration = () => {
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
    fullName: "",
    gender: "",
    email: "",
    age: "",
    phone: "",
    address: "",
    tenthSchool: "",
    twelfthSchool: "",
    tenthPercentage: "",
    twelfthPercentage: "",
    degree: "",
    course: "",
    semester: "",
    rollNo: "",
    guardianName: "",
    guardianContact: "",
    certificate10: null,
    certificatePuc: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      await axios.post("http://localhost:8080/student/register", formDataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Student registered successfully!");
    } catch (err) {
      alert("Error registering student!");
    }
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="card shadow p-4" style={{ maxWidth: "700px", margin: "0 auto", borderRadius: "12px" }}>
        <h2 className="text-center mb-4">Student Registration</h2>
        <form onSubmit={handleSubmit} className="row g-3">
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

          <div className="col-md-6">
            <label className="form-label">10th School Name</label>
            <input
              type="text"
              className="form-control"
              name="tenthSchool"
              placeholder="Enter 10th school name"
              value={formData.tenthSchool}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">12th School Name</label>
            <input
              type="text"
              className="form-control"
              name="twelfthSchool"
              placeholder="Enter 12th school name"
              value={formData.twelfthSchool}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">10th Percentage</label>
            <input
              type="number"
              className="form-control"
              name="tenthPercentage"
              placeholder="Enter 10th percentage"
              value={formData.tenthPercentage}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">12th Percentage</label>
            <input
              type="number"
              className="form-control"
              name="twelfthPercentage"
              placeholder="Enter 12th percentage"
              value={formData.twelfthPercentage}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">10th Certificate</label>
            <input
              type="file"
              className="form-control"
              name="certificate10"
              accept=".pdf,.jpg,.png"
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">PUC / 12th Certificate</label>
            <input
              type="file"
              className="form-control"
              name="certificatePuc"
              accept=".pdf,.jpg,.png"
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Course</label>
            <select
              className="form-select"
              name="course"
              value={formData.course}
              onChange={handleChange}
            >
              <option value="">Select Course</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Electronics">Electronics</option>
              <option value="Mechanical Engineering">Mechanical Engineering</option>
              <option value="Civil Engineering">Civil Engineering</option>
              <option value="Electrical Engineering">Electrical Engineering</option>
            </select>
          </div>

          <div className="col-md-6">
            <label className="form-label">Degree</label>
            <input
              type="text"
              className="form-control"
              name="degree"
              placeholder="e.g., B.Tech, BSc, etc."
              value={formData.degree}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Semester</label>
            <input
              type="text"
              className="form-control"
              name="semester"
              placeholder="e.g., 5th Semester"
              value={formData.semester}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Roll Number</label>
            <input
              type="text"
              className="form-control"
              name="rollNo"
              placeholder="Enter roll number"
              value={formData.rollNo}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Guardian Name</label>
            <input
              type="text"
              className="form-control"
              name="guardianName"
              placeholder="Enter guardian name"
              value={formData.guardianName}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Guardian Contact</label>
            <input
              type="text"
              className="form-control"
              name="guardianContact"
              placeholder="Enter guardian contact"
              value={formData.guardianContact}
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
            />
          </div>

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

          <div className="col-12 text-center mt-3">
            <button type="submit" className="btn btn-success px-4">
              Register
            </button>
          </div>
        </form>
      </div>

      {/* informational panel below the form */}
      <div className="container mt-4" style={{ maxWidth: 900 }}>
        <div className="card p-3 shadow-sm" style={{ borderRadius: 10 }}>
          <h5>Tips for a smooth registration</h5>
          <ul className="text-muted">
            <li>Use your official email and keep scanned certificates handy.</li>
            <li>Upload clear PDF/JPG scans for 10th and 12th certificates.</li>
            <li>If you face any issue, contact support@academiasuite.edu.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StudentRegistration;
