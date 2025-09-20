import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiAngularSimple,
  DiIonic,
  DiGo,
} from "react-icons/di";
import {
  SiFirebase,
  SiNextdotjs,
  SiPostgresql,
  SiLaravel,
  SiDevexpress,
  SiRender,
  SiHeroku,
  SiAmazonaws,
  SiAwslambda,
  SiDigitalocean,
  SiVercel,
  SiNetlify,
  SiRedis,
  SiAmazons3,
  SiFigma,
  SiNestjs,
} from "react-icons/si";

// Techs array: add more here if needed
const techs = [
  { icon: DiAngularSimple, name: "Angular", color: "#DD0031" },
  { icon: DiIonic, name: "Ionic", color: "#3880FF" },
  { icon: SiPostgresql, name: "PostgreSQL", color: "#336791" },
  { icon: SiLaravel, name: "Laravel", color: "#FF2D20" },
  { icon: DiGo, name: "Go", color: "#00ADD8" },
  { icon: DiJavascript1, name: "JavaScript", color: "#F7DF1E" },
  { icon: SiDevexpress, name: "DevExpress", color: "#FF7200" },
  { icon: DiNodejs, name: "Node.js", color: "#339933" },
  { icon: DiReact, name: "React", color: "#61DAFB" },
  { icon: DiMongodb, name: "MongoDB", color: "#47A248" },
  { icon: SiNextdotjs, name: "Next.js", color: "#f6f5f5ff" },
  { icon: DiGit, name: "Git", color: "#F05032" },
  { icon: SiFirebase, name: "Firebase", color: "#FFCA28" },
  { icon: SiRedis, name: "Redis", color: "#DC382D" },
  { icon: SiNestjs, name: "NestJS", color: "#E0234E" },
  { icon: SiAmazonaws, name: "AWS", color: "#FF9900" },
  { icon: SiAwslambda, name: "AWS Lambda", color: "#FF9900" },
  { icon: SiDigitalocean, name: "DigitalOcean", color: "#0080FF" },
  { icon: SiHeroku, name: "Heroku", color: "#430098" },
  { icon: SiRender, name: "Render", color: "#46E3B7" },
  { icon: SiVercel, name: "Vercel", color: "#f5f5f5ff" },
  { icon: SiNetlify, name: "Netlify", color: "#00C7B7" },
  { icon: SiAmazons3, name: "Amazon S3", color: "#569A31" },
  { icon: SiFigma, name: "Figma", color: "#F24E1E" },
  { icon: DiPython, name: "Python", color: "#3776AB" },
  { icon: DiJava, name: "Java", color: "#007396" },
];

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techs.map((tech, index) => {
        const Icon = tech.icon;
        return (
          <Col
            key={index}
            xs={4}
            md={2}
            className="tech-icons"
            style={{ textAlign: "center", marginBottom: "20px" }}
          >
            <Icon size={50} color={tech.color} />
            <div style={{ marginTop: "8px", fontSize: "14px", color: tech.color }}>
              {tech.name}
            </div>
          </Col>
        );
      })}
    </Row>
  );
}

export default Techstack;
