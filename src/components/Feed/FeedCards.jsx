import React, { useContext, useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import imgSrcUser from "../../images/user.png";
import cityIcon from "../../images/destiniaion.svg";
import calendarIcon from "../../images/calendar.svg";
import groupIcon from "../../images/group.svg";
import AuthContext from "../../context/AuthContext";
import toast from "react-hot-toast";
import usersData from "../../Data/usersData";
import { motion } from "framer-motion";

function FeedCards({ filteredDestinations }) {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const [displayedUsers, setDisplayedUsers] = useState([]); // Users to display
  const { following, toggleFollow, user } = useContext(AuthContext); // Access context for follow state and logic

  useEffect(() => {
    // Check if filteredDestinations exists, if not fall back to usersData
    const usersToDisplay =
      filteredDestinations && filteredDestinations.length > 0
        ? filteredDestinations
        : isHomePage
        ? usersData.slice(0, 4) // Display first 4 users on home page
        : usersData;

    setDisplayedUsers(usersToDisplay); // Update displayed users
  }, [isHomePage, filteredDestinations]); // Update when filteredDestinations changes

  const handleFollow = (user) => {
    const isNowFollowing = toggleFollow(user.id);
    console.log(
      `User with ID ${user.id} is now ${
        isNowFollowing ? "followed" : "unfollowed"
      }`
    );
    const message = isNowFollowing
      ? `You are now following ${user.name}`
      : `You unfollowed ${user.name}`;
    toast(message, { icon: isNowFollowing ? "👏" : "❌" });
  };

  return (
    <>
      {displayedUsers.map((user, index) => {
        const isFollowing = following[user.id] || false; // Check follow state for this user

        return (
          <motion.div
            className="card grid"
            key={user.id}
            initial={{ opacity: 0, y: 20 }} // Cards slide in from below
            animate={{ opacity: 1, y: 0 }} // Cards slide into place
            exit={{ opacity: 0, y: -20 }} // Cards fade out and slide out
            transition={{
              duration: 0.6,
              delay: index * 0.1, // Stagger animation for each card
              type: "spring",
              stiffness: 120,
              damping: 25,
            }}
          >
            <div className="head-block flex items-center">
              <div className="img-block">
                <img src={imgSrcUser} alt="user-img" className="w-100 h-100" />
              </div>
              <button
                className={`followBtn ${
                  isFollowing
                    ? "bg-transparent text-zinc-800"
                    : "bg-zinc-900 text-white"
                }`}
                onClick={() => {
                  if (user) {
                    handleFollow(user);
                  } else {
                    toast.error("Please create an account to follow.");
                  }
                }}
              >
                {isFollowing ? "Unfollow" : "Follow"}
              </button>
            </div>
            <div className="content">
              <div className="title">
                <h3 className="fw-500">{user.name}</h3>
              </div>
              <div className="detail flex items-center">
                <img src={cityIcon} alt="locals" />
                <p className="para-c para-f">{user.address.city}</p>
              </div>
              <div className="detail flex items-center">
                <img src={calendarIcon} alt="calendar" />
                <p className="para-c para-f">{user.timeAgo}</p>
              </div>
              <div className="detail flex items-center">
                <img src={groupIcon} alt="group" />
                <p className="para-c para-f">{user.group}</p>
              </div>
              <div className="view">
                <Link
                  to={`/feed/${user.id}`}
                  className="viewProfileBtn flex items-center justify-content "
                >
                  View Profile
                </Link>
              </div>
            </div>
          </motion.div>
        );
      })}
    </>
  );
}

export default FeedCards;
