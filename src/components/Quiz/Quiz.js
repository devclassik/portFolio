import { useEffect, useState } from "react";
import { Container, Row, Col, Button, Spinner, Alert } from "react-bootstrap";
import Particle from "../Particle";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Slides from "../Slides/Slides";

// Function to shuffle an array
const shuffleArray = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [retryCount, setRetryCount] = useState(0);
  const apiUrl2 = process.env.REACT_APP_API_RENDER;

  const fetchQuiz = async () => {
    setLoading(true);
    setError(null);

    // Cancel token for axios request
    const source = axios.CancelToken.source();
    const timeout = setTimeout(() => {
      source.cancel("Request timeout");
    }, 15000); // 15 seconds timeout

    try {
      const response = await axios.get(`${apiUrl2}/quiz/getAllQuiz?limit=10`, {
        cancelToken: source.token,
        timeout: 10000, // additional timeout
      });

      clearTimeout(timeout);

      if (response.data.data && response.data.data.length > 0) {
        const fetchedQuestions = response.data.data.map((quiz) => ({
          questionText: quiz.questionText,
          answerOptions: quiz.answerOptions,
        }));
        setQuestions(shuffleArray(fetchedQuestions));
      } else {
        setError("No questions available");
      }
      setLoading(false);
    } catch (err) {
      clearTimeout(timeout);
      setLoading(false);

      if (axios.isCancel(err)) {
        setError("Request timed out. Please check your network connection.");
      } else if (err.response) {
        // Server responded with error status
        setError(`Server error: ${err.response.status}`);
      } else if (err.request) {
        // Request was made but no response
        setError("Network error. Please check your internet connection.");
      } else {
        // Other errors
        setError("Failed to load quiz. Please try again.");
      }

      console.error("Error fetching quizzes:", err);
    }
  };

  useEffect(() => {
    fetchQuiz();
  }, [apiUrl2, retryCount]);

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

  // const handleRestartQuiz = () => {
  //   // If we have questions, just reshuffle them
  //   if (questions.length > 0) {
  //     setCurrentQuestion(0);
  //     setShowScore(false);
  //     setScore(0);
  //     setQuestions(shuffleArray([...questions]));
  //   } else {
  //     // If no questions, try fetching again
  //     setRetryCount((prev) => prev + 1);
  //     setShowScore(false);
  //     setCurrentQuestion(0);
  //     setScore(0);
  //   }
  // };

  const handleRestartQuiz = () => {
  setShowScore(false);
  setCurrentQuestion(0);
  setScore(0);

  // Always trigger a fresh fetch
  setRetryCount((prev) => prev + 1);
};

  if (loading) {
    return (
      <div>
        <Particle />
        <Container fluid className="home-about-section">
          <Container>
            <Row>
              <Col md={8} className="home-about-description">
                <div className="d-flex flex-column align-items-center">
                  <Spinner animation="border" variant="primary" />
                  <p className="mt-3">Loading quiz questions...</p>
                  <p>This may take a moment if the server is waking up</p>
                </div>
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

  if (error) {
    return (
      <div>
        <Particle />
        <Container fluid className="home-about-section">
          <Container>
            <Row>
              <Col md={8} className="home-about-description">
                <Alert variant="danger">
                  <Alert.Heading>Error Loading Quiz</Alert.Heading>
                  <p>{error}</p>
                  <hr />
                  <div className="d-flex justify-content-end">
                    <Button
                      onClick={handleRestartQuiz}
                      variant="outline-danger"
                    >
                      Retry
                    </Button>
                  </div>
                </Alert>
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

  if (questions.length === 0 && !loading && !error) {
    return (
      <div>
        <Particle />
        <Container fluid className="home-about-section">
          <Container>
            <Row>
              <Col md={12} className="home-about-description">
                <Alert variant="warning">
                  <Alert.Heading>No Questions Available</Alert.Heading>
                  <p>There are currently no quiz questions available.</p>
                  <hr />
                  <div className="d-flex justify-content-end">
                    <Button
                      onClick={handleRestartQuiz}
                      variant="outline-warning"
                    >
                      Try Again
                    </Button>
                  </div>
                </Alert>
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
            <Col md={12} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                WELCOME TO <span className="purple"> QUIZ </span> SECTION
              </h1>
              <hr />
              {showScore ? (
                <div className="score-section">
                  <h3>
                    You scored <span className="purple">{score}</span> out of{" "}
                    <span className="purple">{questions.length}</span>
                  </h3>
                  <p>
                    {score === questions.length
                      ? "Perfect! 🎉"
                      : score >= questions.length / 2
                      ? "Good job! 👍"
                      : "Keep practicing! 💪"}
                  </p>
                  <Button
                    onClick={handleRestartQuiz}
                    variant="outline-primary"
                    style={{ marginTop: "20px" }}
                  >
                    {questions.length > 0 ? "Play Again" : "Try Again"}
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
                    {questions[currentQuestion]?.questionText}
                  </div>
                  <div className="answer-section">
                    {questions[currentQuestion]?.answerOptions &&
                      shuffleArray(
                        questions[currentQuestion].answerOptions
                      ).map((answerOption, index) => (
                        <Button
                          key={index}
                          variant="outline-primary"
                          style={{ margin: "10px", minWidth: "200px" }}
                          onClick={() =>
                            handleAnswerButtonClick(answerOption.isCorrect)
                          }
                        >
                          {answerOption.answerText}
                        </Button>
                      ))}
                  </div>
                </>
              )}
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Quiz;
