import React from "react";
import PageLayout from "../components/PageLayout";

const Partners = () => {
  return (
    <PageLayout>
      <main className="font-medium text-gray-200 bg-black">
        {/*/ header block */}
        <div className="py-12 md:py-24 bg-gradient-to-b from-green-900 to-black">
          <div className="grid max-w-screen-xl px-6 mx-auto lg:px-8 xl:px-4 md:grid-cols-4 xl:grid-cols-5 gap-x-12 lg:gap-x-20">
            <div className="self-center order-2 col-span-2 mt-12 md:order-1 md:mt-0">
              <h1 className="mb-2 text-3xl font-bold text-white md:text-4xl lg:text-5xl md:mb-4 lg:mb-8">
                The best way to write code all day
              </h1>
              <p className="mb-6 text-lg text-gray-200 xl:text-xl lg:mb-8 xl:mb-10">
                For writers, a random sentence can help them get their creative
                juices flowing. Since the topic.
              </p>
              <div className="flex mb-6 space-x-4">
                <input
                  type="text"
                  placeholder="enter your email..."
                  className="flex-1 px-4 py-4 leading-none border border-gray-200 rounded-lg focus:outline-none"
                />
                <a className="btn btn-primary px-5 py-2 font-semibold text-white rounded-lg focus:outline-none bg-gradient-to-br from-green-600 to-green-700 hover:from-green-500 hover:to-green-700 ">
                  Get started
                </a>
              </div>
              <p className="text-sm text-gray-400">
                No credit card required. Cancel anytime.
              </p>
            </div>
            <div className="order-1 col-span-2 md:order-2 xl:col-span-3">
              <img
                src="/images/hero-image-dark.png"
                className="rounded-lg shadow-2xl"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* pricing block */}
        <div className="bg-gradient-to-b from-black to-green-900">
          <div className="max-w-screen-xl px-6 pb-12 mx-auto lg:px-8 xl:px-4 lg:pb-16 xl:pb-24">
            <div className="mb-6 text-center md:mb-8">
              <h2 className="mb-2 text-3xl font-bold text-white md:text-4xl lg:text-5xl md:mb-4">
                For Freelancers and Teams
              </h2>
              <p className="text-lg text-gray-200 xl:text-xl">
                We offer 100% money back guarantee.
              </p>
            </div>
            <div className="flex justify-center mb-8 md:mb-20 lg:mb-24">
              <nav className="inline-flex overflow-hidden text-sm bg-green-100 rounded-lg">
                <button className="px-6 py-3 font-bold text-white focus:outline-none bg-gradient-to-br from-green-600 to-green-700 hover:from-green-500 hover:to-green-700">
                  Pay Monthly
                </button>
                <button className="px-6 py-3 font-bold text-green-500 focus:outline-none hover:bg-green-50">
                  Pay Yearly
                </button>
              </nav>
            </div>
          </div>
        </div>
        {/*/ pricing block */}
        {/* rating block */}
        <div className="bg-green-900">
          <div className="max-w-screen-xl px-6 pb-12 mx-auto lg:px-8 xl:px-4 lg:pb-16 xl:pb-24">
            <div className="flex flex-col items-center justify-center">
              <div className="flex flex-col w-full px-4 py-4 space-y-4 border border-yellow-200 rounded-lg bg-yellow-50 lg:py-8 md:px-12 md:w-auto md:flex-row md:items-center md:space-x-4 lg:space-x-12">
                <div>
                  <p className="text-lg font-bold text-gray-800 uppercase trakcing-wide lg:text-xl">
                    4.9 Overall rating
                  </p>
                  <p className="text-base text-gray-600 lg:text-lg">
                    Serving 3000 companies world wide
                  </p>
                </div>
                <div className="flex space-x-2 text-yellow-400">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*/ rating block */}
      </main>
    </PageLayout>
  );
};

export default Partners;
