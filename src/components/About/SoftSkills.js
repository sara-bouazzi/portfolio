import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const softSkills = [
  "Communication",
  "Travail d'équipe",
  "Résolution de problèmes",
  "Adaptabilité",
  "Leadership",
  "Gestion de projet",
  "Français (B2)",
  "Anglais (C1)",
  "Allemand (A2)",
];

function SoftSkills() {
  return (
    <div style={{ marginTop: "60px", marginBottom: "50px" }}>
      <h1 className="project-heading">
        <strong className="purple">Soft Skills</strong> & Langues
      </h1>
      <Row style={{ justifyContent: "center", paddingTop: "30px" }}>
        <Col md={10}>
          <div className="soft-skills-container">
            {softSkills.map((skill, idx) => (
              <div key={idx} className="soft-skill-badge">
                {skill}
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default SoftSkills;
