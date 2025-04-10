import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
               <span className="purple"> WELCOME </span> TO MY Portfolio
            </h1>
            <p className="home-about-body">
              As a software developer with more than 5 years' experience, ️
              <br />
              <br />I specialize my skills in
              <i>
                <b className="purple"> Java, TypeScript </b>and <b className="purple">Bash.</b>
              </i>
              <br />
              <br />
              Proven expertise in develop, deploying, and maintaining &nbsp;
              <i>
                <b className="purple">High-availability Software Application and APIs </b> and
                also in areas related to{" "}
                <b className="purple">
                  Minimum Viable Product.
                </b>
              </i>
              <br />
              <br />
              Currently seeking a <b className="purple">senior software developer</b> position to leverage extensive experience in
              <i>
                <b className="purple">
                  {" "}
                  Software Engineering
                </b>
              </i>
              &nbsp; and
              <i>
                <b className="purple"> Cloud Solutions</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/XuchenSun"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/a2211b/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
