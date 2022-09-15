import React from "react";
import Navbar from "./Navbar";
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
