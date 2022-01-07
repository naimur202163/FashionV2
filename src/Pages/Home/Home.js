import React from "react";
import BannerImg from "../BannerImg/BannerImg";
import Flag from "../Flag/Flag";
import Footer from "../Footer/Footer";
import Lorem from "../Lorem/Lorem";
import OurStyle from "../OurStyle/OurStyle";
import PercentBanner from "../PercentBanner/PercentBanner";
import Testimonials from "../Testimonials/Testimonials";
import TopBanner from "../TopBanner/TopBanner";
import Conslatency from "./../Conslatency/Conslatency";

const Home = () => {
  return (
    <div>
      <TopBanner />
      <PercentBanner />
      <BannerImg />
      <Conslatency />
      <Flag />
      <OurStyle />
      <Testimonials />
      <Lorem />
      <Footer />
    </div>
  );
};

export default Home;
