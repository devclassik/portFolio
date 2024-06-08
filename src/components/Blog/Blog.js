import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Spinner,
  Button,
  Pagination,
} from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BlogCard from "./BlogCards";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [blogPages, setBlogsPages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [timeoutError, setTimeoutError] = useState(false);

  const apiUrl2 = process.env.REACT_APP_API_RENDER;

  const handlePageChange = (number) => {
    setPage(number);
  };

  let active = page;
  let items = [];
  // for (let number = 1; number <= blogPages?.totalPages; number++) {
  //   items.push(
  //     <Pagination.Item
  //       key={number}
  //       active={number === active}
  //       onClick={() => handlePageChange(number)}
  //     >
  //       {number}
  //     </Pagination.Item>
  //   );
  // }

  if (blogPages?.totalPages <= 5) {
    // If total pages are 5 or less, show all pages
    for (let number = 1; number <= blogPages?.totalPages; number++) {
      items.push(
        <Pagination.Item
          key={number}
          active={number === active}
          onClick={() => handlePageChange(number)}
        >
          {number}
        </Pagination.Item>
      );
    }
  } else {
    // If active page is 3 or less, show the first three pages and ellipsis
    if (active <= 3) {
      for (let number = 1; number <= 3; number++) {
        items.push(
          <Pagination.Item
            key={number}
            active={number === active}
            onClick={() => handlePageChange(number)}
          >
            {number}
          </Pagination.Item>
        );
      }
      items.push(<Pagination.Ellipsis key="ellipsis" />);
      items.push(
        <Pagination.Item
          key={blogPages?.totalPages}
          active={blogPages?.totalPages === active}
          onClick={() => handlePageChange(blogPages?.totalPages)}
        >
          {blogPages?.totalPages}
        </Pagination.Item>
      );
    } else {
      // If active page is greater than 3, show ellipsis, active-1, active, active+1 and the last page
      items.push(
        <Pagination.Item
          key={1}
          active={1 === active}
          onClick={() => handlePageChange(1)}
        >
          1
        </Pagination.Item>
      );
      items.push(<Pagination.Ellipsis key="ellipsis" />);
      for (
        let number = active - 1;
        number <= Math.min(active + 1, blogPages?.totalPages);
        number++
      ) {
        items.push(
          <Pagination.Item
            key={number}
            active={number === active}
            onClick={() => handlePageChange(number)}
          >
            {number}
          </Pagination.Item>
        );
      }
      items.push(<Pagination.Ellipsis key="ellipsis2" />);
      items.push(
        <Pagination.Item
          key={blogPages?.totalPages}
          active={blogPages?.totalPages === active}
          onClick={() => handlePageChange(blogPages?.totalPages)}
        >
          {blogPages?.totalPages}
        </Pagination.Item>
      );
    }
  }

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      setTimeoutError(false);

      // Set a timeout to show the reload button if the API call takes too long
      const timeout = setTimeout(() => {
        setLoading(false);
        setTimeoutError(true);
      }, 60000); // 1 minutes

      try {
        const response = await axios.get(
          `${apiUrl2}/blog/getAllBlog?page=${page}&limit=10`
        );
        clearTimeout(timeout);
        setBlogs(response.data.data);
        setBlogsPages(response.data);
        setLoading(false);
      } catch (error) {
        clearTimeout(timeout);
        setLoading(false);
        setTimeoutError(true);
        toast.error("Failed to get blogs");
        // console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, [page, apiUrl2]);

  const truncateDescription = (description) => {
    const words = description.split(" ");
    return words.length > 20
      ? words.slice(0, 20).join(" ") + "..."
      : description;
  };

  const handleReload = () => {
    setTimeoutError(false);
    setLoading(true);
    setPage(page); // Trigger re-fetch
  };

  return (
    <Container fluid className="about-section">
      <ToastContainer />
      <Container>
        <h1 className="project-heading">
          Welcome To <strong className="purple">Blog </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are the latest blog posts from DevClassik.
        </p>

        {loading ? (
          <div className="text-center">
            <Spinner animation="border" variant="primary" />
          </div>
        ) : timeoutError ? (
          <div className="text-center">
            <p style={{ color: "white" }}>
              Failed to load blogs. Please try again.
            </p>
            <Button variant="primary" onClick={handleReload}>
              Reload
            </Button>
          </div>
        ) : (
          <>
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
              {blogs.map((blog, index) => (
                <Col key={index} md={4} className="project-card">
                  <BlogCard
                    imgPath={Array.isArray(blog.img) ? blog.img[0] : blog.img}
                    isBlog={false}
                    title={blog.title}
                    description={truncateDescription(blog.description)}
                    demoLink={blog._id}
                  />
                </Col>
              ))}
            </Row>
            <div className="project-card blog-card">
              <Pagination>
                <Pagination.First
                  onClick={() => handlePageChange(1)}
                  disabled={active === 1}
                />
                <Pagination.Prev
                  onClick={() => handlePageChange(active - 1)}
                  disabled={active === 1}
                />
                {items}
                <Pagination.Next
                  onClick={() => handlePageChange(active + 1)}
                  disabled={active === blogPages?.totalPages}
                />
                <Pagination.Last
                  onClick={() => handlePageChange(blogPages?.totalPages)}
                  disabled={active === blogPages?.totalPages}
                />
              </Pagination>
            </div>
          </>
        )}
      </Container>
    </Container>
  );
}

export default Blog;
