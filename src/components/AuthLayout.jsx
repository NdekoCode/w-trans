import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const AuthLayout = ({ children, header }) => {
  return <main>{children}</main>;
};

export default AuthLayout;
