import React from "react";
import Footer from "../components/Footer";
import HeaderHome from "../components/HeaderHome";
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
      </main>
      <Footer />
    </>
  );
};

export default Home;
