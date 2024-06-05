import React, { useEffect, useState } from "react";
import { Container, Form, Button, Col } from "react-bootstrap";
import axios from "axios";
import { PulseLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BlogForm = ({ blogData, onSave }) => {
  const apiUrl = process.env.REACT_APP_API_LOCAL;
  const apiUrl2 = process.env.REACT_APP_API_RENDER;
  const errorMsg =
    "An error occurred while sending the email, kindly use the social media handles e.g whatsapp";

  const [formData, setFormData] = useState({
    title: "",
    img: [""], // Initialize as an array to handle multiple images
    description: "",
  });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (blogData) {
      setFormData(blogData);
    }
  }, [blogData]);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // console.log("data", name, value);
    // Check if the input field is for an image
    if (name.startsWith("img")) {
      const index = parseInt(name.split("-")[1], 10); // Extract the index from the input name
      setFormData((prevData) => {
        const updatedImages = [...prevData.img];
        updatedImages[index] = value; // Update the image URL at the specified index
        return { ...prevData, img: updatedImages }; // Update the formData state with the new image URLs
      });
    } else {
      // If the input field is not for an image, update the formData state normally
      // console.log("data", name, value);

      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const addImageField = () => {
    setFormData((prevData) => ({
      ...prevData,
      img: [...prevData.img, ""],
    }));
  };

  const removeImageField = (index) => {
    setFormData((prevData) => {
      const updatedImages = prevData.img.filter((_, i) => i !== index);
      return { ...prevData, img: updatedImages };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      toast.loading("Please wait...");

      const response = blogData
        ? await axios.put(`${apiUrl2}/blog/update/${blogData._id}`, formData)
        : await axios.post(`${apiUrl2}/blog/addBlog`, formData);

      toast.dismiss();
      if (response.status === 200) {
        toast.success(`Blog ${blogData ? "updated" : "added"} successfully!`);
        setFormData({
          img: [""],
          title: "",
          description: "",
        });
        onSave && onSave(); // Call the onSave callback if provided
      } else {
        toast.error(errorMsg);
      }
    } catch (error) {
      toast.error(errorMsg);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Col md={12} className="home-about">
      <h1 style={{ fontSize: "2.6em", color: "#fff" }}>
        {blogData ? "Update" : "Add"} <span className="purple">Blog</span>
      </h1>
      <Container>
        <ToastContainer />
        <Form onSubmit={handleSubmit}>
          <Form.Label className="text">Images</Form.Label>
          {formData.img.map((image, index) => (
            <Form.Group controlId={`formImage-${index}`} key={index}>
              <Form.Control
                type="text"
                name={`img-${index}`}
                value={image}
                onChange={handleChange}
                placeholder="Enter image URL"
                required
              />
              {index > 0 && (
                <Button
                  onClick={() => removeImageField(index)}
                  style={{ marginTop: "10px" }}
                >
                  Remove
                </Button>
              )}
            </Form.Group>
          ))}
          <Button
            variant="secondary"
            onClick={addImageField}
            style={{ marginBottom: "20px" }}
          >
            Add Image
          </Button>

          <Form.Group controlId="formTitle">
            <Form.Label className="text">Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter title"
              required
            />
          </Form.Group>

          <Form.Group controlId="formDescription">
            <Form.Label className="text">Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter description"
              required
            />
          </Form.Group>

          <br />

          <Button variant="primary" type="submit" disabled={submitting}>
            {submitting ? (
              <PulseLoader size={10} color="#ffffff" />
            ) : blogData ? (
              "Update"
            ) : (
              "Submit"
            )}
          </Button>
        </Form>
      </Container>
    </Col>
  );
};

export default BlogForm;
