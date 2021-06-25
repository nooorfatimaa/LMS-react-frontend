import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Button, Col } from "react-bootstrap";
import "./style.css";
import Header from "./navbar";
import Footer from "./footer";
import "bootstrap/dist/css/bootstrap.css";

const Update = () => {
  const [assignments, setAssignments] = useState([]);
  const [id, setID] = useState("");
  const [question, setQ] = useState("");

  useEffect(() => {
    getAssignments();
  }, []);

  const getAssignments = () => {
    axios
      .get("http://localhost:5000/teacher/assignments")
      .then((response) => {
        const data = response.data;
        setAssignments(data);
        console.log(data);
      })
      .catch(() => {
        console.log("unable to receive data");
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put("http://localhost:5000/teacher/updateassignment/" + id);
  };

  return (
    <div>
      <Header />
      <br />
      <br />
      <div className="container">
        <h2>Select an assignment to update</h2>
        <br />
        <br />
        <Col md={6}>
          <Form>
            <Form.Group controlId="form3">
              <Form.Label>Assignment:</Form.Label>
              <Form.Control
                as="select"
                required
                onChange={(e) => setID(e.target.value)}
              >
                <option hidden selected disabled>
                  Choose here
                </option>
                {assignments.map((assignment) => {
                  return (
                    <option value={assignment._id}>
                      Assignment&nbsp;
                      {assignment.number}&nbsp;
                      {assignment.name}&nbsp;
                      {assignment.class.name}
                    </option>
                  );
                })}
              </Form.Control>
            </Form.Group>
            <br />
            <Form.Group controlId="form4">
              <Form.Label>Question:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Add new question"
                required
                value={question}
                onChange={(e) => setQ(e.target.value)}
              />
            </Form.Group>
            <br />
            <Form.Group className="offset-3">
              <Button
                variant="dark"
                type="submit"
                className="w-50"
                onClick={(e) => handleSubmit(e)}
              >
                Update Assignment
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </div>
      <Footer />
    </div>
  );
};

export default Update;
