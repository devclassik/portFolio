import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function BlogDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  const apiUrl = process.env.REACT_APP_API_LOCAL;
  const apiUrl2 = process.env.REACT_APP_API_RENDER;

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`${apiUrl2}/blog/${id}`);
        setBlog(response?.data?.data);
        // console.log("respone", response);
      } catch (error) {
        toast.error("Failed to fetch blog details");
        console.error("Error fetching blog details:", error);
      }
    };

    fetchBlog();
  }, [id, apiUrl]);

  if (!blog) {
    return <p>Loading...</p>;
  }

  return (
    <Container
      fluid
      className="project-section"
      style={{ backgroundColor: "#fefefe  " }}
    >
      <ToastContainer />
      <Container>
        <Row>
          <Col md={12} className="home-about-description">
            <h1 className="purple">{blog.title}</h1>
            <p style={{ width: "100%" }}>{blog.description}</p>
            <div
              dangerouslySetInnerHTML={{ __html: blog.content }}
              style={{ width: "100%" }}
            />
          </Col>
          <Col md={6}>
            <img
              src={blog.img}
              alt={blog.title}
              style={{ borderRadius: "30px", width: "100%" }}
            />
          </Col>
        </Row>
        <Button
          variant="primary"
          onClick={() => window.history.back()}
          style={{ marginTop: "20px" }}
        >
          Back to Blog
        </Button>
      </Container>
    </Container>
  );
}

export default BlogDetail;
