import React from "react";
import userIcon from "../images/user.webp";
import Header from "../components/Header";
import Footer from "../components/Footer";

function UserProfile() {
  return (
    <>
      <Header />
      <section id="profile-main" className="position">
        <div>
          <div className="bg"></div>
          <div className="profile-block">
            <div className="container flex items-center">
              <div className="profile-pic">
                <img
                  src={userIcon}
                  alt="User Profile Picture"
                  className="w-100 h-100"
                />
              </div>
              <h2 id="profileUserName" className="sec-head username">
                John Doe
              </h2>
              <h3 id="profileCity" className="f-16 para-c city">
                Turkey, Ankara
              </h3>
              <p className="profil-para para-f para-c">
                I’m a web designer, working with Figma, Photoshop, and
                Illustrator
              </p>
              <div className="profile-details">
                <div className="block">
                  <p className="numbers">80</p>
                  <p className="des f-16">Posts</p>
                </div>
                <div className="block">
                  <p className="numbers">50</p>
                  <p className="des f-16">Followers</p>
                </div>
                <div className="block">
                  <p className="numbers">90</p>
                  <p className="des f-16">Following</p>
                </div>
              </div>
              <div className="btn-block flex">
                <button id="followBtn" className="followBtn">
                  Follow
                </button>
                <button id="msgBtn" className="msgBtn">
                  Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default UserProfile;
