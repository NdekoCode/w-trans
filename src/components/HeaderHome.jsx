import React from "react";
import Navbar from "./Navbar";
import playBtn from "../assets/images/icons/play.svg";
import Hero from "./Hero";

const HeaderHome = () => {
  return (
    <header className="header topbar">
      <Navbar />
      <Hero />
    </header>
  );
};

export default HeaderHome;
