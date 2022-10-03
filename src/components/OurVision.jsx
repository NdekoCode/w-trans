import React from "react";

const OurVision = () => {
  return (
    <section className="section" id="more">
      <div className="container flex flex-col items-center py-12 mx-auto sm:py-24">
        <div className="flex-col items-center justify-center w-11/12 mb-5 sm:w-2/3 lg:flex sm:mb-10">
          <h1 className="text-2xl font-black leading-7 text-center text-gray-800 title sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl md:leading-10">
            Impact de W-Trans SARL sur la société
          </h1>
          <p className="mt-5 text-sm font-normal text-center text-gray-500 sm:mt-10 lg:w-10/12 sm:text-lg reveal-visible">
            Grâce aux activités de participation volontaire que nous organisons,
            nous amenons ma société à prendre des dispositions responsables par
            rapport à ma gestion de déchets, nous assainissons ensemble avec la
            communauté locale les endroits le plus englouti de déchets de la
            ville
          </p>
        </div>
        <div className="flex items-center justify-center">
          <a className="px-4 py-2 mx-1 my-2 text-sm  transition duration-150 ease-in-out btn btn-primary focus:outline-none focus:ring-2 focus:ring-offset-2  lg:text-xl lg:font-bold sm:px-10 sm:py-4">
            Commencer avec nous
          </a>
          <button className="px-4 py-2 text-sm  transition duration-150 ease-in-out btn btn-primary-outline focus:outline-none focus:ring-2 focus:ring-offset-2  lg:text-xl lg:font-bold sm:px-10 sm:py-4 mx-1 my-2">
            Participer au changement
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurVision;
