import React from "react";
import BlogCards from "../components/BlogCards";
import Footer from "../components/Footer";
import HeaderHome from "../components/HeaderHome";
import OurProject from "../components/OurProject";
import OurServices from "../components/OurServices";
import OurValues from "../components/OurValues";
import OurVision from "../components/OurVision";

const Home = () => {
  return (
    <>
      <HeaderHome />
      <main>
        <OurValues />
        <OurServices />
        <OurVision />
        <OurProject />
        <BlogCards />
      </main>
      <Footer />
    </>
  );
};

export default Home;
