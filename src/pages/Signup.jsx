import React, { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import logo from "../images/Explore.svg";
import AuthContext from "../context/AuthContext";

function Signup() {
  const navigate = useNavigate();
  const { signup } = useContext(AuthContext);

  const validationSchema = Yup.object({
    name: Yup.string()
      .matches(/^[A-Za-z\s]+$/, "Name must contain only letters and spaces")
      .min(5, "Too Short!")
      .max(20, "Too Long!")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters long")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  return (
    <section id="hero" className="grid vh-100 w-100">
      <div className="left"></div>
      <div className="right h-100 w-100 flex justify-content">
        <div className="sec">
          <Link to="/" className="logo">
            <img src={logo} alt="logo" className="w-100 h-100 " />
          </Link>
          <h1 className="fw-700">Hi, Get Started Now</h1>
          <h3 className="f-16">
            Enter details to create your Travel Pulse account
          </h3>
          <Formik
            initialValues={{
              name: "",
              email: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              const { name, email, password } = values;

              // Sign up user
              signup(name, email, password);

              // Show success toast
              toast.success("Account created successfully!");

              // Redirect to login page
              navigate("/login");

              resetForm();
              setSubmitting(false);
            }}
          >
            {({ isSubmitting }) => (
              <Form id="loginForm" className="flex w-100">
                <div className="input-block">
                  <Field
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    className="fw-500 f-16"
                    autoFocus
                    autoComplete="off"
                  />
                  <ErrorMessage
                    className="formErr para-f"
                    name="name"
                    component="div"
                    style={{ color: "red" }}
                  />
                </div>
                <div className="input-block">
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="fw-500 f-16"
                    autoComplete="off"
                  />
                  <ErrorMessage
                    className="formErr para-f"
                    name="email"
                    component="div"
                    style={{ color: "red" }}
                  />
                </div>
                <div className="input-block">
                  <Field
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="fw-500 f-16"
                    autoComplete="off"
                  />
                  <ErrorMessage
                    className="formErr para-f"
                    name="password"
                    component="div"
                    style={{ color: "red" }}
                  />
                </div>
                <div className="input-block">
                  <Field
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    className="fw-500 f-16"
                    autoComplete="off"
                  />
                  <ErrorMessage
                    className="formErr para-f"
                    name="confirmPassword"
                    component="div"
                    style={{ color: "red" }}
                  />
                </div>
                <button
                  type="submit"
                  className="formBtn fw-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Signing up..." : "Sign Up"}
                </button>
                <p className="acc-para fw-500">
                  Already have an account?
                  <Link to={"/login"} className="fw-500">
                    Sign in to account
                  </Link>
                </p>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
}

export default Signup;
