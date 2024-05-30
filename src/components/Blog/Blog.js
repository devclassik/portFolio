import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
// import Particle from "../Particle";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BlogCard from "./BlogCards";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Pagination from "react-bootstrap/Pagination";

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [blogPages, setBlogsPages] = useState([]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate(); // Initialize useHistory

  const apiUrl = process.env.REACT_APP_API_LOCAL;
  const apiUrl2 = process.env.REACT_APP_API_RENDER;

  let active = page;
  let items = [];
  for (let number = 1; number <= blogPages?.totalPages; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }

  useEffect(() => {
    // Fetch data from API when the component mounts
    const fetchBlogs = async () => {
      // console.log('apiUrl', apiUrl);
      try {
        const response = await axios.get(
          `${apiUrl}/blog/getAllBlog?page=${page}&limit=10`
        ); // Replace with your API endpoint
        setBlogs(response.data.data);
        setBlogsPages(response.data);
        console.log("response ", response);
      } catch (error) {
        toast.error("Failed to get blogs");
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, [page, apiUrl]);

  const handleCardClick = (id) => {
    console.log("clicked me", id);
    navigate(`/blog/${id}`);
  };

  const loadNext = () => {
    setPage((prevPage) => prevPage + 1);
    // console.log( 'page', page);
  };

  const loadPrev = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
    // console.log('page', page);
  };

  const truncateDescription = (description) => {
    const words = description.split(" ");
    return words.length > 20 ? words.slice(0, 20).join(" ") + "..." : description;
  };

  return (
    <Container fluid className="about-section">
      <ToastContainer />
      <Container >
        <h1 className="project-heading">
          Welcome To <strong className="purple">Blog </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are latest blog posts from DevClassik.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {blogs.map((blog, index) => (
            <Col key={index} md={4} className="project-card">
              <div onClick={() => handleCardClick(blog._id)}>
                <BlogCard
                  imgPath={blog.img}
                  isBlog={false}
                  title={blog.title}
                  description={truncateDescription(blog.description)}
                  demoLink={blog.demoLink}
                />
              </div>
            </Col>
          ))}
        </Row>
        <div className="project-card blog-card">
          {page > 1 ? (
            <>
              <Button variant="success" onClick={loadPrev}>
                {" "}
                Prev ...
              </Button>
              <Button variant="success" onClick={loadNext}>
                {" "}
                Next ...
              </Button>
            </>
          ) : (
            <>
              <Button variant="success" onClick={loadNext}>
                {" "}
                Next ...
              </Button>
              {/* <Pagination.Next />
              <Pagination.Next onClick={loadNext} /> */}
              <Pagination>{items}</Pagination>
            </>
          )}
        </div>
      </Container>
    </Container>
  );
}

export default Blog;
