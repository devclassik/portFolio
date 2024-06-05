import React, { useEffect, useState } from "react";
import { Container, Form, Button, Col } from "react-bootstrap";
import axios from "axios";
import { PulseLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const QuizForm = ({ quizData, onSave }) => {
  const apiUrl = process.env.REACT_APP_API_LOCAL;
  const apiUrl2 = process.env.REACT_APP_API_RENDER;
  const errorMsg =
    "An error occurred while sending the email, kindly use the social media handles e.g whatsapp";

  const [formData, setFormData] = useState({
    questionText: "",
    answerOptions: [
      {
        answerText: "",
        isCorrect: false,
      },
    ],
  });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (quizData) {
      setFormData(quizData);
    }
  }, [quizData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const [field, index] = name.split("-");
    if (field === "answerText" || field === "isCorrect") {
      setFormData((prevData) => {
        const updatedOptions = [...prevData.answerOptions];
        updatedOptions[index][field] =
          field === "isCorrect" ? e.target.checked : value;
        return { ...prevData, answerOptions: updatedOptions };
      });
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const addAnswerOption = () => {
    setFormData((prevData) => ({
      ...prevData,
      answerOptions: [
        ...prevData.answerOptions,
        { answerText: "", isCorrect: false },
      ],
    }));
  };

  const removeAnswerOption = (index) => {
    setFormData((prevData) => {
      const updatedOptions = prevData.answerOptions.filter(
        (_, i) => i !== index
      );
      return { ...prevData, answerOptions: updatedOptions };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      toast.loading("Please wait...");

      const response = quizData
        ? await axios.put(`${apiUrl2}/quiz/update/${quizData._id}`, formData)
        : await axios.post(`${apiUrl2}/quiz/addQuiz`, formData);

      toast.dismiss();
      if (response.status === 200) {
        toast.success(`Quiz ${quizData ? "updated" : "added"} successfully!`);
        setFormData({
          questionText: "",
          answerOptions: [
            {
              answerText: "",
              isCorrect: false,
            },
          ],
        });
        onSave && onSave(); // Call the onSave callback if provided
      } else {
        toast.error(errorMsg);
      }
    } catch (error) {
      toast.error(errorMsg);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Col md={12} className="home-about">
      <h1 style={{ fontSize: "2.6em", color: "#fff" }}>
        {quizData ? "Update" : "Add"} <span className="purple">Quiz</span>
      </h1>
      <Container>
        <ToastContainer />
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formQuestion">
            <Form.Label className="text">Question</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              name="questionText"
              value={formData.questionText}
              onChange={handleChange}
              placeholder="Enter Question"
              required
            />
          </Form.Group>

          <Form.Label className="text">Answer Options</Form.Label>
          {formData.answerOptions.map((option, index) => (
            <Form.Group controlId={`formAnswerOption-${index}`} key={index}>
              <Form.Control
                type="text"
                name={`answerText-${index}`}
                value={option.answerText}
                onChange={handleChange}
                placeholder="Enter answer text"
                required
              />
              <Form.Check
                type="checkbox"
                name={`isCorrect-${index}`}
                checked={option.isCorrect}
                onChange={handleChange}
                label="Is Correct"
                style={{ marginTop: "10px" }}
              />
              {index > 0 && (
                <Button
                  onClick={() => removeAnswerOption(index)}
                  style={{ marginTop: "10px" }}
                >
                  Remove
                </Button>
              )}
            </Form.Group>
          ))}
          <Button
            variant="secondary"
            onClick={addAnswerOption}
            style={{ marginBottom: "20px" }}
          >
            Add Answer Option
          </Button>

          <br />

          <Button variant="primary" type="submit" disabled={submitting}>
            {submitting ? (
              <PulseLoader size={10} color="#ffffff" />
            ) : quizData ? (
              "Update"
            ) : (
              "Submit"
            )}
          </Button>
        </Form>
      </Container>
    </Col>
  );
};

export default QuizForm;
