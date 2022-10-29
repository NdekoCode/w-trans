import React from "react";
const Hero = ({ BlockLeft, BlockRight, BlockCenter = "" }) => {
  const BlockDirection = (
    <>
      {BlockLeft}
      {BlockRight}
    </>
  );

  return (
    <div className="hero">
      <div className="container block-content">
        {BlockCenter ? BlockCenter : BlockDirection}
      </div>
    </div>
  );
};

export default Hero;
