import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="MenuFy  2025 :"
              description="Développement du projet avec React.js, Node.js, Express.js, MongoDB, sécurisation JWT/HTTPS, CI/CD avec GitHub Actions/Jenkins, containerisation Docker."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Coffee Management  2025 :"
              description="Projet basé sur microservices Spring Boot et Node.js, interface Angular, Eureka pour la découverte, Gateway pour le routage, Open Feign pour la communication, bases MySQL et MongoDB, dockerisation des services."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Futura  2024 :"
              description="Application Desktop : JAVA /
              Application Web : Symfony /
              Application Mobile : Flutterflow."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Creart’Com  2023 :"
              description="Application web : HTML, CSS, PHP, JAVASCRIPT."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Application Desktop C++  2023 :"
              description="Développement d’une application de gestion en C++ avec interface graphique."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Anubis  2022 :"
              description="Développement d’un jeu 2D avec SDL."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
