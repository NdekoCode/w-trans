import React from "react";
import Navbar from "./Navbar";

const Header = ({ className = "" }) => {
  return (
    <header className={className}>
      <Navbar />
    </header>
  );
};

export default Header;
