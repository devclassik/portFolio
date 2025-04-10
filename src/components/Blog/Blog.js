import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Spinner,
  Button,
  Pagination,
  Alert
} from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BlogCard from "./BlogCards";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [paginationData, setPaginationData] = useState({
    totalPages: 1,
    currentPage: 1,
    totalItems: 0
  });
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiUrl2 = process.env.REACT_APP_API_RENDER;
  const navigate = useNavigate();

  const fetchBlogs = async () => {
    setLoading(true);
    setError(null);
    
    // Cancel token for axios request
    const source = axios.CancelToken.source();
    const timeout = setTimeout(() => {
      source.cancel("Request timeout");
    }, 15000); // 15 seconds timeout

    try {
      const response = await axios.get(
        `${apiUrl2}/blog/getAllBlog?page=${page}&limit=10`,
        {
          cancelToken: source.token,
          timeout: 10000 // additional timeout
        }
      );
      
      clearTimeout(timeout);
      setBlogs(response.data.data || []);
      setPaginationData({
        totalPages: response.data.totalPages || 1,
        currentPage: response.data.currentPage || 1,
        totalItems: response.data.totalItems || 0
      });
      setLoading(false);
    } catch (err) {
      clearTimeout(timeout);
      setLoading(false);
      
      if (axios.isCancel(err)) {
        setError("Request timed out. Please check your network connection.");
      } else if (err.response) {
        // Server responded with error status
        setError(`Server error: ${err.response.status}`);
      } else if (err.request) {
        // Request was made but no response
        setError("Network error. connection to the blog server down.");
      } else {
        // Other errors
        setError("Failed to load blogs. Please try again.");
      }
      
      toast.error("Failed to load blogs");
      console.error("Error fetching blogs:", err);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, [page, apiUrl2]);

  const handlePageChange = (number) => {
    if (number >= 1 && number <= paginationData.totalPages) {
      setPage(number);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const generatePaginationItems = () => {
    const items = [];
    const { totalPages } = paginationData;
    const visiblePages = 3; // Number of pages to show around current page

    // Always show first page
    items.push(
      <Pagination.Item
        key={1}
        active={1 === page}
        onClick={() => handlePageChange(1)}
      >
        1
      </Pagination.Item>
    );

    if (totalPages <= 5) {
      // Show all pages if total pages is 5 or less
      for (let number = 2; number <= totalPages; number++) {
        items.push(
          <Pagination.Item
            key={number}
            active={number === page}
            onClick={() => handlePageChange(number)}
          >
            {number}
          </Pagination.Item>
        );
      }
    } else {
      // Show ellipsis if needed before current page range
      if (page > visiblePages + 1) {
        items.push(<Pagination.Ellipsis key="start-ellipsis" />);
      }

      // Calculate range of pages to show around current page
      const startPage = Math.max(2, page - Math.floor(visiblePages / 2));
      const endPage = Math.min(totalPages - 1, page + Math.floor(visiblePages / 2));

      for (let number = startPage; number <= endPage; number++) {
        items.push(
          <Pagination.Item
            key={number}
            active={number === page}
            onClick={() => handlePageChange(number)}
          >
            {number}
          </Pagination.Item>
        );
      }

      // Show ellipsis if needed after current page range
      if (page < totalPages - visiblePages) {
        items.push(<Pagination.Ellipsis key="end-ellipsis" />);
      }

      // Always show last page
      items.push(
        <Pagination.Item
          key={totalPages}
          active={totalPages === page}
          onClick={() => handlePageChange(totalPages)}
        >
          {totalPages}
        </Pagination.Item>
      );
    }

    return items;
  };

  const truncateDescription = (description) => {
    if (!description) return "";
    const words = description.split(" ");
    return words.length > 20
      ? words.slice(0, 20).join(" ") + "..."
      : description;
  };

  const handleReload = () => {
    setError(null);
    fetchBlogs();
  };

  const handleBlogClick = (id) => {
    navigate(`/blog/${id}`);
  };

  return (
    <Container fluid className="about-section">
      <ToastContainer />
      <Container>
        <h1 className="project-heading">
          Welcome To <strong className="purple">Blog </strong>
        </h1>
        <p style={{ color: "white" }}>
          {paginationData.totalItems > 0 
            ? `Showing ${blogs.length} of ${paginationData.totalItems} blog posts`
            : "Browse our latest blog posts"}
        </p>

        {loading ? (
          <div className="text-center py-5">
            <Spinner animation="border" variant="primary" />
            <p className="mt-3 text-white">Loading blog posts...</p>
          </div>
        ) : error ? (
          <div className="text-center py-5">
            <Alert variant="danger">
              <Alert.Heading>Error Loading Blogs</Alert.Heading>
              <p>{error}</p>
              <Button variant="primary" onClick={handleReload} className="mt-3">
                Retry
              </Button>
            </Alert>
          </div>
        ) : blogs.length === 0 ? (
          <div className="text-center py-5">
            <Alert variant="info">
              <Alert.Heading>No Blog Posts Available</Alert.Heading>
              <p>There are currently no blog posts to display.</p>
              <Button variant="primary" onClick={handleReload} className="mt-3">
                Refresh
              </Button>
            </Alert>
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
                    onClick={() => handleBlogClick(blog._id)}
                  />
                </Col>
              ))}
            </Row>
            
            {paginationData.totalPages > 1 && (
              <div className="d-flex justify-content-center mt-4">
                <Pagination>
                  <Pagination.First
                    onClick={() => handlePageChange(1)}
                    disabled={page === 1}
                  />
                  <Pagination.Prev
                    onClick={() => handlePageChange(page - 1)}
                    disabled={page === 1}
                  />
                  {generatePaginationItems()}
                  <Pagination.Next
                    onClick={() => handlePageChange(page + 1)}
                    disabled={page === paginationData.totalPages}
                  />
                  <Pagination.Last
                    onClick={() => handlePageChange(paginationData.totalPages)}
                    disabled={page === paginationData.totalPages}
                  />
                </Pagination>
              </div>
            )}
          </>
        )}
      </Container>
    </Container>
  );
}

export default Blog;