import React, { useState } from "react";
import {  Form, Button } from "react-bootstrap";
import axios from "axios";
import { PulseLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Modal from "react-bootstrap/Modal";
import InputGroup from "react-bootstrap/InputGroup";

const DeleteBlog = () => {
  const apiUrl = process.env.REACT_APP_API_LOCAL;
  const apiUrl2 = process.env.REACT_APP_API_RENDER;
  const errorMsg = "An error occurred while connecting to server";

  const [searchForm, setSearchForm] = useState({
    title: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log("data", name, value);
    setSearchForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (e) => {
    const selectedBlogId = e.target.value;
    const blog = blogs.find((b) => b._id === selectedBlogId);
    setSelectedBlog(blog);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      setSubmitting(true);
      const response = await axios.put(
        `${apiUrl2}/blog/search?search=${searchForm.title}`,
        {}
      );
    //   console.log("resp", response);
      if (response?.data?.totalPages === 0) {
        toast.info(response.data.data);
        setBlogs([]);
      } else {
        setBlogs(response.data.data);
        toast.success(response.data.totalPages + " " + response.data.message);
      }
    } catch (error) {
      toast.error(errorMsg);
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.delete(
        `${apiUrl}/blog/delete/${selectedBlog._id}`,
        {}
      );
    //   console.log("resp", response);
      if (response?.data?.data) {
        toast.success(response.data.message);
      } else {
        toast.success(response.data.message);
      }
      setShow(false);
    } catch (error) {
      toast.error(errorMsg);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Blog Title"
          aria-label="Blog Title"
          type="text"
          name="title"
          value={searchForm.title}
          onChange={handleChange}
        />
        <Button
          variant="outline-secondary"
          id="button-addon2"
          onClick={handleSubmit}
          disabled={submitting}
        >
          {submitting ? <PulseLoader size={10} color="#ffffff" /> : "Search..."}
        </Button>
      </InputGroup>

      {blogs.length > 0 && (
        <>
          <Form.Select
            aria-label="Select Blog"
            onChange={handleSelectChange}
            value={selectedBlog ? selectedBlog._id : ""}
          >
            <option value="">Open this select menu</option>
            {blogs.map((blog) => (
              <option key={blog._id} value={blog._id}>
                {blog.title}
              </option>
            ))}
          </Form.Select>
          <br />

          {selectedBlog && (
            <>
              <FloatingLabel
                controlId="floatingInput"
                label="Blog Title"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  value={selectedBlog.title}
                  disabled
                  placeholder="name@example.com"
                />
              </FloatingLabel>

              <Button
                variant="outline-danger"
                id="button-addon2"
                onClick={handleShow}
              >
                Delete Post
              </Button>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Are you sure you want to Delete ?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                {selectedBlog.title}
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="danger" onClick={handleDelete}>
                    Yes
                  </Button>
                </Modal.Footer>
              </Modal>
            </>
          )}
        </>
      )}
    </>
  );
};

export default DeleteBlog;
