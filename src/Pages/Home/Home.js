import React from "react";
import BannerImg from "../BannerImg/BannerImg";
import OurStyle from "../OurStyle/OurStyle";
import TopBanner from "../TopBanner/TopBanner";
import Conslatency from "./../Conslatency/Conslatency";

const Home = () => {
  return (
    <div>
      <TopBanner />
      <BannerImg />
      <Conslatency />
      <OurStyle />
    </div>
  );
};

export default Home;
