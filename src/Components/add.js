import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Col, Button, Row } from "react-bootstrap/";
import "./style.css";
import Header from "./navbar";
import Footer from "./footer";

const Add = () => {
  const [classes, setClasses] = useState([]);
  const [name, setName] = useState("");
  const [number, setNumber] = useState();
  const [clas, setClas] = useState("");
  const [marks, setMarks] = useState();
  const [ques, setQues] = useState("");

  useEffect(() => {
    getClasses();
  }, []);

  const getClasses = () => {
    axios
      .get("http://localhost:5000/admin/class")
      .then((response) => {
        const data = response.data;
        setClasses(data);
        console.log(data);
      })
      .catch(() => {
        console.log("unable to receive data");
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      number: number,
      name: name,
      questions: ques,
      class: clas,
      marks: marks,
    };
    axios
      .post("http://localhost:5000/teacher/addassignment", data)
      .then((response) => {
        alert("assignment added");
      });
    setMarks();
    setName("");
    setNumber();
    setQues("");
    setClas("");
  };

  return (
    <div>
      <Header />
      <br />
      <br />
      <div className="container">
        <h2>Add new assignment using this form</h2>
        <br />
        <Form>
          <Row>
            <Form.Group as={Col} controlId="form1">
              <Form.Label>Assignment Number:</Form.Label>
              <Form.Control
                type="number"
                placeholder="Number"
                value={number}
                required
                onChange={(e) => setNumber(e.target.value)}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="form2">
              <Form.Label>Assignment Name:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="form3">
              <Form.Label>Select Class:</Form.Label>
              <Form.Control
                as="select"
                required
                onChange={(e) => setClas(e.target.value)}
              >
                {classes.map((clas) => {
                  return <option value={clas._id}>{clas.name}</option>;
                })}
              </Form.Control>
            </Form.Group>
          </Row>
          <br />
          <Row>
            <Form.Group as={Col} controlId="form4">
              <Form.Label>Questions:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Questions"
                required
                value={ques}
                onChange={(e) => setQues(e.target.value)}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="form5">
              <Form.Label>Marks:</Form.Label>
              <Form.Control
                type="number"
                placeholder="Marks"
                required
                value={marks}
                onChange={(e) => setMarks(e.target.value)}
              />
            </Form.Group>
          </Row>
          <br />
          <Button
            variant="dark"
            type="submit"
            className="w-25 offset-4"
            onClick={(e) => handleSubmit(e)}
          >
            Add Assignment
          </Button>
        </Form>
      </div>
      <Footer />
    </div>
  );
};

export default Add;
