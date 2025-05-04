import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sarra Bouazzi </span>
            a software developer from <span className="purple"> Tunisia.</span>
            <br />
            I’m currently studying Computer Science and have already worked on several projects that combine web development, microservices, and modern tools like Spring Boot, Angular, Node.js, and MongoDB.
            <br />
            My goal is to create smart and useful applications that solve real problems. I enjoy learning new technologies and working on projects that allow me to grow as a developer.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> 🎬 Editing videos
            </li>
            <li className="about-activity">
              <ImPointRight /> 🎓 Following online courses
            </li>
            <li className="about-activity">
              <ImPointRight /> 🤝 Volunteering or helping others learn to code
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">sarra</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
