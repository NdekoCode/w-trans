import React from "react";
import { Link } from "react-router-dom";
import logoGreen from "../assets/images/icons/logo-green.svg";

const Logo = ({ logoStyle }) => {
  return (
    <Link
      to="/"
      className="nav-icon"
      aria-label="visit homepage"
      aria-current="page"
    >
      <img src={logoGreen} alt="Logo Wastes Transformation" />
      <span style={logoStyle}>W-Trans</span>
    </Link>
  );
};

export default Logo;
