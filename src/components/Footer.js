import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md"; // Icône email

function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Sarra Bouazzi</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} SB</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">

            {/* GitHub */}
            <li className="social-icons">
              <a
                href="https://github.com/sara-bouazzi"
                style={{ color: "white" }}
              >
                <AiFillGithub />
              </a>
            </li>

            {/* LinkedIn */}
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/sarra-bouazzi-35b903271/"
                style={{ color: "white" }}
              >
                <FaLinkedinIn />
              </a>
            </li>

            {/* Email */}
            <li className="social-icons">
              <a
                href="mailto:sarra.bouazzi2002@gmail.com"
                style={{ color: "white" }}
              >
                <MdEmail />
              </a>
            </li>

          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
