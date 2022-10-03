import React from "react";
import { Link } from "react-router-dom";

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

        <div class="flex flex-wrap justify-center my-12">
          <div class="w-full lg:w-3/12 px-4 text-center">
            <div class="text-primary-dark p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  d="M16 0H144c5.3 0 10.3 2.7 13.3 7.1l81.1 121.6c-49.5 4.1-94 25.6-127.6 58.3L2.7 24.9C-.6 20-.9 13.7 1.9 8.5S10.1 0 16 0zM509.3 24.9L401.2 187.1c-33.5-32.7-78.1-54.2-127.6-58.3L354.7 7.1c3-4.5 8-7.1 13.3-7.1H496c5.9 0 11.3 3.2 14.1 8.5s2.5 11.5-.8 16.4zM432 336c0 97.2-78.8 176-176 176s-176-78.8-176-176s78.8-176 176-176s176 78.8 176 176zM264.4 241.1c-3.4-7-13.3-7-16.8 0l-22.4 45.4c-1.4 2.8-4 4.7-7 5.1L168 298.9c-7.7 1.1-10.7 10.5-5.2 16l36.3 35.4c2.2 2.2 3.2 5.2 2.7 8.3l-8.6 49.9c-1.3 7.6 6.7 13.5 13.6 9.9l44.8-23.6c2.7-1.4 6-1.4 8.7 0l44.8 23.6c6.9 3.6 14.9-2.2 13.6-9.9l-8.6-49.9c-.5-3 .5-6.1 2.7-8.3l36.3-35.4c5.6-5.4 2.5-14.8-5.2-16l-50.1-7.3c-3-.4-5.7-2.4-7-5.1l-22.4-45.4z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h5 class="text-xl mt-5 font-semibold text-primary-dark">
              Excellents services de recyclage
            </h5>
            <p class="mt-2 mb-4 text-blueGray-400">
              Tout comprendre sur le recyclage du plastique, papier, carton,
              verre, aluminium, acier. <Link to="/">W-trans</Link> t'explique le
              parcours des déchets.
            </p>
          </div>
          <div class="w-full lg:w-3/12 px-4 text-center">
            <div class="text-primary-dark p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path
                  d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm64 192c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V256c0-17.7 14.3-32 32-32zm64-64c0-17.7 14.3-32 32-32s32 14.3 32 32V352c0 17.7-14.3 32-32 32s-32-14.3-32-32V160zM320 288c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V320c0-17.7 14.3-32 32-32z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h5 class="text-xl mt-5 font-semibold text-primary-dark">
              Marché des pavés recycler
            </h5>
            <p class="mt-2 mb-4 text-blueGray-400">
              Nous mettons en place le paves fabriqués à base de déchets
              plastique pour réduire la pollution de l’environnement.
            </p>
          </div>
          <div class="w-full lg:w-3/12 px-4 text-center">
            <div class="text-primary-dark p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path
                  d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h5 class="text-xl mt-5 font-semibold text-primary-dark ">
              Heure de lancement de sensibilisations
            </h5>
            <p class="mt-2 mb-4 text-blueGray-400">
              Au-delà de Goma, on découvre que les principes de gestion et de
              recyclage des déchets sont méconnus donc il faut une
              sensibilisation.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <a className="px-4 py-2 mx-1 my-2 text-sm  transition duration-150 ease-in-out btn btn-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2  lg:text-xl lg:font-bold sm:px-10 sm:py-4">
            Commencer avec nous
          </a>
          <a className="px-4 py-2 text-sm  transition duration-150 ease-in-out btn btn-primary-outline focus:outline-none focus:ring-2 focus:ring-offset-2  lg:text-xl lg:font-bold sm:px-10 sm:py-4 mx-1 my-2">
            Participer au changement
          </a>
        </div>
      </div>
    </section>
  );
};

export default OurVision;
