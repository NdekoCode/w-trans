import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const PageLayout = ({
  children,
  header,
  logoStyle = { color: "var(--white);" },
}) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default PageLayout;
