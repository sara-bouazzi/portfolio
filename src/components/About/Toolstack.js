import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiDocker,
  SiGithub,
  SiJenkins,
  SiLinux,
  SiGithubactions,
} from "react-icons/si";
import { DiGit } from "react-icons/di";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons"><SiVisualstudiocode /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiPostman /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiDocker /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiGithub /></Col>

      {/* Git + GitLens (same icon, safe) */}
      <Col xs={4} md={2} className="tech-icons"><DiGit /></Col>

      <Col xs={4} md={2} className="tech-icons"><SiGithubactions /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiJenkins /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiLinux /></Col>
    </Row>
  );
}

export default Toolstack;
