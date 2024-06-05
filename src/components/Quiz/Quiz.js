import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button,Spinner } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import Particle from "../Particle";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import myImg from "../../Assets/about1.jpg";
import Slides from "../Slides/Slides";

// Function to shuffle an array
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);
  const [timeoutError, setTimeoutError] = useState(false);
  const [questions, setQuestions] = useState([]);
  const apiUrl2 = process.env.REACT_APP_API_RENDER;

  useEffect(() => {
    const fetchQuiz = async () => {
      setLoading(true);
      setTimeoutError(false);

      // Set a timeout to show the reload button if the API call takes too long
      const timeout = setTimeout(() => {
        setLoading(false);
        setTimeoutError(true);
      }, 60000); // 1 minute

      try {
        const response = await axios.get(`${apiUrl2}/quiz/getAllQuiz?limit=10`);
        clearTimeout(timeout);
        const fetchedQuestions = response.data.data.map((quiz) => ({
          questionText: quiz.questionText,
          answerOptions: quiz.answerOptions,
        }));
        setQuestions(fetchedQuestions);
        setLoading(false);
      } catch (error) {
        clearTimeout(timeout);
        setLoading(false);
        setTimeoutError(true);
        toast.error("Failed to get quizzes");
        console.error("Error fetching quizzes:", error);
      }
    };

    fetchQuiz();
  }, [apiUrl2]);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      toast.success("Correct");
      setScore(score + 1);
    } else {
      toast.error("Wrong");
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setShowScore(false);
    setScore(0);
    // Re-fetch quiz questions
    setQuestions(shuffleArray([...questions]));
  };

  if (loading) {
    return (
      <div>
        <Particle />
        <Container fluid className="home-about-section">
          <Container>
            <Row>
              <Col md={8} className="home-about-description">
                {/* <h1>Loading...</h1> */}
                <Spinner animation="border" variant="primary" />
              </Col>
            </Row>
          </Container>
        </Container>
      </div>
    );
  }

  if (timeoutError) {
    return (
      <div>
        <Particle />
        <Container fluid className="home-about-section">
          <Container>
            <Row>
              <Col md={8} className="home-about-description">
                <h1>Failed to load quiz. Please try again.</h1>
                <Button onClick={handleRestartQuiz}>Retry</Button>
              </Col>
            </Row>
          </Container>
        </Container>
      </div>
    );
  }

  return (
    <div>
      <Particle />
      <ToastContainer />
      <Container fluid className="home-about-section">
        <Container>
          <Row>
            <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                WELCOME TO <span className="purple"> QUIZ </span> SECTION
              </h1>
              <hr />
              {showScore ? (
                <div className="score-section">
                  <p>
                    You scored {score} out of {questions.length}
                  </p>
                  <br />
                  <Button
                    onClick={handleRestartQuiz}
                    style={{ marginTop: "20px" }}
                  >
                    Play Again
                  </Button>
                </div>
              ) : (
                <>
                  <div className="question-count">
                    <span>
                      Question <i className="purple">{currentQuestion + 1}</i>{" "}
                    </span>
                    /{questions.length}
                  </div>
                  <div className="question-text">
                    {questions[currentQuestion].questionText}
                  </div>
                  <div className="answer-section">
                    {shuffleArray(questions[currentQuestion].answerOptions).map(
                      (answerOption, index) => (
                        <Button
                          key={index}
                          style={{ marginTop: "10px" }}
                          onClick={() =>
                            handleAnswerButtonClick(answerOption.isCorrect)
                          }
                        >
                          {answerOption.answerText}
                        </Button>
                      )
                    )}
                  </div>
                </>
              )}
            </Col>
            <Col md={4} className="myAvtar">
             <Slides />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Quiz;
