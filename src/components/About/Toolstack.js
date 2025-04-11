import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    SiVisualstudiocode,
    SiPostman,
    SiSlack,
    SiVercel,
    SiMacos, SiIntellijidea, SiChromecast, SiSplunk, SiFirefox, SiLinux, SiNotepadplusplus, SiVim, SiWebstorm, SiJira,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiIntellijidea />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>

        <Col xs={4} md={2} className="tech-icons">
            <SiNotepadplusplus />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiVim />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiJira/>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiSplunk/>
        </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirefox />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiWebstorm />
      </Col>
    </Row>
  );
}

export default Toolstack;
