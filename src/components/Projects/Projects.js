import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ngf from "../../Assets/Projects/ngf.png";
import branddriveWeb from "../../Assets/Projects/branddriveweb.png";
import helpdesk from "../../Assets/Projects/helpdesk.png";
import branddrive from "../../Assets/Projects/branddrive.png";
import inoteOpx from "../../Assets/Projects/noteopx.png";
import salonHome from "../../Assets/Projects/salonHome.png";
import payslate from "../../Assets/Projects/payslate.png";
import huiospay from "../../Assets/Projects/huiospay.png";
import beetleTaxis from "../../Assets/Projects/beetleTaxis.png";
import ibhelpdesk from "../../Assets/Projects/ibhelpdesk.png";
import ibpaymata from "../../Assets/Projects/ibpaymata.png";
import infome from "../../Assets/Projects/infome.png";
import treep from "../../Assets/Projects/treep.png";
import wiffy from "../../Assets/Projects/wiffy.png";

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
              imgPath={wiffy}
              isBlog={false}
              title="DTK consulting"
              description="A web based application to book an education consultant expert"
              demoLink="https://crenee.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ngf}
              isBlog={false}
              title="NGF Health"
              description="A web based application to monitor and track the sub-national on health related matters"
              demoLink="https://ngf-frontend-health.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ngf}
              isBlog={false}
              title="NGF Fund Dashboard"
              description="A web based application to monitor and track the finance of the Nigeria Governors' Forum Secretariat fund"
              demoLink="https://ngf-frontend-health.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={branddriveWeb}
              isBlog={false}
              title="Branddrive Web"
              description="BrandDrive provides a suite of tools that works smarter for you and your business. Bring every side of your business together — sales, purchases, expenses, inventory, payments, insights and more."
              demoLink="https://branddrive.co/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={branddrive}
              isBlog={false}
              title="Branddrive App"
              description="BrandDrive provides a suite of tools that works smarter for you and your business. Bring every side of your business together — sales, purchases, expenses, inventory, payments, insights and more."
              demoLink="https://play.google.com/store/apps/details?id=com.branddrive&hl=en"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={inoteOpx}
              isBlog={false}
              title="InoteOpx"
              description="A facility web app to manage the equipments, material and manpower both offshore and onshore"
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
              demoLink="https://salonhome.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={payslate}
              isBlog={false}
              title="Payslate"
              description="Payslate is a product of Huiospay Limited , which gives users the ability to easily access payments for services by different organizations, while making the process of auditing and account reconciliation easy at the click of a button."
              demoLink="https://www.payslate.com.ng/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={huiospay}
              isBlog={false}
              title="Huiospay"
              description="Huiospay is A flexible payment solution that support every stage of your growth."
              demoLink="https://huiospay.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={beetleTaxis}
              isBlog={false}
              title="Beetle Taxis"
              description="Beetle taxis a brand of Regal Chauffeurs Ltd. We are a professional chauffeur in Nigeria,
               providing services to and for both business clients and individuals alike in cities across
                (Abuja, Port Harcourt, Lagos, Kano, Ibadan)."
              demoLink="https://beetletaxis.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={treep}
              isBlog={false}
              title="Treep"
              description="Treep is a professional chauffeur in Nigeria, providing services to and for both business clients
               and individuals across (Abuja, Port Harcourt, Lagos, Kano, Ibadan)."
              demoLink="https://www.treep.com.ng"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ibhelpdesk}
              isBlog={false}
              title="IBHelpDesk"
              description="is a web application used in managing retiree pensions contributions from service to retirement."
              demoLink="https://deltastate.gov.ng/tag/bureau-of-state-pensions/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ibpaymata}
              isBlog={false}
              title="IBPayMata"
              description="DTSG PayMata MobileApp is a product of InfoByte Technologies Limited
              It is designed to work with IBHR (InfoByte Human Resources) system by providing users with a platform through which requests
              could be made remotely and also certain resources are accessed."
              demoLink="https://play.google.com/store/search?q=dtsg+pay+mata+app&c=apps&hl=en"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={infome}
              isBlog={false}
              title="IBInfoMe"
              description="Web application used in the budgeting and economic planing with the ministry of budget and economy planing"
              demoLink="https://nationalplanning.gov.ng/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={helpdesk}
              isBlog={false}
              title="IBPensionPro"
              description="A utility app meant for retired employees of Delta State Governments who are part of the Contributory Pension Scheme."
              demoLink="https://play.google.com/store/apps/details?id=com.app.deltastatepensionsbureau.helpdesk&hl=en"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={infome}
              isBlog={false}
              title="DTSGInfoMe"
              description="Web application used in delta state the budgeting and economic planing with the ministry of budget and economy planing"
              demoLink="https://www.treep.com.ng"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
