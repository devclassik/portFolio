import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import emotion from "../../Assets/Projects/emotion.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import inoteOpx from "../../Assets/Projects/noteopx.png";
import salonHome from "../../Assets/Projects/salonHome.png";
import payslate from "../../Assets/Projects/payslate.png";
import huiospay from "../../Assets/Projects/huiospay.png";
import beetleTaxis from "../../Assets/Projects/beetleTaxis.png";
import ibhelpdesk from "../../Assets/Projects/ibhelpdesk.png";
import ibpaymata from "../../Assets/Projects/ibpaymata.png";
import infome from "../../Assets/Projects/infome.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={inoteOpx}
              isBlog={false}
              title="InoteOpx"
              description="A facility web app to manage the equipments, material and manpower both offshore and onshore"
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://notes-app-dev.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={salonHome}
              isBlog={false}
              title="SalonHome"
              description="The smart app ecosystem for beauty
              Whether you are looking for beauty services or
              you are a beauty professional, we are here to assist you."
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://salonhome.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={payslate}
              isBlog={false}
              title="Payslate"
              description="Payslate is a product of Huiospay Limited , which gives users the ability to easily access payments for services by different organizations, while making the process of auditing and account reconciliation easy at the click of a button."
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://www.payslate.com.ng/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={huiospay}
              isBlog={false}
              title="Huiospay"
              description="Huiospay is A flexible payment solution that support every stage of your growth."
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://huiospay.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={beetleTaxis}
              isBlog={false}
              title="Beetle Taxis"
              description="Beetle taxis a brand of Regal Chauffeurs Ltd. We are a professional chauffeur in Nigeria, providing services to and for both business clients and individuals alike in cities across (Abuja, Port Harcourt, Lagos, Kano, Ibadan)."
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://beetletaxis.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Treep"
              description="Treep is a professional chauffeur in Nigeria, providing services to and for both business clients and individuals alike in cities across (Abuja, Port Harcourt, Lagos, Kano, Ibadan)."
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://www.treep.com.ng"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ibhelpdesk}
              isBlog={false}
              title="IBHelpDesk"
              description="Treep is a professional chauffeur in Nigeria, providing services to and for both business clients and individuals alike in cities across (Abuja, Port Harcourt, Lagos, Kano, Ibadan)."
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://www.treep.com.ng"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ibpaymata}
              isBlog={false}
              title="IBPayMata"
              description="Treep is a professional chauffeur in Nigeria, providing services to and for both business clients and individuals alike in cities across (Abuja, Port Harcourt, Lagos, Kano, Ibadan)."
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://www.treep.com.ng"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={infome}
              isBlog={false}
              title="IBInfoMe"
              description="Treep is a professional chauffeur in Nigeria, providing services to and for both business clients and individuals alike in cities across (Abuja, Port Harcourt, Lagos, Kano, Ibadan)."
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://www.treep.com.ng"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="IBPensionPro"
              description="Treep is a professional chauffeur in Nigeria, providing services to and for both business clients and individuals alike in cities across (Abuja, Port Harcourt, Lagos, Kano, Ibadan)."
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://www.treep.com.ng"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={infome}
              isBlog={false}
              title="DTSGInfoMe"
              description="Treep is a professional chauffeur in Nigeria, providing services to and for both business clients and individuals alike in cities across (Abuja, Port Harcourt, Lagos, Kano, Ibadan)."
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://www.treep.com.ng"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              // ghLink="https://github.com/soumyajit4419/Plant_AI" 
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
