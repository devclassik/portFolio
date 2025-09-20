import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiJira,
  SiAsana,
  SiNetlify,
} from "react-icons/si";

// Tool list with official brand colors
const tools = [
  { icon: SiVisualstudiocode, name: "VS Code", color: "#007ACC" },
  { icon: SiPostman, name: "Postman", color: "#FF6C37" },
  { icon: SiSlack, name: "Slack", color: "#940b96ff" },
  { icon: SiJira, name: "Jira", color: "#0052CC" },
  { icon: SiAsana, name: "Asana", color: "#F06A6A" },
  { icon: SiVercel, name: "Vercel", color: "#e7e4e4ff" },
  { icon: SiNetlify, name: "Netlify", color: "#00C7B7" },
];

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, index) => {
        const Icon = tool.icon;
        return (
          <Col
            key={index}
            xs={4}
            md={2}
            className="tech-icons"
            style={{ textAlign: "center", marginBottom: "20px" }}
          >
            <Icon size={50} color={tool.color} />
            <div style={{ marginTop: "8px", fontSize: "14px", color: tool.color }}>
              {tool.name}
            </div>
          </Col>
        );
      })}
    </Row>
  );
}

export default Toolstack;
