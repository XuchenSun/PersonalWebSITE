import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I'm Xuchen Sun, a dedicated Software Engineer based in Markham, Ontario, with <span className="purple">5+ years </span>of experience <span className="purple">designing, building</span>, and <span className="purple">deploying enterprise-level applications</span>. I specialize in full-stack development, Java and React Application, and delivering high-impact software solutions in agile environments.
            <br/>
            <br />
            Currently employed as a software developer at <span className="purple">TD Canada Trust</span>.
            <br />
            <br />
            Currently seeking a senior software developer position to leverage extensive experience in software engineering and cloud solutions !
          </p>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
