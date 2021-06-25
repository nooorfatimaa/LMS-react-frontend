import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Col, Row } from "react-bootstrap/";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import "./style.css";
import Header from "./navbar";
import Footer from "./footer";

function Delete() {
  const [assignments, setAssignments] = useState([]);

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

  const deleteAssignment = (id) => {
    axios
      .delete(`http://localhost:5000/teacher/deleteassignment/${id}`)
      .then((response) => {
        alert("deleted successfully");
        window.location.reload();
      })
      .catch(() => {
        console.log("unable to delete assignment");
      });
  };

  return (
    <div>
      <Header />
      <div className="container">
        <br />
        <br />
        <h2>Click an assignment to view details</h2>
        <Row className="mt-4">
          {assignments.map((assignment) => {
            return (
              <Col sm={4} className="mb-5">
                <Card className="cards">
                  <Card.Body className="text-center">
                    <Card.Title className="cardtitle">
                      {assignment.name}
                    </Card.Title>
                    <Card.Subtitle className="text-muted mt-2">
                      Class: {assignment.class.name}
                    </Card.Subtitle>
                    <Card.Subtitle className="text-muted mt-2">
                      Marks: {assignment.marks}
                    </Card.Subtitle>
                    <Card.Text className="text-right text-dark">
                      <MdDelete
                        onClick={() => {
                          deleteAssignment(assignment._id);
                        }}
                        size={25}
                      />
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
      <br />
      <Footer />
    </div>
  );
}

export default Delete;
