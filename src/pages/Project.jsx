import React from "react";
import Hero from "../components/Hero";
import PageLayout from "../components/PageLayout";

const Project = () => {
  return (
    <PageLayout>
      <Hero />
      <div className="bg-gray-100">
        <div className="container flex flex-col items-center py-12 mx-auto sm:py-24">
          <div className="flex-col items-center justify-center w-11/12 mb-5 sm:w-2/3 lg:flex sm:mb-10">
            <h1>Nos projets</h1>
            <p className="mt-5 text-sm font-normal text-center text-gray-400 sm:mt-10 lg:w-10/12 sm:text-lg reveal-visible">
              A professonal website drives sales. Create a beautiful website to
              impress and engage new customers and establish your business
              online{"{"}" "{"}"}
            </p>
          </div>
          <div className="flex items-center justify-center">
            <button className="px-4 py-2 text-sm text-white transition duration-150 ease-in-out bg-indigo-700 border border-indigo-700 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 hover:bg-indigo-600 lg:text-xl lg:font-bold sm:px-10 sm:py-4">
              Get Started
            </button>
            <button className="px-4 py-2 ml-4 text-sm text-indigo-700 transition duration-150 ease-in-out bg-transparent border border-indigo-700 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 hover:border-indigo-600 lg:text-xl lg:font-bold hover:text-indigo-600 sm:px-10 sm:py-4">
              Live Demo
            </button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Project;
