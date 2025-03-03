import React from "react";
// import { Link } from "react-router-dom";
import "../css/App.css";
import "../css/utility.css";
import Header from "../components/Header";
import Banner from "../components/Home/Banner";
import MainHow from "../components/Home/MainHow";
import MainReview from "../components/Home/MainReview";
import MainFeed from "../components/Home/MainFeed";
import Footer from "../components/Footer";
import Drag from "../components/Drag"

function Home() {
  return (
    <>
      <Header />
      <Banner />
      <MainHow />
      <MainReview />
      {/* <Drag/> */}
      <MainFeed/>
      <Footer/>
    </>
  );
}

export default Home;
