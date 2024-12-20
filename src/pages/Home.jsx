import React from 'react'
import { Link } from "react-router-dom";

import toast, { Toaster } from "react-hot-toast";
import "../css/App.css";
import "../css/utility.css";

function Home() {
  return (
    <div>
        
      <Toaster />
        <Link to={"/"}>Home</Link>
        <Link to={"/signup"}>Signup</Link>
        <Link to={"/login"}>Login</Link>
    </div>
  )
}

export default Home