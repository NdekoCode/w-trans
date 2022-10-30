import React from "react";
import PageLayout from "../components/PageLayout";

const Services = () => {
  return (
    <PageLayout logoStyle={{ color: "var(--text-title)" }}>
      <h1>Nos services</h1>
      <div className="container px-6 m-auto space-y-8 text-gray-500 md:px-12">
        <div>
          <span className="text-lg font-semibold text-gray-600">
            Main features
          </span>
          <h2 className="mt-4 text-2xl font-bold text-gray-900 md:text-4xl">
            A technology-first approach to payments
            <br className="lg:block" hidden="" /> and finance
          </h2>
        </div>
        <div className="grid mt-16 overflow-hidden border divide-x divide-y rounded-xl sm:grid-cols-2 lg:divide-y-0 lg:grid-cols-3 xl:grid-cols-4">
          <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl reveal-visible">
            <div className="relative p-8 space-y-8 reveal-1">
              <img
                src="https://tailus.io/sources/blocks/stacked/preview/images/avatars/burger.png"
                className="w-10"
                width={512}
                height={512}
                alt="burger illustration"
              />
              <div className="space-y-2">
                <h5 className="text-xl font-medium text-gray-800 transition group-hover:text-yellow-600">
                  First feature
                </h5>
                <p className="text-sm text-gray-600 reveal-visible">
                  Neque Dolor, fugiat non cum doloribus aperiam voluptates
                  nostrum.
                </p>
              </div>
              <a
                href="#"
                className="flex items-center justify-between group-hover:text-yellow-600"
              >
                <span className="text-sm">Read more</span>
                <span className="text-2xl transition duration-300 -translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0">
                  →
                </span>
              </a>
            </div>
          </div>
          <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl reveal-visible">
            <div className="relative p-8 space-y-8 reveal-1">
              <img
                src="https://tailus.io/sources/blocks/stacked/preview/images/avatars/trowel.png"
                className="w-10"
                width={512}
                height={512}
                alt="burger illustration"
              />
              <div className="space-y-2">
                <h5 className="text-xl font-medium text-gray-800 transition group-hover:text-yellow-600">
                  Second feature
                </h5>
                <p className="text-sm text-gray-600 reveal-visible">
                  Neque Dolor, fugiat non cum doloribus aperiam voluptates
                  nostrum.
                </p>
              </div>
              <a
                href="#"
                className="flex items-center justify-between group-hover:text-yellow-600"
              >
                <span className="text-sm">Read more</span>
                <span className="text-2xl transition duration-300 -translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0">
                  →
                </span>
              </a>
            </div>
          </div>
          <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl reveal-visible">
            <div className="relative p-8 space-y-8 reveal-1">
              <img
                src="https://tailus.io/sources/blocks/stacked/preview/images/avatars/package-delivery.png"
                className="w-10"
                width={512}
                height={512}
                alt="burger illustration"
              />
              <div className="space-y-2">
                <h5 className="text-xl font-medium text-gray-800 transition group-hover:text-yellow-600">
                  Third feature
                </h5>
                <p className="text-sm text-gray-600 reveal-visible">
                  Neque Dolor, fugiat non cum doloribus aperiam voluptates
                  nostrum.
                </p>
              </div>
              <a
                href="#"
                className="flex items-center justify-between group-hover:text-yellow-600"
              >
                <span className="text-sm">Read more</span>
                <span className="text-2xl transition duration-300 -translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0">
                  →
                </span>
              </a>
            </div>
          </div>
          <div className="relative group bg-gray-100 transition hover:z-[1] hover:shadow-2xl lg:hidden xl:block reveal-visible">
            <div className="relative p-8 space-y-8 transition duration-300 border-dashed rounded-lg group-hover:bg-white group-hover:border group-hover:scale-90 reveal-1">
              <img
                src="https://tailus.io/sources/blocks/stacked/preview/images/avatars/metal.png"
                className="w-10"
                width={512}
                height={512}
                alt="burger illustration"
              />
              <div className="space-y-2">
                <h5 className="text-xl font-medium text-gray-800 transition group-hover:text-yellow-600">
                  More features
                </h5>
                <p className="text-sm text-gray-600 reveal-visible">
                  Neque Dolor, fugiat non cum doloribus aperiam voluptates
                  nostrum.
                </p>
              </div>
              <a
                href="#"
                className="flex items-center justify-between group-hover:text-yellow-600"
              >
                <span className="text-sm">Read more</span>
                <span className="text-2xl transition duration-300 -translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <section className="container pt-16 mx-auto bg-white max-w-8xl">
        <div>
          <div role="contentinfo" className="flex flex-col items-center px-4">
            <p
              tabIndex={0}
              className="text-sm leading-4 text-center text-gray-600 uppercase focus:outline-none reveal-visible"
            >
              in few easy steps
            </p>
            <hh1
              tabIndex={0}
              className="pt-4 text-4xl font-extrabold leading-10 text-center text-gray-800 focus:outline-none lg:text-4xl lg:w-5/12 md:w-9/12"
            >
              Create Beautiful Landing Pages &amp; Web Apps in a Jiffy
            </hh1>
          </div>
          <div
            tabIndex={0}
            aria-label="group of cards"
            className="flex flex-wrap justify-center gap-10 px-4 mt-20 focus:outline-none"
          >
            <div
              tabIndex={0}
              aria-label="card 1"
              className="flex pb-20 focus:outline-none sm:w-full md:w-5/12"
            >
              <div className="relative w-20 h-20 mr-5">
                <div className="absolute top-0 right-0 w-16 h-16 mt-2 mr-1 bg-indigo-100 rounded" />
                <div className="absolute bottom-0 left-0 flex items-center justify-center w-16 h-16 mt-2 mr-3 text-white bg-indigo-700 rounded">
                  <img
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG1.svg"
                    alt="drawer"
                  />
                </div>
              </div>
              <div className="w-10/12">
                <h2
                  tabIndex={0}
                  className="text-lg font-bold leading-tight text-gray-800 focus:outline-none"
                >
                  Ready to use components
                </h2>
                <p
                  tabIndex={0}
                  className="pt-2 text-base leading-normal text-gray-600 focus:outline-none reveal-visible"
                >
                  It provides a very simple start, no need to write a lot of
                  code, you just import it and start the primitive components
                  and create the ones you need.
                </p>
              </div>
            </div>
            <div
              tabIndex={0}
              aria-label="card 2"
              className="flex pb-20 focus:outline-none sm:w-full md:w-5/12"
            >
              <div className="relative w-20 h-20 mr-5">
                <div className="absolute top-0 right-0 w-16 h-16 mt-2 mr-1 bg-indigo-100 rounded" />
                <div className="absolute bottom-0 left-0 flex items-center justify-center w-16 h-16 mt-2 mr-3 text-white bg-indigo-700 rounded">
                  <img
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG2.svg"
                    alt="check"
                  />
                </div>
              </div>
              <div className="w-10/12">
                <h2
                  tabIndex={0}
                  className="text-lg font-semibold leading-tight text-gray-800 focus:outline-none"
                >
                  Hight Quality UI you can reply on
                </h2>
                <p
                  tabIndex={0}
                  className="pt-2 text-base leading-normal text-gray-600 focus:outline-none reveal-visible"
                >
                  Modify the visual appearance of your site – including colors,
                  fonts, margins and other style-related properties – with a
                  sophisticated style.
                </p>
              </div>
            </div>
            <div
              tabIndex={0}
              aria-label="card 3"
              className="flex pb-20 focus:outline-none sm:w-full md:w-5/12"
            >
              <div className="relative w-20 h-20 mr-5">
                <div className="absolute top-0 right-0 w-16 h-16 mt-2 mr-1 bg-indigo-100 rounded" />
                <div className="absolute bottom-0 left-0 flex items-center justify-center w-16 h-16 mt-2 mr-3 text-white bg-indigo-700 rounded">
                  <img
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG3.svg"
                    alt="html tag"
                  />
                </div>
              </div>
              <div className="w-10/12">
                <h2
                  tabIndex={0}
                  className="text-lg font-semibold leading-tight text-gray-800 focus:outline-none"
                >
                  Coded by Developers for Developers
                </h2>
                <p
                  tabIndex={0}
                  className="pt-2 text-base leading-normal text-gray-600 focus:outline-none reveal-visible"
                >
                  Instead of just giving you the tools to create your own site,
                  they offer you a list of themes you can choose from. Thus a
                  handy product.
                </p>
              </div>
            </div>
            <div
              tabIndex={0}
              aria-label="card 4"
              className="flex pb-20 focus:outline-none sm:w-full md:w-5/12"
            >
              <div className="relative w-20 h-20 mr-5">
                <div className="absolute top-0 right-0 w-16 h-16 mt-2 mr-1 bg-indigo-100 rounded" />
                <div className="absolute bottom-0 left-0 flex items-center justify-center w-16 h-16 mt-2 mr-3 text-white bg-indigo-700 rounded">
                  <img
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/icon_and_text-SVG4.svg"
                    alt="monitor"
                  />
                </div>
              </div>
              <div className="w-10/12">
                <h2
                  tabIndex={0}
                  className="text-lg font-semibold leading-tight text-gray-800 focus:outline-none"
                >
                  The Last UI kit you’ll ever need
                </h2>
                <p
                  tabIndex={0}
                  className="pt-2 text-base leading-normal text-gray-600 focus:outline-none reveal-visible"
                >
                  We have chosen the bright color palettes that arouse the only
                  positive emotions. The kit that simply assures to be loved by
                  everyone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Services;
