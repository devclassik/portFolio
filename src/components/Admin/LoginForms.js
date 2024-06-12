import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { Form, Button } from "react-bootstrap";
import { PulseLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function LoginForms({ option }) {
  console.log("option", option);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
  });
  const navigate = useNavigate()


  const apiUrl = process.env.REACT_APP_API_LOCAL;
  const apiUrl2 = process.env.REACT_APP_API_RENDER;

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("form data", formData, 'option' ,option);
    if (option === 2 && formData.password !== formData.repeatPassword) {
      toast.error("Passwords do not match");
      return;
    }
    setSubmitting(true);
    try {
      const response =
        option === 1
          ? await axios.post(`${apiUrl2}/user/login`, {
              email: formData.email,
              password: formData.password,
            })
          : option === 2
          ? await axios.post(`${apiUrl2}/user/register`, {
              email: formData.email,
              username: formData.username,
              password: formData.password,
            })
          : option === 3
          ? await axios.post(`${apiUrl2}/user/forgot-password`, {
              email: formData.email,
            })
          : null;

      setSubmitting(false);
      if (response) {
        console.log("data", response);
        toast.success(response?.data?.message);
        const token = response?.data?.data?.accessToken;
        console.log('token', token);
        localStorage.setItem('token', JSON.stringify(token))
        navigate('/')
        toast.success(response?.data?.message?.message);
      } 
    } catch (error) {
      setSubmitting(false);
      // console.log('error', error.response);
      toast.error(error?.response?.data?.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("name", name, "value", value);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const verifyPassword = () => {
    if (formData.password !== formData.repeatPassword) {
      return toast.error("Password did not match");
    }
    handleChange();
  };

  return (
    <form className="account-form" onSubmit={(evt) => evt.preventDefault()}>
      <ToastContainer />
      <div
        className={
          "account-form-fields " +
          (option === 1 ? "sign-in" : option === 2 ? "sign-up" : "forgot")
        }
      >
        <input
          id="email"
          name="email"
          type="email"
          placeholder="E-mail"
          required
          onChange={handleChange}
        />
        <input
          id="username"
          name="username"
          type="text"
          placeholder="username"
          onChange={handleChange}
          required={option === 2 ? true : false}
          style={{ display: option === 1 ? "none" : "block" }}
        />
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          required={option === 1 || option === 2 ? true : false}
          disabled={option === 3 ? true : false}
          onChange={handleChange}
        />
        <input
          id="repeat-password"
          name="repeatPassword"
          type="password"
          placeholder="Repeat password"
          required={option === 2 ? true : false}
          disabled={option === 1 || option === 3 ? true : false}
          onChange={handleChange}
        />
      </div>
      <button className="btn-submit-form" type="submit" onClick={handleSubmit}>
        {submitting ? (
          <PulseLoader size={10} color="#ffffff" />
        ) : option === 1 ? (
          "Sign in"
        ) : option === 2 ? (
          "Sign up"
        ) : (
          "Reset password"
        )}
      </button>
    </form>
  );
}

export default LoginForms;
