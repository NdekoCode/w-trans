import React from "react";
import Loader from "./Loader";
import "../assets/scss/components/PageLoading.scss";
import "../assets/scss/components/Loader.scss";
const LoadingPage = () => {
  return (
    <div className="page-loader">
      <div className="loader-content">
        <Loader />
      </div>
    </div>
  );
};

export default LoadingPage;
