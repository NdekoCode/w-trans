import React from "react";

const OurServices = () => {
  return (
    <section className="py-16 overflow-hidden section" id="services">
      <div className="container px-6 m-auto space-y-8 text-gray-500 md:px-12">
        <div>
          <span className="text-lg font-semibold text-gray-600 text-gold">
            Nos services
          </span>
          <h2 className="mt-4 text-2xl font-bold text-gray-900 title md:text-4xl">
            Nous facilitons la vente et la distribution des produits et
            <br className="lg:block" hidden /> services des nos partenaires
          </h2>
        </div>
        <div className="grid mt-16 overflow-hidden border divide-x divide-y rounded-xl sm:grid-cols-2 lg:divide-y-0 lg:grid-cols-3 xl:grid-cols-4">
          <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
            <div className="relative p-8 space-y-8 service__item">
              <img
                src="https://tailus.io/sources/blocks/stacked/preview/images/avatars/burger.png"
                className="w-10"
                width="512"
                height="512"
                alt="burger illustration"
              />

              <div className="space-y-2 service__body">
                <h5 className="text-xl font-medium text-gray-800 transition group-hover:text-yellow-600">
                  RESEAU DE COMMERCIAUX
                </h5>
                <p className="text-sm text-gray-600">
                  une armée des commerciaux surentrainés qui facilitent la
                  distribution des produits et services des entreprises
                  partenaires à Congo First Choice Sarl
                </p>
              </div>
              <a
                href="#"
                className="flex items-center justify-between group-hover:text-yellow-600"
              >
                <span className="text-sm">En savoir plus</span>
                <span className="text-2xl transition duration-300 -translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0">
                  &RightArrow;
                </span>
              </a>
            </div>
          </div>
          <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
            <div className="relative p-8 space-y-8 service__item">
              <img
                src="https://tailus.io/sources/blocks/stacked/preview/images/avatars/trowel.png"
                className="w-10"
                width="512"
                height="512"
                alt="burger illustration"
              />

              <div className="space-y-2 service__body">
                <h5 className="text-xl font-medium text-gray-800 transition group-hover:text-yellow-600">
                  PLACEMENT DES COMMERCIAUX
                </h5>
                <p className="text-sm text-gray-600">
                  Nous servons d'intermediaire entre les commerciaux en
                  recherche d'emploi et les employeurs potentiels
                </p>
              </div>
              <a
                href="#"
                className="flex items-center justify-between group-hover:text-yellow-600"
              >
                <span className="text-sm">En savoir plus</span>
                <span className="text-2xl transition duration-300 -translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0">
                  &RightArrow;
                </span>
              </a>
            </div>
          </div>
          <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
            <div className="relative p-8 space-y-8 service__item">
              <img
                src="https://tailus.io/sources/blocks/stacked/preview/images/avatars/package-delivery.png"
                className="w-10"
                width="512"
                height="512"
                alt="burger illustration"
              />

              <div className="space-y-2 service__body">
                <h5 className="text-xl font-medium text-gray-800 transition group-hover:text-yellow-600">
                  ACADEMIE DU COACHING COMMERCIAL
                </h5>
                <p className="text-sm text-gray-600">
                  Formations Seminaire Conference Master className Boost camp
                </p>
              </div>
              <a
                href="#"
                className="flex items-center justify-between group-hover:text-yellow-600"
              >
                <span className="text-sm">En savoir plus</span>
                <span className="text-2xl transition duration-300 -translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0">
                  &RightArrow;
                </span>
              </a>
            </div>
          </div>
          <div
            className="relative group bg-gray-100 transition hover:z-[1] hover:shadow-2xl xl:block
                    hover:bg-white group-hover:border group-hover:scale-90 "
          >
            <div className="relative p-8 space-y-8 transition duration-300 border-dashed rounded-lg service__item">
              <img
                src="https://tailus.io/sources/blocks/stacked/preview/images/avatars/metal.png"
                className="w-10"
                width="512"
                height="512"
                alt="burger illustration"
              />

              <div className="space-y-2 service__body">
                <h5 className="text-xl font-medium text-gray-800 transition group-hover:text-yellow-600">
                  BUREAU D'ETUDE
                </h5>
                <p className="text-sm text-gray-600">
                  Etude de marché Recrutement des agents commerciaux Diagnostic
                </p>
              </div>
              <a
                href="#"
                className="flex items-center justify-between group-hover:text-yellow-600"
              >
                <span className="text-sm">En savoir plus</span>
                <span className="text-2xl transition duration-300 -translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0">
                  &RightArrow;
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
