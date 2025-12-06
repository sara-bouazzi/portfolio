import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiDocker,
  SiGithub,
  SiGitlab,
  SiJenkins,
  SiLinux,
  SiGithubactions,
  SiSonarqube,
  SiPrometheus,
  SiGrafana,
} from "react-icons/si";
import { DiGit } from "react-icons/di";
import { VscServerProcess } from "react-icons/vsc";

const categories = [
  {
    title: "Développement Mobile",
    tools: [
      { name: "Flutter", icon: <SiVisualstudiocode />, level: 75 },
      { name: "Android Native", icon: <SiLinux />, level: 70 },
    ],
  },
  {
    title: "DevOps & Outils",
    tools: [
      { name: "Docker", icon: <SiDocker />, level: 82 },
      { name: "Jenkins", icon: <SiJenkins />, level: 78 },
      { name: "Prometheus & Grafana", icon: <SiPrometheus />, level: 72 },
      { name: "Nexus", icon: <VscServerProcess />, level: 68 },
      { name: "SonarQube", icon: <SiSonarqube />, level: 75 },
      { name: "Git", icon: <DiGit />, level: 85 },
      { name: "GitHub", icon: <SiGithub />, level: 82 },
      { name: "GitLab", icon: <SiGitlab />, level: 80 },
      { name: "Linux", icon: <SiLinux />, level: 78 },
    ],
  },
  {
    title: "Intelligence Artificielle & ML",
    tools: [
      { name: "Machine Learning", icon: <SiGithubactions />, level: 70 },
      { name: "XGBoost, KNN, SVM", icon: <SiGithubactions />, level: 68 },
    ],
  },
];

function Toolstack() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? categories.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === categories.length - 1 ? 0 : prev + 1));
  };

  const currentCategory = categories[currentIndex];

  return (
    <div style={{ paddingBottom: "50px", position: "relative" }}>
      <div className="carousel-wrapper">
        <button className="carousel-arrow carousel-arrow-left" onClick={handlePrev}>
          &#8249;
        </button>
        
        <div className="carousel-frame">
          <h2 className="category-heading">{currentCategory.title}</h2>
          <Row style={{ justifyContent: "center" }}>
            {currentCategory.tools.map((tool, idx) => (
              <Col key={idx} xs={12} sm={6} md={4} style={{ marginBottom: "25px" }}>
                <div className="skill-card">
                  <div className="skill-icon-wrapper">
                    <div className="skill-icon-box">{tool.icon}</div>
                  </div>
                  <div className="skill-content">
                    <div className="skill-name">{tool.name}</div>
                    <div className="skill-bar-container">
                      <div
                        className="skill-bar-fill"
                        style={{ width: `${tool.level}%` }}
                      />
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>

        <button className="carousel-arrow carousel-arrow-right" onClick={handleNext}>
          &#8250;
        </button>
      </div>

      <div className="carousel-dots">
        {categories.map((_, idx) => (
          <span
            key={idx}
            className={`carousel-dot ${idx === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </div>
    </div>
  );
}

export default Toolstack;
