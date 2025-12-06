import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiMongodb,
  DiJava,
  DiCss3,
  DiHtml5,
  DiPython,
  DiPhp,
  DiGit,
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
  SiC,
  SiCplusplus,
  SiVisualstudiocode,
  SiDocker,
  SiGithub,
  SiGitlab,
  SiJenkins,
  SiLinux,
  SiGithubactions,
  SiSonarqube,
  SiPrometheus,
} from "react-icons/si";
import { VscServerProcess } from "react-icons/vsc";

const allCategories = [
  // Professional Skillset
  {
    section: "Professional Skillset",
    title: "Langages de Programmation",
    items: [
      { name: "Java", icon: <DiJava />, level: 80 },
      { name: "Python", icon: <DiPython />, level: 85 },
      { name: "PHP", icon: <DiPhp />, level: 75 },
      { name: "C", icon: <SiC />, level: 70 },
    ],
    type: "skill",
  },
  {
    section: "Professional Skillset",
    title: "Technologies Frontend",
    items: [
      { name: "HTML5", icon: <DiHtml5 />, level: 100 },
      { name: "CSS3", icon: <DiCss3 />, level: 100 },
      { name: "JavaScript", icon: <DiJavascript1 />, level: 100 },
      { name: "React.js", icon: <DiReact />, level: 100 },
      { name: "Angular", icon: <SiAngular />, level: 100 },
    ],
    type: "skill",
  },
  {
    section: "Professional Skillset",
    title: "Technologies Backend",
    items: [
      { name: "Node.js & Express.js", icon: <SiExpress />, level: 80 },
      { name: "Spring Boot", icon: <SiSpringboot />, level: 85 },
      { name: "Symfony", icon: <SiSymfony />, level: 75 },
      { name: "Laravel", icon: <SiLaravel />, level: 100 },
      { name: "Django", icon: <SiDjango />, level: 95 },
      { name: ".NET", icon: <SiC />, level: 68 },
    ],
    type: "skill",
  },
  {
    section: "Professional Skillset",
    title: "Bases de Données",
    items: [
      { name: "MySQL", icon: <SiMysql />, level: 100 },
      { name: "MongoDB", icon: <DiMongodb />, level: 95 },
      { name: "Firebase", icon: <SiPostgresql />, level: 70 },
    ],
    type: "skill",
  },
  // Tools I use
  {
    section: "Tools I use",
    title: "Développement Mobile",
    items: [
      { name: "Flutter", icon: <SiVisualstudiocode />, level: 50 },
      { name: "FlutterFlow", icon: <SiVisualstudiocode />, level: 70 },
    ],
    type: "skill",
  },
  {
    section: "Tools I use",
    title: "DevOps & Outils",
    items: [
      { name: "Docker", icon: <SiDocker />, level: 82 },
      { name: "Jenkins", icon: <SiJenkins />, level: 78 },
      { name: "Prometheus & Grafana", icon: <SiPrometheus />, level: 72 },
      { name: "Nexus", icon: <VscServerProcess />, level: 68 },
      { name: "SonarQube", icon: <SiSonarqube />, level: 75 },
      { name: "Git", icon: <DiGit />, level: 100 },
      { name: "GitHub", icon: <SiGithub />, level: 100 },
      { name: "GitLab", icon: <SiGitlab />, level: 100 },
      { name: "Linux", icon: <SiLinux />, level: 70 },
    ],
    type: "skill",
  },
  {
    section: "Tools I use",
    title: "Intelligence Artificielle & ML",
    items: [
      { name: "Machine Learning", icon: <SiGithubactions />, level: 70 },
      { name: "XGBoost, KNN, SVM", icon: <SiGithubactions />, level: 68 },
    ],
    type: "skill",
  },
];

function AllSkills() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) =>
      prev === 0 ? allCategories.length - 1 : prev - 1
    );
  };

  const handleNext = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) =>
      prev === allCategories.length - 1 ? 0 : prev + 1
    );
  };

  const currentCategory = allCategories[currentIndex];

  return (
    <div style={{ paddingBottom: "50px", marginTop: "40px" }}>
      <h1 className="project-heading" style={{ marginBottom: "40px" }}>
        My <strong className="purple">Skills & Expertise</strong>
      </h1>

      <div className="carousel-wrapper">
        <button
          className="carousel-arrow carousel-arrow-left"
          onClick={handlePrev}
          type="button"
          aria-label="Previous category"
        >
          &#8249;
        </button>

        <div className="carousel-frame">
          <h2 className="category-heading">{currentCategory.title}</h2>

          {currentCategory.type === "skill" ? (
            <Row style={{ justifyContent: "center" }}>
              {currentCategory.items.map((item, idx) => (
                <Col
                  key={idx}
                  xs={12}
                  sm={6}
                  md={4}
                  style={{ marginBottom: "25px" }}
                >
                  <div className="skill-card">
                    <div className="skill-icon-wrapper">
                      <div className="skill-icon-box">{item.icon}</div>
                    </div>
                    <div className="skill-content">
                      <div className="skill-name">{item.name}</div>
                      <div className="skill-bar-container">
                        <div
                          className="skill-bar-fill"
                          style={{ width: `${item.level}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          ) : (
            <div className="soft-skills-container">
              {currentCategory.items.map((skill, idx) => (
                <div key={idx} className="soft-skill-badge">
                  {skill}
                </div>
              ))}
            </div>
          )}
        </div>

        <button
          className="carousel-arrow carousel-arrow-right"
          onClick={handleNext}
          type="button"
          aria-label="Next category"
        >
          &#8250;
        </button>
      </div>

      <div className="carousel-dots">
        {allCategories.map((_, idx) => (
          <span
            key={idx}
            className={`carousel-dot ${idx === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(idx)}
            role="button"
            tabIndex={0}
            aria-label={`Go to category ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default AllSkills;
