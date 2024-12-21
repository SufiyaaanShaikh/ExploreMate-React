import React from "react";
import { Link } from "react-router-dom";
import profileIcon from "../images/profil.svg";
import logo from "../images/Explore.svg";

function Header() {
  return (
    <>
      <header className="w-100">
        <div className="sec flex items-center">
          <div className="logo">
            <a href="index.html">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className="right flex items-center">
            <nav className="flex">
              <Link to={"/"} className="fw-500 f-16">
                Home
              </Link>
              {/* <a href="index.html">
                Home
              </a> */}
              <Link to={"/feed"} className="fw-500 f-16">
                Users
              </Link>
              {/* <a href="feed.html" className="fw-500 f-16">
                Users
              </a> */}

              <Link to={"/review"} className="fw-500 f-16">
                Review
              </Link>
              {/* <a href="review.html" className="fw-500 f-16">
                Review
              </a> */}
            </nav>
            <label for="profile-menu" className="profile-menu">
              <input type="checkbox" name="profile-menu" id="profile-menu" />
              {/* <!-- profile-icon  --> */}
              <div className="" id="user">
                <img
                  src={profileIcon}
                  className="w-100 h-100"
                  alt="profile-icon"
                />
              </div>
              {/* <!-- user-auth --> */}
              <div id="auth-dropdown" className="drop flex">
                <Link to={"/login"} className="fw-500 f-16">
                  Login
                </Link>
                {/* <a href="login.html" className="fw-500 f-16">
                  Login
                </a> */}

                <Link to={"/signup"} className="fw-500 f-16">
                  SignUp
                </Link>
                {/* <a id="singup" href="/signup.html" className="fw-500 f-16">
                  SignUp
                </a> */}
              </div>
              {/* <!-- Drop  --> */}
              <div id="profile-dropdown" className="drop para-f">
                <div className="name-block flex">
                  Name:
                  <a href="editProfile.html">
                    <img
                      src="images/pen.svg"
                      alt="pen"
                      className="editprofile-btn"
                    />
                  </a>
                </div>
                <a href="myAccount.html" id="name">
                  <span className="fw-500"></span>{" "}
                </a>
                <button id="logout">Logout</button>
              </div>
            </label>

            <label className="burger" for="burger">
              <input type="checkbox" id="burger" />
              <span></span>
              <span></span>
              <span></span>
            </label>
            <img src="images/menu.svg" alt="menu" className="menu" />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
