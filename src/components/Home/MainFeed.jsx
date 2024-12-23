import React from "react";
import SectionHeading from "./SectionHeading";


const images = require.context("../../images", false, /\.(png|jpe?g|svg)$/);

const userData = [
  {
    id: 1,
    username: "John Doe",
    city: "Mumbai to Nainital",
    timeAgo: "2 days ago",
    group: "Duo",
    imgSrc: "user.png",
    cityIcon: "destiniaion.svg",
    calendarIcon: "calendar.svg",
    groupIcon: "group.svg",
  },
  {
    id: 2,
    username: "Jane Smith",
    city: "Delhi to Agra",
    timeAgo: "5 days ago",
    group: "Solo",
    imgSrc: "user.png",
    cityIcon: "destiniaion.svg",
    calendarIcon: "calendar.svg",
    groupIcon: "group.svg",
  },
  {
    id: 3,
    username: "Alex Johnson",
    city: "Kolkata to Darjeeling",
    timeAgo: "1 week ago",
    group: "Group",
    imgSrc: "user.png",
    cityIcon: "destiniaion.svg",
    calendarIcon: "calendar.svg",
    groupIcon: "group.svg",
  },
  {
    id: 4,
    username: "Maria Garcia",
    city: "Chennai to Pondicherry",
    timeAgo: "3 days ago",
    group: "Couple",
    imgSrc: "user.png",
    cityIcon: "destiniaion.svg",
    calendarIcon: "calendar.svg",
    groupIcon: "group.svg",
  },
];

function MainFeed() {
  return (
    <>
      <section id="main-feed" className="vh-70 position">
        <div className="sec vh-70 pad flex justify-content">
          <SectionHeading
            secHead="Travel Feed"
            secSubHead="Find a travel buddy"
          />
          <Cards userData={userData} />
          <div className="view-all text-center">
            <a href="feed.html" className="btn fw-500 para-f">
              View All
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default MainFeed;

const Cards = ({ userData }) => {
  return (
    <>
      <div
        id="feedContainer"
        className="container grid grid-4 main-feedContainer"
      >
        {userData.map((user) => (
          <div className="card grid" key={user.id}>
            <div className="head-block flex items-center">
              <div className="img-block">
                <img
                  src={images(`./${user.imgSrc}`)}
                  alt="user-img"
                  className="w-100 h-100"
                />
              </div>
              <button className="followBtn">Follow</button>
            </div>
            <div className="content">
              <div className="title">
                <h3 className="fw-500">{user.username}</h3>
              </div>
              <div className="detail flex items-center">
                <img src={images(`./${user.cityIcon}`)} alt="locals" />
                <p className="para-c para-f">{user.city}</p>
              </div>
              <div className="detail flex items-center">
                <img src={images(`./${user.calendarIcon}`)} alt="calendar" />
                <p className="para-c para-f">{user.timeAgo}</p>
              </div>
              <div className="detail flex items-center">
                <img src={images(`./${user.groupIcon}`)} alt="group" />
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
      </div>
    </>
  );
};
