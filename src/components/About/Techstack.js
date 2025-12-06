import React, { useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
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
  SiCplusplus,
} from "react-icons/si";

const categories = [
  {
    title: "Langages de Programmation",
    skills: [
      { name: "Java", icon: <DiJava />, level: 85 },
      { name: "Python", icon: <DiPython />, level: 80 },
      { name: "PHP", icon: <DiPhp />, level: 75 },
      { name: "C", icon: <SiC />, level: 70 },
    ],
  },
  {
    title: "Technologies Frontend",
    skills: [
      { name: "HTML5", icon: <DiHtml5 />, level: 90 },
      { name: "CSS3", icon: <DiCss3 />, level: 85 },
      { name: "JavaScript", icon: <DiJavascript1 />, level: 88 },
      { name: "React.js", icon: <DiReact />, level: 82 },
      { name: "Angular", icon: <SiAngular />, level: 78 },
    ],
  },
  {
    title: "Technologies Backend",
    skills: [
      { name: "Node.js & Express.js", icon: <SiExpress />, level: 80 },
      { name: "Spring Boot", icon: <SiSpringboot />, level: 85 },
      { name: "Symfony", icon: <SiSymfony />, level: 75 },
      { name: "Laravel", icon: <SiLaravel />, level: 78 },
      { name: "Django", icon: <SiDjango />, level: 72 },
      { name: ".NET", icon: <SiC />, level: 68 },
    ],
  },
  {
    title: "Bases de Données",
    skills: [
      { name: "MySQL", icon: <SiMysql />, level: 82 },
      { name: "MongoDB", icon: <DiMongodb />, level: 78 },
      { name: "Firebase", icon: <SiPostgresql />, level: 70 },
    ],
  },
];

function Techstack() {
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
            {currentCategory.skills.map((skill, idx) => (
              <Col key={idx} xs={12} sm={6} md={4} style={{ marginBottom: "25px" }}>
                <div className="skill-card">
                  <div className="skill-icon-wrapper">
                    <div className="skill-icon-box">{skill.icon}</div>
                  </div>
                  <div className="skill-content">
                    <div className="skill-name">{skill.name}</div>
                    <div className="skill-bar-container">
                      <div
                        className="skill-bar-fill"
                        style={{ width: `${skill.level}%` }}
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

export default Techstack;
