import React from "react";
import { useState } from "react";
import valueImg1 from "../assets/images/news/article-women-recycle.jpeg";
import valueImg2 from "../assets/images/news/img1.jpeg";

const OurValues = () => {
  const [values, setValue] = useState([
    {
      title: "Protégez notre Terre contre le changement climatique",
      content: `Si le lac n'était pas là, ça serait catastrophique. Mais
      malheureusement le lac Kivu qui constitue l'unique source
      d'approvisionnement en eau pour la population de Goma court
      aujourd'hui un grand risque de pollution.`,
      image: valueImg1,
    },
    {
      title:
        "Rendre l’environnement assaini, plus soigné pour le bien-être de tous.",
      content: `Cultivons les bons gestes pour un #environnement plus sain, devenons tous Éco-Citoyens!`,
      image: valueImg2,
    },
  ]);
  return (
    <section className="our-values section" id="our-values">
      <div className="container">
        {values.map(({ title, content, image }, index) => (
          <div className="value" key={index}>
            <div className="value__infos">
              <h2 className="title title-2">{title}</h2>
              <p>{content}</p>
              <div className="position">{`0${index + 1}`}</div>
            </div>
            <div
              className="value__image bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(-45deg, rgba(0,0,0,0.2) 15%, rgba(0,0,0,0.4)),url(${image})`,
              }}
            ></div>
            <a href="#" className="block btn-link my-5">
              En savoir plus
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurValues;
