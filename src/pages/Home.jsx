import React from "react";
import { Link } from "react-router-dom";
import "../css/App.css";
import "../css/utility.css";
import Header from "../components/Header";

function Home() {
  return (
    <>
      {/* <Toaster /> */}
      {/* <Link to={"/"}>Home</Link>
      <Link to={"/signup"}>Signup</Link>
      <Link to={"/login"}>Login</Link> */}
      <Header />
    </>
  );
}

export default Home;
