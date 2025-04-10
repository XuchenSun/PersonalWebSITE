import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Xuchen Sun </span>
            from <span className="purple"> Markham, Ontario.</span>
            <br />
            A dedicated software developer with 5+ years of experience, MASc in Computer Engineering and B.Eng in Computer Science.
            <br/>
            <br />
            Currently employed as a software developer at <span className="purple">TD Canada Trust.</span>

            <br />
            <br />
            Apart from work, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> <span className="purple">Design </span>minimum viable product!
            </li>
            <li className="about-activity">
              <ImPointRight /> <span className="purple">Develop </span>minimum viable product!
            </li>
            <li className="about-activity">
              <ImPointRight /> <span className="purple">Deliver </span>minimum viable product!
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "We never know until we try!"{" "}
          </p>
          <footer className="blockquote-footer">Xuchen</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
