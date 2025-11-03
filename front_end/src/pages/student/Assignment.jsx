import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Container, Row, Col, Spinner, Alert, Button } from "react-bootstrap";

const AssignmentReceive = () => {
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAssignments = async () => {
      try {
        const response = await axios.get("http://localhost:8080/auth/assignment/all");
        setAssignments(response.data);
      } catch (err) {
        setError("Failed to fetch assignments. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchAssignments();
  }, []);

  if (loading) return <Spinner animation="border" className="d-block mx-auto mt-5" />;
  if (error) return <Alert variant="danger" className="mt-4 text-center">{error}</Alert>;

  return (
    <Container className="py-4">
      <h2 className="text-center text-primary mb-4">📚 Assignments</h2>

      {assignments.length === 0 ? (
        <p className="text-center">No assignments available right now.</p>
      ) : (
        <Row>
          {assignments.map((assignment) => (
            <Col key={assignment.id} md={6} lg={4} className="mb-4">
              <Card className="shadow-sm h-100">
                <Card.Body>
                  <Card.Title>{assignment.title}</Card.Title>
                  <Card.Text>
                    <strong>Course:</strong> {assignment.course} <br />
                    <strong>Due Date:</strong> {assignment.dueDate} <br />
                    <strong>Points:</strong> {assignment.totalPoints} <br />
                    <strong>Type:</strong> {assignment.type || "N/A"} <br />
                    <strong>Description:</strong> {assignment.description || "No description."}
                  </Card.Text>

                  {assignment.fileName && (
                    <Button
                      variant="success"
                      href={`http://localhost:8080/auth/assignment/${assignment.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      📂 Download {assignment.fileName}
                    </Button>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default AssignmentReceive;
