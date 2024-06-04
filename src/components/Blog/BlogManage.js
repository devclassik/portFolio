import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/about1.jpg";
import Tilt from "react-parallax-tilt";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import EditBlog from "./EditBlog";
import AddBlog from "./AddBlog";
import DeleteBlog from "./DeleteBlog";


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
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">Add New Blog</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Edit Blog</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Delete Blog</Nav.Link>
                </Nav.Item>
              </Nav>
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
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </Container>
  );
};

export default BlogManage;
