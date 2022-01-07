import React from "react";
import BannerImg from "../BannerImg/BannerImg";
import Lorem from "../Lorem/Lorem";
import OurStyle from "../OurStyle/OurStyle";
import Testimonials from "../Testimonials/Testimonials";
import TopBanner from "../TopBanner/TopBanner";
import Conslatency from "./../Conslatency/Conslatency";

const Home = () => {
  return (
    <div>
      <TopBanner />
      <BannerImg />
      <Conslatency />
      <OurStyle />
      <Testimonials />
      <Lorem />
    </div>
  );
};

export default Home;
