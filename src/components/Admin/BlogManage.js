import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/about1.jpg";
import Tilt from "react-parallax-tilt";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import EditBlog from "./EditBlog";
import AddBlog from "./AddBlog";
import DeleteBlog from "./DeleteBlog";
import { BlogMenu } from "./BlogMenu";
import { QuizMenu } from "./QuizMenu";
import QuizForm from "./AddQuiz";
import EditQuiz from "./EditQuiz";
import DeleteQuiz from "./DeleteQuiz";
import TextEditor from "./TinyMce";


const BlogManage = () => {

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="avatar"
                style={{ borderRadius: "10px", display: "none" }}
              />
            </Tilt>
          </Col>
        </Row>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
             <BlogMenu />
             <QuizMenu />
            </Col>
            <Col sm={9}>
              <Tab.Content style={{ marginBottom: "15%" }}>
                <Tab.Pane eventKey="first">
                  <AddBlog />
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <EditBlog />
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                    <DeleteBlog />
                </Tab.Pane>
                <Tab.Pane eventKey="ten">
                    <QuizForm />
                </Tab.Pane>
                <Tab.Pane eventKey="eleven">
                    <EditQuiz />
                </Tab.Pane>
                <Tab.Pane eventKey="twelve">
                    <DeleteQuiz />
                </Tab.Pane>
                <Tab.Pane eventKey="thirteen">
                    <TextEditor />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </Container>
  );
};

export default BlogManage;
