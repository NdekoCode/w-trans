import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const PageLayout = ({ children, header }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default PageLayout;
