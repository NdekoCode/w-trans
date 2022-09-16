import React from "react";
import Footer from "../components/Footer";
import HeaderHome from "../components/HeaderHome";
import OurServices from "../components/OurServices";
import OurValues from "../components/OurValues";

const Home = () => {
  return (
    <>
      <HeaderHome />
      <main>
        <OurValues />
        <OurServices />
      </main>
      <Footer />
    </>
  );
};

export default Home;
