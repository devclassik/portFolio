import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import axios from "axios";
import { PulseLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import myImg from "../../Assets/about1.jpg";
import Tilt from "react-parallax-tilt";

import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";

const BlogManage = () => {
  const apiUrl = process.env.REACT_APP_API_LOCAL;
  const apiUrl2 = process.env.REACT_APP_API_RENDER;
  const errorMsg =
    "An error occurred while sending the email, kindly use the social media handles e.g whatsapp";

  const [formData, setFormData] = useState({
    title: "",
    img: "",
    description: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log("data", name, value);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    setSuccess(null);

    try {
      toast.loading("Please wait... ");
      const response = await axios.post(`${apiUrl}/blog/addBlog`, formData);
      toast.dismiss();
      if (response.status === 200) {
        setSuccess("Blog post successfully!...");
        toast.success("Blog post added !");
        setFormData({
          img: "",
          title: "",
          description: "",
        });
      } else {
        setError("An error occurred while posting blog.");
        toast.error(errorMsg);
      }
    } catch (error) {
      setError("An error occurred while posting blog.");
      toast.error(errorMsg);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="avatar"
                style={{ borderRadius: "10px", display: "none" }}
              />
            </Tilt>
          </Col>
        </Row>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">Add New Blog</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Edit Blog</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Delete Blog</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content style={{ marginBottom: "15%" }}>
                <Tab.Pane eventKey="first">
                  <Col md={8} className="home-about">
                    <h1 style={{ fontSize: "2.6em", color: "#fff" }}>
                      Manage<span className="purple"> Blog </span>
                    </h1>
                    <Container>
                      <ToastContainer />
                      <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formName">
                          <Form.Label className="text">Image</Form.Label>
                          <Form.Control
                            type="text"
                            name="img"
                            value={formData.img}
                            onChange={handleChange}
                            placeholder="Enter image URL"
                            required
                          />
                        </Form.Group>

                        <Form.Group controlId="formEmail">
                          <Form.Label className="text">Title</Form.Label>
                          <Form.Control
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            placeholder="Enter title"
                            required
                          />
                        </Form.Group>

                        <Form.Group controlId="formMessage">
                          <Form.Label className="text">Description</Form.Label>
                          <Form.Control
                            as="textarea"
                            rows={4}
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Enter description"
                            required
                          />
                        </Form.Group>
                        <br />

                        <Button
                          variant="primary"
                          type="submit"
                          disabled={submitting}
                        >
                          {submitting ? (
                            <PulseLoader size={10} color="#ffffff" />
                          ) : (
                            "Submit..."
                          )}
                        </Button>
                      </Form>
                    </Container>
                  </Col>
                </Tab.Pane>
                <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
                <Tab.Pane eventKey="third">third tab content</Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </Container>
  );
};

export default BlogManage;
