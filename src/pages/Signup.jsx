import React, { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { getValidationSchema } from "../schemas";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import logo from "../images/Explore.svg";
import AuthContext from "../context/AuthContext";

function Signup() {
  const navigate = useNavigate();
  const { signup } = useContext(AuthContext);

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
            validationSchema={getValidationSchema(true)}
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
