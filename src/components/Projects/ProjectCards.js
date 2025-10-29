import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Body>
        {/* Header with icon/badge */}
        <div style={{ marginBottom: "15px" }}>
          <div
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #c770f0 0%, #623686 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.8rem",
              color: "white",
              marginBottom: "15px",
              boxShadow: "0 4px 15px rgba(199, 112, 240, 0.3)",
            }}
          >
            {props.icon || "💻"}
          </div>
          <Card.Title style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "8px" }}>
            {props.title}
          </Card.Title>
          {props.year && (
            <div
              style={{
                display: "inline-block",
                padding: "4px 12px",
                borderRadius: "20px",
                background: "rgba(199, 112, 240, 0.2)",
                border: "1px solid rgba(199, 112, 240, 0.4)",
                fontSize: "0.85rem",
                color: "#c770f0",
                marginBottom: "10px",
              }}
            >
              {props.year}
            </div>
          )}
        </div>

        <Card.Text
          style={{
            textAlign: "justify",
            fontSize: "0.95rem",
            lineHeight: "1.6",
            color: "rgba(255, 255, 255, 0.9)",
            marginBottom: "20px",
          }}
        >
          {props.description}
        </Card.Text>

        {/* Technologies/Tags */}
        {props.technologies && (
          <div style={{ marginBottom: "15px", display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {props.technologies.map((tech, index) => (
              <span
                key={index}
                style={{
                  padding: "4px 10px",
                  borderRadius: "6px",
                  background: "rgba(98, 54, 134, 0.3)",
                  border: "1px solid rgba(190, 80, 244, 0.3)",
                  fontSize: "0.75rem",
                  color: "#be6adf",
                  fontWeight: "500",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Buttons */}
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "8px 20px",
                fontSize: "0.9rem",
                fontWeight: "500",
              }}
            >
              <CgWebsite style={{ fontSize: "1.2rem" }} />
              Demo
            </Button>
          )}
          {!props.isBlog && props.ghLink && (
            <Button
              variant="primary"
              href={props.ghLink}
              target="_blank"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "8px 20px",
                fontSize: "0.9rem",
                fontWeight: "500",
                background: "transparent",
                border: "1px solid #623686",
              }}
            >
              <BsGithub style={{ fontSize: "1.2rem" }} />
              GitHub
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
