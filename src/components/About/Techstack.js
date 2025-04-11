import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiMongodb,
    DiPython,
    DiGit,
    DiJava, DiAws, DiMysql,
} from "react-icons/di";
import {
    SiRedis,
    SiFirebase,
    SiNextdotjs,
    SiSolidity,
    SiPostgresql,
    SiTypescript,
    SiSpringboot,
    SiOracle,
    SiAngularuniversal,
    SiAngular,
    SiTerraform,
    SiLinux,
    SiApachetomcat, SiTailwindcss, SiAnaconda,
} from "react-icons/si";
import {TbBrandGolang, TbBrandReactNative} from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
          <DiJava />
      </Col>

        <Col xs={4} md={2} className="tech-icons">
            <SiSpringboot />
        </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiAngular/>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiTailwindcss />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiNodejs />
        </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiOracle />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiMysql />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiPython />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiAnaconda />
        </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiLinux />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiApachetomcat />
        </Col>

        <Col xs={4} md={2} className="tech-icons">
            <SiTerraform/>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
            <DiAws/>
        </Col>



    </Row>
  );
}

export default Techstack;
