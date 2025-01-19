import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import userIcon from "../../images/user.webp";
import editIcon from "../../images/edit-icon.svg";
import shareIcon from "../../images/share.svg";

function ProfileHeader({ user }) {
  const [profileImage, setProfileImage] = useState(userIcon);

  useEffect(() => {
    const storedImage = localStorage.getItem("profilePhoto");
    if (storedImage) {
      setProfileImage(storedImage);
    }
  }, []);

  return (
    <div className="profile-header bg-white">
      <div className="container flex items-center">
        <div className="profile-pic">
          <img src={profileImage} alt="user-image" className="w-100 h-100" />
          <Link to="/edit-profile" className="edit-icon grid">
            <img src={editIcon} alt="edit-icon" title="Edit" />
          </Link>
        </div>
        <h2 className="sec-head username">{user ? user.name : ""}</h2>
        <h3 className="f-16 para-c city">Turkey, Ankara</h3>
        <p className="profil-para para-f para-c">
          I’m a web designer, working with Figma, Photoshop, and Illustrator
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
          <button id="shareBtn" className="flex items-center fw-500">
            <img src={shareIcon} alt="share icon" className="invert" />
            <span>Share</span>
          </button>
          <Link to="/edit-profile" id="editBtn" className="flex items-center fw-500">
            <img src={editIcon} alt="edit-icon" className="invert" />
            <span>Edit</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;
