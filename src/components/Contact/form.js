import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import axios from "axios";
import { PulseLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormInput = () => {
  const apiUrl = process.env.REACT_APP_API_LOCAL;
  const apiUrl2 = process.env.REACT_APP_API_RENDER;
  const errorMsg ="An error occurred while sending the email, kindly use the social media handles e.g whatsapp";

  const [formData, setFormData] = useState({
    email: "",
    name: "",
    to: "alomajaopemipo8@gmail.com",
    subject: "Opemipo Portfolio",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

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
    // Here you can handle form submission, e.g., send data to server
    setSubmitting(true);
    const toastId = toast.loading("Please wait... ");

    try {
      const response = await axios.post(
        `${apiUrl2}/mail`,
        formData
      );
      toast.dismiss(toastId);
      if (response.status === 200) {
        toast.success("message sent");
        setFormData({
          name: "",
          email: "",
          message: "",
          to: "alomajaopemipo8@gmail.com", // Reset 'to' to default value
          subject: "Opemipo Portfolio", // Reset 'subject' to default value
        });
      } else {
        toast.error(errorMsg);
      }
    } catch (error) {
      toast.error(errorMsg);

    } finally {
      setSubmitting(false);
    }
    // toast.error("An error occurred while sending the email.", formData);
    // console.log("Form submitted:", formData);

  };

  return (
    <Container>
      <ToastContainer />

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </Form.Group>

        <Form.Group controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            required
          />
        </Form.Group>
        <br />

        <Button variant="primary" type="submit" disabled={submitting}>
          {submitting ? <PulseLoader size={10} color="#ffffff" /> : "Submit..."}
        </Button>
      </Form>
    </Container>
  );
};

export default FormInput;
