import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import users from "../../Data/usersData";
import imgSrcUser from "../../images/user.png";
import cityIcon from "../../images/destiniaion.svg";
import calendarIcon from "../../images/calendar.svg";
import groupIcon from "../../images/group.svg";

function FeedCards({  }) {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const [displayedUsers, setDisplayedUsers] = useState([]);

  useEffect(() => {
    const usersToDisplay = isHomePage ? users.slice(0, 4) : users;
    setDisplayedUsers(usersToDisplay);
  }, [isHomePage]);
  return (
    <>
      {displayedUsers.map((user) => (
        <div className="card grid" key={user.id}>
          <div className="head-block flex items-center">
            <div className="img-block">
              <img src={imgSrcUser} alt="user-img" className="w-100 h-100" />
            </div>
            <button className="followBtn">Follow</button>
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
              <button className="viewProfileBtn flex items-center justify-content">
                View Profile
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default FeedCards;
