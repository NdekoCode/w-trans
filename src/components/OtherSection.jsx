import React from "react";

const OtherSection = () => {
  return (
    <section>
      <section className="text-blueGray-700 bg-white mt-20">
        <div className="container flex flex-col items-center px-5 py-16 mx-auto md:flex-row lg:px-28">
          <div className="flex flex-col items-start mb-16 text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:mb-0">
            <h2 className="mb-8 text-xs font-semibold tracking-widest text-black uppercase title-font">
              {" "}
              Your tagline{" "}
            </h2>
            <h1 className="mb-8 text-2xl font-black tracking-tighter text-black md:text-5xl title-font">
              {" "}
              Medium length display headline.{" "}
            </h1>
            <p className="mb-8 text-base leading-relaxed text-left text-blueGray-600 ">
              {" "}
              Deploy your mvp in minutes, not days. WT offers you a a wide
              selection swapable sections for your landing page.{" "}
            </p>
            <div className="flex flex-col justify-center lg:flex-row">
              <button className="flex items-center px-6 py-2 mt-auto font-semibold text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-lg hover:bg-blue-700 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
                {" "}
                Show me{" "}
              </button>
              <p className="mt-2 text-sm text-left text-blueGray-600 md:ml-6 md:mt-0">
                {" "}
                It will take you to candy shop.{" "}
                <br className="hidden lg:block" />
                <a
                  href="#"
                  className="inline-flex items-center font-semibold text-blue-600 md:mb-2 lg:mb-0 hover:text-black "
                  title="read more"
                >
                  {" "}
                  Read more about it »{" "}
                </a>
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/3 lg:max-w-lg md:w-1/2">
            <img
              className="object-cover object-center rounded-lg "
              alt="hero"
              src="https://dummyimage.com/720x600/F3F4F7/8693ac"
            />
          </div>
        </div>
      </section>
      <section className="text-blueGray-700 bg-white mt-20">
        <div className="container flex flex-col items-center px-5 py-16 mx-auto  md:flex-row lg:px-28">
          <div className="flex flex-col items-start w-full pt-0 mb-16 text-left  lg:flex-grow md:w-1/2 xl:mr-20 md:pr-24 md:mb-0">
            <h1 className="mb-8 text-2xl font-black tracking-tighter text-black  md:text-5xl title-font">
              {" "}
              Medium length display headline.{" "}
            </h1>
            <p className="mb-8 text-base leading-relaxed text-left text-blueGray-600">
              {" "}
              Deploy your mvp in minutes, not days. WT offers you a a wide
              selection swapable sections for your landing page.{" "}
            </p>
            <div className="flex flex-col w-full gap-2 md:justify-start md:flex-row">
              <input
                className="flex-grow w-full px-4 py-3 mb-4 text-base text-black transition ease-in-out transform rounded-lg  duration-650 lg:w-auto bg-blueGray-200 focus:outline-none focus:border-purple-500 sm:mb-0 focus:bg-white focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
                placeholder="Your Email"
                type="email"
              />
              <button className="flex items-center px-6 py-3 mt-auto font-semibold text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-lg  hover:bg-blue-700 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
                {" "}
                Subscribe{" "}
              </button>
            </div>
            <p className="w-full mt-2 mb-8 text-sm text-left text-blueGray-600">
              {" "}
              I got 99 problems and blocks ain't one.{" "}
            </p>
          </div>
          <div className="w-full lg:w-5/6 lg:max-w-lg md:w-1/2">
            <img
              className="object-cover object-center rounded-lg"
              alt="hero"
              src="https://dummyimage.com/720x600/F3F4F7/8693ac"
            />
          </div>
        </div>
      </section>

      {/* faq block */}
      <section className="relative pb-12 overflow-hidden bg-gray-900 lg:pb-20">
        <div className="relative z-20 max-w-screen-xl px-6 mx-auto lg:px-8 xl:px-4">
          <div className="mb-6 text-center md:mb-8 lg:mb-12">
            <h2 className="mb-2 text-3xl font-bold text-white md:text-4xl lg:text-5xl md:mb-4">
              FAQ
            </h2>
            <p className="text-lg text-gray-200 xl:text-xl">
              Ask us anything about our product.
            </p>
          </div>
          <div className="mb-12 lg:mb-20">
            <ul className="text-base divide-y divide-gray-600 md:text-lg">
              <li>
                <button className="flex items-center justify-between w-full py-3 font-bold lg:py-4 focus:outline-none hover:text-indigo-700">
                  <span className="flex-1 pr-6 text-left">
                    What companies or products do you perceive as our
                    competitors?
                  </span>
                  <svg
                    className="w-6 h-6 text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
              </li>
              <li>
                <button className="flex items-center justify-between w-full py-3 font-bold lg:py-4 focus:outline-none hover:text-indigo-700">
                  <span className="flex-1 pr-6 text-left">
                    Have you seen, read or heard anything in the news and on
                    social media?
                  </span>
                  <svg
                    className="w-6 h-6 text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
              </li>
              <li>
                <button className="flex items-center justify-between w-full py-3 font-bold lg:py-4 focus:outline-none hover:text-indigo-700">
                  <span className="flex-1 pr-6 text-left">
                    Do you identify with any of the people appearing in this
                    advert?
                  </span>
                  <svg
                    className="w-6 h-6 text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
              </li>
              <li>
                <button className="flex items-center justify-between w-full py-3 font-bold lg:py-4 focus:outline-none hover:text-indigo-700">
                  <span className="flex-1 pr-6 text-left">
                    If you could change one thing about the advert you’ve just
                    seen/heard, what would it be?
                  </span>
                  <svg
                    className="w-6 h-6 text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
              </li>
              <li>
                <button className="flex items-center justify-between w-full py-3 font-bold lg:py-4 focus:outline-none hover:text-indigo-700">
                  <span className="flex-1 pr-6 text-left">
                    Who else would you like to see appear in this advert?
                  </span>
                  <svg
                    className="w-6 h-6 text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
              </li>
            </ul>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12 ">
            <a
              href="#"
              className="flex flex-col p-6 space-y-6 transition-all duration-500 rounded-lg shadow bg-gradient-to-br from-gray-800 to-gray-900 hover:shadow-xl lg:p-8 lg:flex-row lg:space-y-0 lg:space-x-6"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 border border-green-200 rounded-full shadow-inner lg:h-20 lg:w-20">
                <svg
                  className="w-10 h-10 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h5 className="mb-3 text-xl font-bold lg:text-2xl">
                  Compare Plans
                </h5>
                <p className="mb-6 text-lg text-gray-200">
                  Find out what plan is right for you
                </p>
                <span className="flex items-baseline text-lg font-bold text-indigo-600">
                  View price comparison
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </span>
              </div>
            </a>
            <a
              href="#"
              className="flex flex-col p-6 space-y-6 transition-all duration-500 rounded-lg shadow bg-gradient-to-br from-gray-800 to-gray-900 hover:shadow-xl lg:p-8 lg:flex-row lg:space-y-0 lg:space-x-6"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 border border-green-200 rounded-full shadow-inner lg:h-20 lg:w-20">
                <svg
                  className="w-10 h-10 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h5 className="mb-3 text-xl font-bold lg:text-2xl">
                  Need advice?
                </h5>
                <p className="mb-6 text-lg text-gray-200">
                  Find out what plan is right for you
                </p>
                <span className="flex items-baseline text-lg font-bold text-indigo-600">
                  Contact our professionals
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>
    </section>
  );
};

export default OtherSection;
