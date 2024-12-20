import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import logo from "../images/Explore.svg";

const storedName = localStorage.getItem("name");
const storedEmail = localStorage.getItem("email");
const storedPassword = localStorage.getItem("password");

function Login() {
  const navigate = useNavigate();
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters long")
      .required("Password is required"),
  });
  const validateCredentials = (email, password) => {
    if (storedEmail === email && storedPassword === password) {
      return true;
    }
    return false;
  };
  return (
    <div>
      <section id="hero" className="grid vh-100 w-100">
        <div className="left login-left"></div>
        <div className="right h-100 w-100 flex justify-content">
          <div className="sec">
            <Link to={"/"} className="logo">
              <img src={logo} alt="logo" className="w-100 h-100 " />
            </Link>
            <h1 id="username" className="fw-700">
              Welcome Back, {storedName}
            </h1>
            <h3 className="">Enter Login Details</h3>
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                const { email, password } = values;

                if (validateCredentials(email, password)) {
                  navigate("/");
                  setTimeout(() => {
                    toast.success("Login successful!");
                    toast.dismiss();
                  }, 1000);
                  resetForm();
                } else {
                  toast.error("Invalid email or password");
                }
                setSubmitting(false);
              }}
            >
              {({ isSubmitting }) => (
                <Form id="loginForm" className="flex w-100">
                  <div className="input-block">
                    <Field
                      type="email"
                      name="email"
                      id="loginEmail"
                      placeholder="Email Address"
                      className="fw-500 f-16"
                      autoFocus
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
                      id="loginPassword"
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
                  <button
                    type="submit"
                    className="formBtn fw-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Logging in..." : "Log In"}
                  </button>
                  <p className="acc-para fw-500">
                    Don’t have an account yet?
                    <Link to={"/signup"} className="fw-500">
                      Create account
                    </Link>
                  </p>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
