import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiJava,
  DiCss3,
  DiHtml5,
  DiPython,
  DiPhp,
} from "react-icons/di";
import {
  SiPostgresql,
  SiMysql,
  SiSpringboot,
  SiAngular,
  SiDjango,
  SiLaravel,
  SiSymfony,
  SiExpress,
  SiVuedotjs,
  SiTailwindcss,
  SiBootstrap,
  SiC,
  SiCplusplus
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Languages */}
      <Col xs={4} md={2} className="tech-icons"><DiJavascript1 /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiPython /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiJava /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiC /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiCplusplus /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiPhp /></Col>

      {/* Frameworks */}
      <Col xs={4} md={2} className="tech-icons"><SiLaravel /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiDjango /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiSpringboot /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiExpress /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiSymfony /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiAngular /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiReact /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiVuedotjs /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiTailwindcss /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiBootstrap /></Col>

      {/* Databases */}
      <Col xs={4} md={2} className="tech-icons"><SiMysql /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiMongodb /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiPostgresql /></Col>

      {/* Basics */}
      <Col xs={4} md={2} className="tech-icons"><DiHtml5 /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiCss3 /></Col>
    </Row>
  );
}

export default Techstack;
