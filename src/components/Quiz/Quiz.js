import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/about1.jpg";
import Tilt from "react-parallax-tilt";
import questions from "./questions";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Function to shuffle an array
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [showScore, setShowScore] = React.useState(false);
  const [score, setScore] = React.useState(0);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      toast.success("Correct");
      setScore(score + 1);
    } else if (isCorrect !== true) {
      toast.error("Wrong");
    }
    console.log("score", score);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div>
      {/* <Container fluid className="about-section"> */}
      <Particle />
      <ToastContainer />
      <Container fluid className="home-about-section">
        {/* <marquee>
          <h1>Welcome to quiz section</h1>
        </marquee> */}
        <Container>
          <Row>
            <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                WELCOME TO <span className="purple"> QUIZ </span> SECTION
              </h1>
              <hr />
              {showScore ? (
                <div className="score-section">
                  You scored {score} out of {questions.length}
                </div>
              ) : (
                <>
                  <div className="question-count">
                    <span>
                      Question <i className="purple">{currentQuestion + 1}</i>{" "}
                    </span>
                    /{questions.length}{" "}
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
              <Tilt>
                <img
                  src={myImg}
                  className="img-fluid"
                  alt="avatar"
                  style={{ borderRadius: "10px" }}
                />
              </Tilt>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Quiz;
