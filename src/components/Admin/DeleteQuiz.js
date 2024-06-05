import React, { useState } from "react";
import {  Form, Button } from "react-bootstrap";
import axios from "axios";
import { PulseLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Modal from "react-bootstrap/Modal";
import InputGroup from "react-bootstrap/InputGroup";

const DeleteQuiz = () => {
  const apiUrl = process.env.REACT_APP_API_LOCAL;
  const apiUrl2 = process.env.REACT_APP_API_RENDER;
  const errorMsg = "An error occurred while connecting to server";

  const [searchForm, setSearchForm] = useState({
    questionText: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [quizs, setQuizs] = useState([]);
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log("data", name, value);
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


  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      setSubmitting(true);
      const response = await axios.put(
        `${apiUrl2}/quiz/search?search=${searchForm.questionText}`,
        {}
      );
    //   console.log("resp", response);
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

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.delete(
        `${apiUrl2}/quiz/delete/${selectedQuiz._id}`,
        {}
      );
    //   console.log("resp", response);
      if (response?.data?.data) {
        toast.success(response.data.message);
      } else {
        toast.success(response.data.message);
      }
      setShow(false);
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
            aria-label="Select Blog"
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
          <br />

          {selectedQuiz && (
            <>
              <FloatingLabel
                controlId="floatingInput"
                label="Blog Title"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  value={selectedQuiz.questionText}
                  disabled
                  placeholder="name@example.com"
                />
              </FloatingLabel>

              <Button
                variant="outline-danger"
                id="button-addon2"
                onClick={handleShow}
              >
                Delete Post
              </Button>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Are you sure you want to Delete ?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                {selectedQuiz.questionText}
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="danger" onClick={handleDelete}>
                    Yes
                  </Button>
                </Modal.Footer>
              </Modal>
            </>
          )}
        </>
      )}
    </>
  );
};

export default DeleteQuiz;
