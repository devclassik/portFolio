import React, { useState } from "react";
import { Form, Button, } from "react-bootstrap";
import axios from "axios";
import { PulseLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import InputGroup from "react-bootstrap/InputGroup";
import BlogForm from "./AddBlog";
import QuizForm from "./AddQuiz";

const EditQuiz = () => {
  const apiUrl = process.env.REACT_APP_API_LOCAL;
  const apiUrl2 = process.env.REACT_APP_API_RENDER;
  const errorMsg = "An error occurred while connecting to server";

  const [searchForm, setSearchForm] = useState({
    questionText: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [quizs, setQuizs] = useState([]);
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("data", name, value);
    setSearchForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (e) => {
    const selectedQuizId = e.target.value;
    const quiz = quizs.find((b) => b._id === selectedQuizId);
    setSelectedQuiz(quiz);
  };

  const handleSave = () => {
    setSelectedQuiz(null);
    setSearchForm({ questionText: "" });
    setQuizs([]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      setSubmitting(true);
      const response = await axios.put(
        `${apiUrl2}/quiz/search?search=${searchForm.questionText}`,
        {}
      );
      // console.log("resp", response);
      if (response?.data?.totalPages === 0) {
        toast.info(response.data.data);
        setQuizs([]);
      } else {
        setQuizs(response.data.data);
        toast.success(response.data.totalPages + " " + response.data.message);
      }
    } catch (error) {
      toast.error(errorMsg);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Quiz Title"
          aria-label="Quiz Title"
          type="text"
          name="questionText"
          value={searchForm.questionText}
          onChange={handleChange}
        />
        <Button
          variant="outline-secondary"
          id="button-addon2"
          onClick={handleSubmit}
          disabled={submitting}
        >
          {submitting ? <PulseLoader size={10} color="#ffffff" /> : "Search..."}
        </Button>
      </InputGroup>

      {quizs.length > 0 && (
        <>
          <Form.Select
            aria-label="Select Quiz"
            onChange={handleSelectChange}
            value={selectedQuiz ? selectedQuiz._id : ""}
          >
            <option value="">Open this select menu</option>
            {quizs.map((quiz) => (
              <option key={quiz._id} value={quiz._id}>
                {quiz.questionText}
              </option>
            ))}
          </Form.Select>

          {selectedQuiz && (
            <QuizForm quizData={selectedQuiz} onSave={handleSave} />
          )}
        </>
      )}
    </>
  );
};

export default EditQuiz;
