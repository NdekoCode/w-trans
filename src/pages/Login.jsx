import React from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";

const Login = () => {
  return (
    <AuthLayout>
      <div className="flex min-h-screen">
        <div className="flex flex-row w-full">
          {/* Sidebar */}
          <div className="hidden lg:flex flex-col justify-between bg-primary-dark lg:p-8 xl:p-12 lg:max-w-sm xl:max-w-lg">
            <div className="flex items-center justify-start space-x-3">
              <span className="bg-primary-dark rounded-full w-8 h-8" />
              <Link to="/" className="font-medium text-xl">
                Wastes Transformation
              </Link>
            </div>
            <div className="space-y-5">
              <h1 className="lg:text-3xl title-3 xl:text-5xl xl:leading-snug font-extrabold text-white">
                Entrez dans votre compte et contribuer à notre environnement
              </h1>
              <p className="text-lg text-white-light">
                Vous n'avez pas de compte ?
              </p>
              <button className="inline-block flex-none px-4 py-3 border-2 rounded-lg font-medium btn btn-primary text-white">
                Créer un compte ici
              </button>
            </div>
            <p className="font-medium">© 2022 Wastes Transformation</p>
          </div>
          {/* Login */}
          <div className="flex flex-1 flex-col items-center my-auto justify-center px-10 relative">
            <div className="flex lg:hidden justify-between items-center w-full py-4">
              <div className="flex items-center justify-start space-x-3">
                <span className="bg-black rounded-full w-6 h-6" />
                <a href="#" className="font-medium text-lg">
                  Wastes Transformation
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <span>Pas un membre ?</span>
                <a href="#" className="underline font-medium text-[#070eff]">
                  S'inscrire maintenant
                </a>
              </div>
            </div>
            {/* Login box */}
            <div className="flex flex-1 flex-col  justify-center space-y-5 max-w-md mt-10">
              <div className="flex flex-col space-y-2 text-center">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Connectez-vous au compte
                </h2>
                <p className="text-md md:text-xl">
                  Inscrivez-vous ou connectez-vous pour commencer !
                </p>
              </div>
              <form className="flex flex-col max-w-md space-y-5">
                <div className="w-full">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
                  />
                </div>
                <div className="w-full">
                  <input
                    type="password"
                    placeholder="Mot de passe"
                    className="w-full flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
                  />
                </div>
                <div className="w-full">
                  <input
                    type="password"
                    placeholder="Confirmer le mot de passe"
                    className="w-full flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
                  />
                </div>
                <button className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white">
                  Confirmer par e-mail
                </button>
                <div className="flex justify-center items-center">
                  <span className="w-full border border-black" />
                  <span className="px-4">Ou</span>
                  <span className="w-full border border-black" />
                </div>
                <button className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black relative">
                  <span className="absolute left-4">
                    <svg
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <path
                        fill="#EA4335 "
                        d="M5.26620003,9.76452941 C6.19878754,6.93863203 8.85444915,4.90909091 12,4.90909091 C13.6909091,4.90909091 15.2181818,5.50909091 16.4181818,6.49090909 L19.9090909,3 C17.7818182,1.14545455 15.0545455,0 12,0 C7.27006974,0 3.1977497,2.69829785 1.23999023,6.65002441 L5.26620003,9.76452941 Z"
                      />
                      <path
                        fill="#34A853"
                        d="M16.0407269,18.0125889 C14.9509167,18.7163016 13.5660892,19.0909091 12,19.0909091 C8.86648613,19.0909091 6.21911939,17.076871 5.27698177,14.2678769 L1.23746264,17.3349879 C3.19279051,21.2936293 7.26500293,24 12,24 C14.9328362,24 17.7353462,22.9573905 19.834192,20.9995801 L16.0407269,18.0125889 Z"
                      />
                      <path
                        fill="#4A90E2"
                        d="M19.834192,20.9995801 C22.0291676,18.9520994 23.4545455,15.903663 23.4545455,12 C23.4545455,11.2909091 23.3454545,10.5272727 23.1818182,9.81818182 L12,9.81818182 L12,14.4545455 L18.4363636,14.4545455 C18.1187732,16.013626 17.2662994,17.2212117 16.0407269,18.0125889 L19.834192,20.9995801 Z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.27698177,14.2678769 C5.03832634,13.556323 4.90909091,12.7937589 4.90909091,12 C4.90909091,11.2182781 5.03443647,10.4668121 5.26620003,9.76452941 L1.23999023,6.65002441 C0.43658717,8.26043162 0,10.0753848 0,12 C0,13.9195484 0.444780743,15.7301709 1.23746264,17.3349879 L5.27698177,14.2678769 Z"
                      />
                    </svg>
                  </span>
                  <span>Connectez-vous avec Google</span>
                </button>
              </form>
            </div>
            {/* Footer */}
            <div className="flex justify-center flex-col mx-auto mt-auto text-center text-lg dark:text-slate-200 ">
              <p>
                Contactez-nous sur les différentes plateformes et réseaux
                sociaux
              </p>
              <div className="flex items-center justify-center space-x-2 mt-4 flex-wrap">
                <a
                  href="https://www.linkedin.com/in/w-trans/"
                  className="flex flex-none items-center justify-center rounded-full w-12 h-12 hover:bg-slate-200 transition-all dark:hover:bg-slate-700"
                >
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="4.983"
                      cy="5.009"
                      r="2.188"
                      fill="currentColor"
                    />
                    <path
                      d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/w-trans/"
                  className="flex flex-none items-center justify-center rounded-full w-12 h-12 hover:bg-slate-200 transition-all dark:hover:bg-slate-700"
                >
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a
                  href="https://twitter.com/w-trans"
                  className="flex flex-none items-center justify-center rounded-full w-12 h-12 hover:bg-slate-200 transition-all dark:hover:bg-slate-700"
                >
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Login;
