import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from "../components/Form/AuthForm";
import { getValidationSchema } from "../schemas";
import AuthContext from "../context/AuthContext";
import FormHedaing from "../components/Form/FormHedaing";
import toast from "react-hot-toast";

const Login = () => {
  const { login, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    const { email, password } = values;
    if (login(email, password)) {
      toast.success("Login successful!");
      setTimeout(() => {
        toast.dismiss();
        navigate("/"); // Navigate to the homepage or dashboard
      }, 1000);
      resetForm();
    } else {
      toast.error("Invalid email or password");
    }
    setSubmitting(false);
  };

  return (
    <section id="hero" className="grid vh-100 w-100">
      <div className="login-left left"></div>
      <div className="right h-100 w-100 flex justify-content">
        <div className="sec">
          <FormHedaing
            heading="Welcome Back, "
            subHeading="Enter Login Details"
            user={user}
          />
          <AuthForm
            initialValues={initialValues}
            validationSchema={getValidationSchema(false)}
            onSubmit={handleSubmit}
            buttonText="Log In"
            redirectText="Don’t have an account yet?"
            redirectLink="/signup"
            redirectLinkText="Create account"
          />
        </div>
      </div>
    </section>
  );
};

export default Login;
