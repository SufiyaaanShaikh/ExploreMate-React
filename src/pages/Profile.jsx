import React, { useContext, useState } from "react";
import { FaArrowRight, FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import ProfileHeader from "../components/Profile/ProfileHeader";
import Tabs from "../components/Profile/Tabs";
import TabContent from "../components/Profile/TabContent";
import Footer from "../components/Footer";
import Header from "../components/Header";
import userProfileImg from "../images/user.webp";

function Profile() {
  const { user } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState("tab1");

  const tabs = [
    { id: "tab1", label: "Trip" },
    { id: "tab2", label: "Followers" },
    { id: "tab3", label: "Following" },
    { id: "tab4", label: "Reviews" },
  ];
  const trips = [
    {
      id: 1,
      destination: "Manali",
      duration: "5 Days",
      date: "2025-03-10",
      type: "Adventure",
    },
    {
      id: 2,
      destination: "Goa",
      duration: "3 Days",
      date: "2025-04-15",
      type: "Beach",
    },
    {
      id: 3,
      destination: "Leh-Ladakh",
      duration: "7 Days",
      date: "2025-06-01",
      type: "Road Trip",
    },
    {
      id: 4,
      destination: "Shimla",
      duration: "4 Days",
      date: "2025-05-20",
      type: "Hill Station",
    },
    {
      id: 5,
      destination: "Rishikesh",
      duration: "2 Days",
      date: "2025-07-08",
      type: "Spiritual",
    },
  ];

  const tabContent = {
    tab1: (
      <div className="tab-content p-4">
        <h3 className="text-lg font-semibold mb-4 text-center">Your Trips</h3>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          <div className="bg-white shadow-sm p-4 rounded-xl h-36 border grid place-content-center border-solid border-gray-100 cursor-pointer">
            <FaPlus className="text-3xl text-zinc-700  mb-4" />
          </div>
          {trips.map((trip) => (
            <div
              key={trip.id}
              className="bg-white shadow-sm p-4 rounded-xl border  border-solid border-gray-100"
            >
              <h4 className="text-xl font-semibold">{trip.destination}</h4>
              <p className="text-sm text-gray-500">Duration: {trip.duration}</p>
              <p className="text-sm text-gray-500">Date: {trip.date}</p>
              <p className="text-sm text-gray-500">Type: {trip.type}</p>
              <button className="mt-3 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition duration-300">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    ),
    tab2: (
      <div className="tab-content grid place-items-center">
        <h3 className="font-medium">Followers Count</h3>
        <div className="tab-block w-full mt-4">
          <div className="followers-container  flex flex-wrap justify-center">
            {[8, 7, 6, 5, 4, 3, 2, 1].map((index) => (
              <div className="follower-card  border-gray-200 border-solid p-4 border  rounded-lg grid gap-4 w-full">
                <div className="flw-heading items-center flex gap-2">
                  <div className="img-block h-7 w-7 ">
                    <img
                      src={userProfileImg}
                      className="h-full w-full object-cover rounded-full"
                      alt="user image"
                    />
                  </div>
                  <div className="flw-name flex-grow">
                    <h3 className="text-sm font-medium">John Doe</h3>
                    <p className="trip text-xs text-gray-500">4 trips</p>
                  </div>
                  <div className="viewPf group cursor-pointer bg-black  h-7 w-7 grid place-items-center rounded-full">
                    <FaArrowRight className="invert group-hover:rotate-0 ease-in-out duration-300 -rotate-45" />
                  </div>
                </div>
                <div className="flw flex justify-between ">
                  <p className="text-xs text-gray-700">2 Followers</p>
                  <p className="text-xs text-gray-700">3 Following</p>
                </div>
                <button className="w-full border border-solid rounded-3xl text-sm font-medium p-2 bg-black text-white hover:bg-white hover:text-black ease-in-out duration-500 ">
                  Follow
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    tab3: (
      <div className="tab-content grid place-items-center">
        <h3 className="font-medium">Following Count</h3>
        <div className="tab-block w-full mt-4">
          <div className="followers-container  flex flex-wrap justify-center">
            {[8, 7, 6, 5, 4, 3, 2, 1].map((index) => (
              <div className="follower-card  border-gray-200 border-solid p-4 border rounded-lg grid gap-4 w-full">
                <div className="flw-heading items-center flex gap-2">
                  <div className="img-block h-7 w-7 ">
                    <img
                      src={userProfileImg}
                      className="h-full w-full object-cover rounded-full"
                      alt="user image"
                    />
                  </div>
                  <div className="flw-name flex-grow">
                    <h3 className="text-sm font-medium">John Doe</h3>
                    <p className="trip text-xs text-gray-500">4 trips</p>
                  </div>
                  <div className="viewPf group cursor-pointer bg-black  h-7 w-7 grid place-items-center rounded-full">
                    <FaArrowRight className="invert group-hover:rotate-0 ease-in-out duration-300 -rotate-45" />
                  </div>
                </div>
                <div className="flw flex justify-between ">
                  <p className="text-xs text-gray-700">2 Followers</p>
                  <p className="text-xs text-gray-700">3 Following</p>
                </div>
                <button className="w-full border border-solid rounded-3xl text-sm font-medium p-2 hover:bg-black hover:text-white ease-in-out duration-500 ">
                  Unfollow
                </button>
              </div>
            ))}
          </div>
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

  return (
    <>
      <Header />
      <section id="profile-main" className="position pt-44">
        <div>
          {/* <div className="bg"></div> */}
          <ProfileHeader user={user} />
          <div className="profile-block">
            <div className="tab-container pt-5">
              <Tabs
                tabs={tabs}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
              <TabContent activeTab={activeTab} tabContent={tabContent} />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Profile;
