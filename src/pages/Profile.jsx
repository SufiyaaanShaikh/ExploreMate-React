import React, { useContext, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
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
      <div className="tab-content grid place-items-center">
        <h3 className="font-medium">Followers Count</h3>
        <div className="tab-block w-full mt-4">
          <div className="followers-container  grid">
            {[8,7,6,5,4,3,2,1].map((index)=>(
              
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
          <div className="followers-container  grid">
            {[8,7,6,5,4,3,2,1].map((index)=>(
              
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
      <section id="profile-main" className="position">
        <div>
          <div className="bg"></div>
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
