import React from "react";
import PageLayout from "../components/PageLayout";

const News = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-14 sm:px-6 xl:px-12">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <h1 className="text-4xl font-bold tracking-normal sm:text-5xl lg:text-6xl">
            Blog
          </h1>
          <p className="max-w-screen-sm text-lg text-gray-600 sm:text-xl">
            Nous écrivons sur le climat, les meilleurs outils et les ressources
            pour bâtir un monde sain capable de gérer et recycler le maximum de
            déchets produits .
          </p>
          <form className="flex w-full max-w-md flex-col items-center space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3">
            <input
              type="email"
              required=""
              className="w-full rounded-md border bg-gray-50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="you@website.com"
              defaultValue=""
            />
            <button
              type="submit"
              className="w-full rounded-md btn btn-primary transition hover:border-green-600  focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:border-green-500 disabled:hover:bg-green-500 sm:max-w-max"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </PageLayout>
  );
};

export default News;
