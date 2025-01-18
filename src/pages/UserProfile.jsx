import React, { useContext } from "react";
import userIcon from "../images/user.webp";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import usersData from "../Data/usersData";
import toast from "react-hot-toast";
import AuthContext from "../context/AuthContext";

function UserProfile() {
  const location = useLocation();
  const currentId = location.pathname.split("/")[2];
  const currentData = usersData.find((v) => v.id == currentId);

  const { toggleFollow, following, user } = useContext(AuthContext);

  const handleFollow = () => {
      // Check if user is logged in
      if (!user) {
        toast.error("Please create an account to follow.");
        return;
      }
    if (currentData) {
      const isNowFollowing = toggleFollow(currentId);
      const message = isNowFollowing
        ? `You are now following ${currentData.name}`
        : `You unfollowed ${currentData.name}`;
      toast(message, { icon: isNowFollowing ? "👏" : "❌" });
    }
  };

  if (!currentData) {
    return <div>User not found</div>;
  }

  const isFollowing = following[currentId] || false;

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
                {currentData.name}
              </h2>
              <h3 id="profileCity" className="f-16 para-c city">
                {currentData.address.city}
              </h3>
              <p className="profil-para para-f para-c">{currentData.bio}</p>
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
                <button
                  onClick={handleFollow}
                  id="followBtn"
                  className={`followBtn ${
                    isFollowing
                      ? "bg-transparent text-zinc-800"
                      : "bg-zinc-900 text-white"
                  }`}
                >
                  {isFollowing ? "Unfollow" : "Follow"}
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
