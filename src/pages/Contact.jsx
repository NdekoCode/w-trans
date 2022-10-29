import React from "react";
import PageLayout from "../components/PageLayout";

const Contact = () => {
  return (
    <PageLayout>
      <div className="flex min-h-screen items-center justify-start bg-white">
        <div className="mx-auto w-full max-w-lg">
          <h1 className="text-4xl font-medium">Nous contacter</h1>
          <p className="mt-3">
            Envoyez-nous un e-mail à{" "}
            <a href="mailto:contact@wastes-trans.com">
              contact@wastes-trans.com
            </a>{" "}
            ou envoyez-nous un message ici :
          </p>
          <form action="#" className="mt-10">
            <input
              type="hidden"
              name="access_key"
              defaultValue="YOUR_ACCESS_KEY_HERE"
            />
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="relative z-0">
                <input
                  type="text"
                  name="name"
                  className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                  placeholder=" "
                />
                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                  Votre nom
                </label>
              </div>
              <div className="relative z-0">
                <input
                  type="text"
                  name="email"
                  className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                  placeholder=" "
                />
                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                  Votre email
                </label>
              </div>
              <div className="relative z-0 col-span-2">
                <textarea
                  name="message"
                  rows={5}
                  className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                  placeholder=" "
                  defaultValue={""}
                />
                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                  Votre message
                </label>
              </div>
            </div>
            <button type="submit" className="mt-5 rounded-md btn btn-primary ">
              Envoyer le Message
            </button>
          </form>
        </div>
      </div>
    </PageLayout>
  );
};

export default Contact;
