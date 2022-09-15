import React from "react";
import Footer from "../components/Footer";
import HeaderHome from "../components/HeaderHome";
import OurValues from "../components/OurValues";

const Home = () => {
  return (
    <>
      <HeaderHome />
      <main>
        <OurValues />
      </main>
      <Footer />
    </>
  );
};

export default Home;
