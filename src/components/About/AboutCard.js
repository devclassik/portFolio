import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight, ImMusic, ImBooks, ImRoad, ImPlay2 } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Opemipo Alomaja </span>
            from <span className="purple"> Ondo state, Nigeria.</span>
            <br />
            I am currently employed as a software engineer at <span className="purple">Infobyte's Technologies ltd.</span>
            <br />
            I have a BTech degree in Computer Science from the Ondo state University of Science and Technology
            Okitipupa.
            <br />
            <br />
            Apart from coding, here are some other activities I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImMusic /> Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
            <li className="about-activity">
              <ImBooks /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImRoad /> Traveling
            </li>
            <li className="about-activity">
              <ImPlay2 /> Playing Games
            </li>
          </ul>

          <p style={{ color: "rgb(255 219 0)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
