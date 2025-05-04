import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/photoProfile.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hello! I'm <strong className="purple">Sarra Bouazzi</strong>, a passionate full-stack developer from Tunisia.
              <br />
              <br />
              🎓 I'm currently in my second year of engineering at <strong className="purple">ESPRIT</strong>, where I’ve worked on academic and technical projects that made a real difference.
              <br />
              <br />
              💻 I enjoy building modern web applications using technologies like{" "}
              <strong className="purple">JavaScript, Java, Angular, React,</strong> and{" "}
              <strong className="purple">Spring Boot</strong>.
              <br />
              <br />
              🌍 I'm fluent in French (90%) and English (80%), and I’m always excited to collaborate with people from diverse backgrounds.
              <br />
              <br />
              ✉️ Contact: <a href="mailto:sarra.bouazzi2002@gmail.com">sarra.bouazzi2002@gmail.com</a> · 📞 +216 50 113 863
              <br />
              <br />
              Let’s turn your ideas into powerful digital solutions! <span className="purple">✨</span>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect</span> with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/sara-bouazzi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sarra-bouazzi-35b903271/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:sarra.bouazzi2002@gmail.com"
                  className="icon-colour home-social-icons"
                >
                  <MdEmail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
