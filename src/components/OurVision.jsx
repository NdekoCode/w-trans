import React from "react";

const OurVision = () => {
  return (
    <section className="section" id="more">
      <div className="container flex flex-col items-center py-12 mx-auto sm:py-24">
        <div className="flex-col items-center justify-center w-11/12 mb-5 sm:w-2/3 lg:flex sm:mb-10">
          <h1 className="text-2xl font-black leading-7 text-center text-gray-800 title sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl md:leading-10">
            Consultance dans des entreprises
            <span className="text-white">séminaires et master classNamee </span>
            payants
          </h1>
          <p className="mt-5 text-sm font-normal text-center text-gray-200 sm:mt-10 lg:w-10/12 sm:text-lg reveal-visible">
            En mettant en relation des participants du monde entier avec les
            meilleurs formateurs, Congo First Choice aide les personnes à
            atteindre leurs objectifs commerciaux et à réaliser leurs rêves.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <a className="px-4 py-2 text-sm text-white transition duration-150 ease-in-out bg-indigo-700 border border-indigo-700 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 hover:bg-indigo-600 lg:text-xl lg:font-bold sm:px-10 sm:py-4">
            Commencer avec nous
          </a>
          <button className="px-4 py-2 ml-4 text-sm text-indigo-700 transition duration-150 ease-in-out bg-transparent border border-indigo-700 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 hover:border-indigo-600 lg:text-xl lg:font-bold hover:text-indigo-600 sm:px-10 sm:py-4">
            Devenir un commercial
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurVision;
