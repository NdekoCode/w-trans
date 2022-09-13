import React from "react";

const Logo = () => {
  return (
    <a
      href="#"
      className="nav-icon"
      aria-label="visit homepage"
      aria-current="page"
    >
      <img src={logoGreen} alt="Logo Wastes Transformation" />
      <span>W-Trans</span>
    </a>
  );
};

export default Logo;
