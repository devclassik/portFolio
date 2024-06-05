import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import moment from "moment";


function BlogDetail() {

  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [formattedDate, setFormattedDate] = useState(null);

  const apiUrl = process.env.REACT_APP_API_LOCAL;
  const apiUrl2 = process.env.REACT_APP_API_RENDER;

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`${apiUrl2}/blog/${id}`);
        const blogData = response?.data?.data;
        setBlog(blogData);
        
        if (blogData?.createdAt) {
          setFormattedDate(moment(blogData.createdAt).format("MMMM Do YYYY, h:mm:ss a"));
        }
      } catch (error) {
        toast.error("Failed to fetch blog details");
        console.error("Error fetching blog details:", error);
      }
    };
  
    fetchBlog();
  }, [id, apiUrl, formattedDate]);

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
            <p style={{ fontStyle: "italic", cursor: "pointer" }}>Posted: {formattedDate}</p>
            <div
              dangerouslySetInnerHTML={{ __html: blog.content }}
              style={{ width: "100%" }}
            />
          </Col>
          <Col md={6}>
            <div
            style={{display:'flex', justifyContent:'space-around', flexWrap: 'wrap'}}>
              {Array.isArray(blog.img) ? (
                blog.img.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${blog.title} - ${index + 1}`}
                    className="img-fluid mb-3"
                    style={{
                      borderRadius: "30px",
                      width: "100%",
                      maxWidth: "100%",
                    }}
                  />
                ))
              ) : (
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="img-fluid"
                  style={{ borderRadius: "30px", width: "100%" }}
                />
              )}
            </div>
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
