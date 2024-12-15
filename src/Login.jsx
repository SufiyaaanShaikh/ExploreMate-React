import React from 'react'
import logo from './images/Explore.svg';

function Login() {
  return (
    <div>
         <section id="hero" className="grid vh-100 w-100">
        <div className="left login-left"></div>
        <div className="right h-100 w-100 flex justify-content">
            <div className="sec">
                <a href="index.html" className="logo"><img src={logo} alt="logo" className="w-100 h-100 "/></a>
                <h1 id="username" className="fw-700">Welcome Back, Jonathan</h1>
                <h3 className="">Enter Login Details</h3>
                <form id="loginForm" className="flex w-100">

                    <div className="input-block">
                        <input id="loginEmail" type="email" name="loginEmail" placeholder="Email Address"
                            className="fw-500 f-16" autoFocus autoComplete="off"/>
                        <p className="formErr para-f"></p>
                    </div>

                    <div className="input-block">
                        <input id="loginPassword" name="loginPassword" type="password" placeholder="Password"
                            className="fw-500 f-16" autoComplete="off"/>
                        <p className="formErr para-f"></p>
                    </div>

                    <button type="submit" className="formBtn fw-700">Log In</button>
                    <p className="acc-para fw-500">Don’t have an account yet?<a href="/signup.html" className="fw-500">Create
                            account</a></p>
                </form>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Login