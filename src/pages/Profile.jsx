import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import userIcon from "../images/user.webp";
import editIcon from "../images/edit-icon.svg";
import shareIcon from "../images/share.svg";
import AuthContext from "../context/AuthContext";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Profile() {
  const { user } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState("tab1");
  const [profileImage, setProfileImage] = useState(userIcon);

  const tabs = [
    { id: "tab1", label: "Trip" },
    { id: "tab2", label: "Followers" },
    { id: "tab3", label: "Following" },
    { id: "tab4", label: "Reviews" },
  ];

  const tabContent = {
    tab1: (
      <div className="tab-content">
        <div className="tab-block grid">
          <div className="card">1</div>
          <div className="card">2</div>
          <div className="card">3</div>
          <div className="card">4</div>
          <div className="card">5</div>
          <div className="card">6</div>
          <div className="card">7</div>
          <div className="card">8</div>
          <div className="card">9</div>
        </div>
      </div>
    ),
    tab2: (
      <div className="tab-content">
        <div className="tab-block grid">
          <div className="card">10</div>
          <div className="card">11</div>
          <div className="card">12</div>
          <div className="card">13</div>
          <div className="card">14</div>
          <div className="card">15</div>
          <div className="card">16</div>
          <div className="card">17</div>
          <div className="card">18</div>
        </div>
      </div>
    ),
    tab3: (
      <div className="tab-content">
        <div className="tab-block grid">
          <div className="card">19</div>
          <div className="card">20</div>
          <div className="card">21</div>
          <div className="card">22</div>
          <div className="card">23</div>
          <div className="card">24</div>
          <div className="card">25</div>
          <div className="card">26</div>
          <div className="card">27</div>
        </div>
      </div>
    ),
    tab4: (
      <div className="tab-content">
        <div className="tab-block grid">
          <div className="card">28</div>
          <div className="card">29</div>
          <div className="card">30</div>
          <div className="card">31</div>
          <div className="card">32</div>
          <div className="card">33</div>
          <div className="card">34</div>
          <div className="card">35</div>
          <div className="card">36</div>
        </div>
      </div>
    ),
  };

  useEffect(() => {
    const storedImage = localStorage.getItem("profilePhoto");
    if (storedImage) {
      setProfileImage(storedImage);
    }
  }, []);

  return (
    <>
      <Header />
      <section id="profile-main" className="position">
        <div>
          <div className="bg"></div>
          <div className="profile-block">
            <div className="container flex items-center">
              <div className="profile-pic">
                <img src={profileImage} alt="user-image" className="w-100 h-100" />
                <Link to="/edit-profile" className="edit-icon grid">
                  <img src={editIcon} alt="edit-icon" title="Edit" />
                </Link>
              </div>
              <h2 id="myUserName" className="sec-head username">
                {user ? user.name : ""}
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
                  <p className="des f-16">Post</p>
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
                <button
                  id="shareBtn"
                  className="flex justify-content items-center fw-500"
                >
                  <img src={shareIcon} alt="share icon" className="invert" />
                  <span>Share</span>
                </button>
                <Link
                  to="/edit-profile"
                  id="editBtn"
                  className="flex justify-content items-center fw-500"
                >
                  <img src={editIcon} alt="edit-icon" className="invert" />
                  <span>Edit</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="tab-container">
          <div className="wrapper">
            <div className="tab-wrapper">
              <ul className="tabs">
                {tabs.map((tab) => (
                  <li
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`tab-link ${
                      activeTab === tab.id ? "active" : ""
                    }`}
                  >
                    {tab.label}
                  </li>
                ))}
              </ul>
            </div>

            <div className="content-wrapper">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.2 }}
                >
                  {tabContent[activeTab]}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Profile;
