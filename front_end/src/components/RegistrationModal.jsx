import React, { useState } from "react";
import { Modal, Tab, Nav, Form, Button, InputGroup } from "react-bootstrap";
import {
  FaEnvelope,
  FaLock,
  FaUser,
  FaPhone,
  FaUserGraduate,
  FaTimes,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // ✅ NEW
import axios from "axios";

function RegistrationModal({ show, onHide }) {
  const [tab, setTab] = useState("Student");
  const [formData, setFormData] = useState({});
  const navigate = useNavigate(); // ✅ NEW

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

      const endpoint = `http://localhost:8080/${tab.toLowerCase()}/register`;
      await axios.post(endpoint, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert(`${tab} registered successfully!`);
      onHide();
    } catch (err) {
      console.error("Registration error:", err);
      alert("Error during registration. Please try again.");
    }
  };

  // ✅ navigate to login page
  const handleLoginClick = () => {
    onHide(); // close modal first
    navigate("/login"); // then go to login route
  };

  if (!show) return null;

  return (
    <>
      {/* BACKDROP: click anywhere to close */}
      <div
        onClick={onHide}
        style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1040,
        }}
      />

      <Modal
        show={show}
        onHide={onHide}
        centered
        backdrop={false}
        keyboard={true}
        style={{ zIndex: 1050 }}
      >
        {/* HEADER */}
        <div
          className="p-4 text-white d-flex justify-content-between align-items-start"
          style={{
            background: "linear-gradient(135deg, #6e8efb 0%, #a777e3 100%)",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
          }}
        >
          <div>
            <h4 className="fw-bold mb-1 d-flex align-items-center">
              <FaUserGraduate className="me-2" /> {tab} Registration
            </h4>
            <p className="mb-0">
              Register as {tab.toLowerCase()} to join Academia Suite.
            </p>
          </div>

          {/* Close Button */}
          <button
            onClick={onHide}
            style={{
              background: "transparent",
              border: "none",
              color: "#fff",
              fontSize: "1.2rem",
              cursor: "pointer",
            }}
            aria-label="Close"
          >
            <FaTimes />
          </button>
        </div>

        {/* BODY */}
        <Modal.Body className="p-4" onClick={(e) => e.stopPropagation()}>
          <Tab.Container activeKey={tab} onSelect={(selected) => setTab(selected)}>
            {/* Tabs */}
            <Nav variant="pills" className="justify-content-center mb-3">
              {["Student", "Instructor", "Admin"].map((role) => (
                <Nav.Item key={role}>
                  <Nav.Link
                    eventKey={role}
                    className="px-4"
                    style={{ borderRadius: "20px", fontWeight: "500" }}
                  >
                    {role}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>

            <Tab.Content>
              <Tab.Pane eventKey={tab}>
                <Form onSubmit={handleSubmit} encType="multipart/form-data">
                  {/* ===== Common Fields ===== */}
                  <Form.Group className="mb-3">
                    <Form.Label>Username / Email</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FaEnvelope />
                      </InputGroup.Text>
                      <Form.Control
                        type="email"
                        name="userName"
                        placeholder="Enter email"
                        onChange={handleChange}
                        required
                      />
                    </InputGroup>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FaLock />
                      </InputGroup.Text>
                      <Form.Control
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        onChange={handleChange}
                        required
                      />
                    </InputGroup>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Full Name</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FaUser />
                      </InputGroup.Text>
                      <Form.Control
                        type="text"
                        name="fullName"
                        placeholder="Enter full name"
                        onChange={handleChange}
                        required
                      />
                    </InputGroup>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Gender</Form.Label>
                    <Form.Select name="gender" onChange={handleChange}>
                      <option value="">Select Gender</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </Form.Select>
                  </Form.Group>

                  {/* ===== Student Registration ===== */}
                  {tab === "Student" && (
                    <>
                      <Form.Group className="mb-3">
                        <Form.Label>Course</Form.Label>
                        <Form.Control
                          type="text"
                          name="course"
                          placeholder="e.g., B.Tech, BSc"
                          onChange={handleChange}
                        />
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>Semester</Form.Label>
                        <Form.Control
                          type="text"
                          name="semester"
                          placeholder="e.g., 5th Semester"
                          onChange={handleChange}
                        />
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>10th School</Form.Label>
                        <Form.Control
                          type="text"
                          name="tenthSchool"
                          placeholder="Enter 10th school name"
                          onChange={handleChange}
                        />
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>12th School</Form.Label>
                        <Form.Control
                          type="text"
                          name="twelfthSchool"
                          placeholder="Enter 12th school name"
                          onChange={handleChange}
                        />
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>10th Certificate</Form.Label>
                        <Form.Control
                          type="file"
                          name="certificate10"
                          accept=".pdf,.jpg,.png"
                          onChange={handleChange}
                        />
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>PUC / 12th Certificate</Form.Label>
                        <Form.Control
                          type="file"
                          name="certificatePuc"
                          accept=".pdf,.jpg,.png"
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </>
                  )}

                  {/* ===== Instructor Registration ===== */}
                  {tab === "Instructor" && (
                    <>
                      <Form.Group className="mb-3">
                        <Form.Label>Department</Form.Label>
                        <Form.Control
                          type="text"
                          name="department"
                          placeholder="Enter department name"
                          onChange={handleChange}
                        />
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>Subject Specialization</Form.Label>
                        <Form.Control
                          type="text"
                          name="subjectSpecialization"
                          placeholder="e.g., Data Structures, Networks"
                          onChange={handleChange}
                        />
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>Experience (Years)</Form.Label>
                        <Form.Control
                          type="number"
                          name="experience"
                          placeholder="Enter years of experience"
                          onChange={handleChange}
                        />
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>Qualification Proof</Form.Label>
                        <Form.Control
                          type="file"
                          name="qualificationFile"
                          accept=".pdf,.jpg,.png"
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </>
                  )}

                  {/* ===== Admin Registration ===== */}
                  {tab === "Admin" && (
                    <>
                      <Form.Group className="mb-3">
                        <Form.Label>Role</Form.Label>
                        <Form.Select name="role" onChange={handleChange}>
                          <option value="">Select Role</option>
                          <option>Student Management</option>
                          <option>Fault Management</option>
                          <option>Fees Management</option>
                          <option>Academic Operations</option>
                        </Form.Select>
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>Experience (Years)</Form.Label>
                        <Form.Control
                          type="number"
                          name="experiences"
                          placeholder="Enter experience"
                          onChange={handleChange}
                        />
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>Phone</Form.Label>
                        <InputGroup>
                          <InputGroup.Text>
                            <FaPhone />
                          </InputGroup.Text>
                          <Form.Control
                            type="text"
                            name="phone"
                            placeholder="Enter phone number"
                            onChange={handleChange}
                          />
                        </InputGroup>
                      </Form.Group>
                    </>
                  )}

                  {/* Submit Button */}
                  <Button
                    variant="primary"
                    type="submit"
                    className="w-100 py-2 mt-2"
                    style={{
                      background: "linear-gradient(135deg, #6e8efb 0%, #a777e3 100%)",
                      border: "none",
                    }}
                  >
                    Register
                  </Button>

                  {/* Login Link */}
                  <p className="text-center mt-3 text-muted">
                    Already have an account?{" "}
                    <a
                      href="#"
                      className="text-decoration-none text-primary"
                      onClick={handleLoginClick} // ✅ navigate to login
                    >
                      Login here
                    </a>
                  </p>
                </Form>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default RegistrationModal;
