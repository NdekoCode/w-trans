import React from "react";

const Error404 = () => {
  return (
    <PageLayout>
      <main className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
        <h1 className="text-9xl font-extrabold text-white tracking-widest">
          404
        </h1>
        <div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
          Page Not Found
        </div>
        <button className="mt-5">
          <a className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring">
            <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0" />
            <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
              <router-link to="/">Go Home</router-link>
            </span>
          </a>
        </button>
        <div className="flex flex-col mt-48">
          <div className="text-gray-400 font-bold uppercase">Continue With</div>
          <div className="flex flex-col items-stretch mt-5">
            {/* Nav Item #1 */}
            <div
              className="flex flex-row group px-4 py-8
              border-t hover:cursor-pointer
              transition-all duration-200 delay-100"
            >
              {/* Nav Icon */}
              <div className="rounded-xl bg-blue-100 px-3 py-2 md:py-4">
                <i
                  className="mdi mdi-home-outline mx-auto 
                      text-indigo-900 text-2xl md:text-3xl"
                />
              </div>
              {/* Text */}
              <div className="grow flex flex-col pl-5 pt-2">
                <div className="font-bold text-sm md:text-lg lg:text-xl group-hover:underline">
                  Home Page
                </div>
                <div
                  className="font-semibold text-sm md:text-md lg:text-lg
                      text-gray-400 group-hover:text-gray-500
                      transition-all duration-200 delay-100"
                >
                  Everything starts here
                </div>
              </div>
              {/* Chevron */}
              <i
                className="mdi mdi-chevron-right text-gray-400 mdi-24px my-auto pr-2
                  group-hover:text-gray-700 transition-all duration-200 delay-100"
              />
            </div>
            {/* Nav Item #2 */}
            <div
              className="flex flex-row group px-4 py-8
              border-t hover:cursor-pointer
              transition-all duration-200 delay-100"
            >
              {/* Nav Icon */}
              <div className="rounded-xl bg-blue-100 px-3 py-2 md:py-4">
                <i
                  className="mdi mdi-book-open-page-variant-outline mx-auto 
                      text-indigo-800 text-2xl md:text-3xl"
                />
              </div>
              {/* Text */}
              <div className="grow flex flex-col pl-5 pt-2">
                <div className="font-bold text-sm md:text-lg lg:text-xl group-hover:underline">
                  Blog
                </div>
                <div
                  className="font-semibold text-sm md:text-md lg:text-lg
                      text-gray-400 group-hover:text-gray-500
                      transition-all duration-200 delay-100"
                >
                  Read our awesome articles
                </div>
              </div>
              {/* Chevron */}
              <i
                className="mdi mdi-chevron-right text-gray-400 mdi-24px my-auto pr-2
                  group-hover:text-gray-700 transition-all duration-200 delay-100"
              />
            </div>
            {/* Nav Item #3 */}
            <div
              className="flex flex-row group px-4 py-8
              border-t hover:cursor-pointer
              transition-all duration-200 delay-100"
            >
              {/* Nav Icon */}
              <div className="rounded-xl bg-blue-100 px-3 py-2 md:py-4">
                <i
                  className="mdi mdi-archive-settings-outline 
                      mx-auto text-indigo-800 text-2xl md:text-3xl"
                />
              </div>
              {/* Text */}
              <div className="grow flex flex-col pl-5 pt-2">
                <div className="font-bold text-sm md:text-lg lg:text-xl group-hover:underline">
                  Archive
                </div>
                <div
                  className="font-semibold text-sm md:text-md lg:text-lg
                      text-gray-400 group-hover:text-gray-500
                      transition-all duration-200 delay-100"
                >
                  Archived posts but still readable
                </div>
              </div>
              {/* Chevron */}
              <i
                className="mdi mdi-chevron-right text-gray-400 mdi-24px my-auto pr-2
                  group-hover:text-gray-700 transition-all duration-200 delay-100"
              />
            </div>
            {/* Nav Item #3 */}
            <div
              className="flex flex-row group px-4 py-8
              border-t hover:cursor-pointer
              transition-all duration-200 delay-100"
            >
              {/* Nav Icon */}
              <div className="rounded-xl bg-blue-100 px-3 py-2 md:py-4">
                <i
                  className="mdi mdi-at mx-auto 
                      text-indigo-800 text-2xl md:text-3xl"
                />
              </div>
              {/* Text */}
              <div className="grow flex flex-col pl-5 pt-2">
                <div className="font-bold text-sm md:text-lg lg:text-xl group-hover:underline">
                  Contact
                </div>
                <div
                  className="font-semibold text-sm md:text-md lg:text-lg
                      text-gray-400 group-hover:text-gray-500
                      transition-all duration-200 delay-100"
                >
                  Contact us for your questions
                </div>
              </div>
              {/* Chevron */}
              <i
                className="mdi mdi-chevron-right text-gray-400 mdi-24px my-auto pr-2
                  group-hover:text-gray-700 transition-all duration-200 delay-100"
              />
            </div>
          </div>
        </div>
      </main>
    </PageLayout>
  );
};

export default Error404;
