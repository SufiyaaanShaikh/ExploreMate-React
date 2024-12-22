import React, { useContext } from "react";
import AuthForm from "../components/From/AuthForm";
import { getValidationSchema } from "../schemas";
import AuthContext from "../context/AuthContext";
import FormHedaing from "../components/From/FormHedaing";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const { signup } = useContext(AuthContext);
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    const { name, email, password } = values;
    signup(name, email, password);
    toast.success("Account created successfully!");
    setTimeout(() => {
      toast.dismiss();
      // Redirect to login page
      navigate("/login");
    }, 1000);
    resetForm();
    setSubmitting(false);
  };

  return (
    <section id="hero" className="grid vh-100 w-100">
      <div className="left"></div>
      <div className="right h-100 w-100 flex justify-content">
        <div className="sec">
          <FormHedaing
            heading="Hi, Get Started Now"
            subHeading="Enter details to create your Travel Pulse account"
          />
          <AuthForm
            initialValues={initialValues}
            validationSchema={getValidationSchema(true)}
            onSubmit={handleSubmit}
            buttonText="Sign Up"
            redirectText="Already have an account?"
            redirectLink="/login"
            redirectLinkText="Sign in to account"
          />
        </div>
      </div>
    </section>
  );
};

export default Signup;
