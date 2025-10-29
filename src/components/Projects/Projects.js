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
              icon="🚖"
              title="Taxi Management"
              year="2025"
              description="Application web de gestion des taxis, chauffeurs et réservations, développée avec Laravel, Vue.js, Vite et PostgreSQL, offrant une interface moderne, performante et sécurisée pour faciliter la gestion des services de transport."
              technologies={["Laravel", "Vue.js", "PostgreSQL", "Vite"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              icon="📚"
              title="Book Share"
              year="2025"
              description="Application web de messagerie interne développée avec Laravel et Tailwind CSS, intégrant un système de meetings, de commentaires, et un modèle d'IA pour la détection de spam et le calcul du Trust Score des utilisateurs."
              technologies={["Laravel", "Tailwind CSS", "IA", "Trust Score"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              icon="📔"
              title="Journal IA"
              year="2025"
              description="Application Django alliant journal personnel et IA pour le suivi des objectifs et du bien-être. Implémentation d'un CRUD complet pour les objectifs avec un service d'IA générant des messages de motivation contextuels et une estimation du temps pour les accomplir."
              technologies={["Django", "Python", "IA", "CRUD"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              icon="🍔"
              title="MenuFy"
              year="2025"
              description="Développement du projet avec React.js, Node.js, Express.js, MongoDB, sécurisation JWT/HTTPS, CI/CD avec GitHub Actions/Jenkins, containerisation Docker."
              technologies={["React", "Node.js", "MongoDB", "Docker", "CI/CD"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              icon="☕"
              title="Coffee Management"
              year="2025"
              description="Projet basé sur microservices Spring Boot et Node.js, interface Angular, Eureka pour la découverte, Gateway pour le routage, Open Feign pour la communication, bases MySQL et MongoDB, dockerisation des services."
              technologies={["Spring Boot", "Angular", "Microservices", "Docker"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              icon="🚀"
              title="Futura"
              year="2024"
              description="Application Desktop : JAVA / Application Web : Symfony / Application Mobile : Flutterflow."
              technologies={["Java", "Symfony", "FlutterFlow"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              icon="🎨"
              title="Creart'Com"
              year="2023"
              description="Application web : HTML, CSS, PHP, JAVASCRIPT."
              technologies={["HTML", "CSS", "PHP", "JavaScript"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              icon="💼"
              title="Application Desktop C++"
              year="2023"
              description="Développement d'une application de gestion en C++ avec interface graphique."
              technologies={["C++", "Qt"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              icon="🎮"
              title="Anubis"
              year="2022"
              description="Développement d'un jeu 2D avec SDL."
              technologies={["C++", "SDL", "Game Dev"]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
