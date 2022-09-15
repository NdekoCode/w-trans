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
    <section className="our-values container section" id="our-values">
      {values.map(({ title, content, image }, index) => (
        <div className="value">
          <div className="value__infos">
            <h2 className="title title-2">{title}</h2>
            <p>{content}</p>
          </div>
          <div className="value__image">
            <img src={image} alt={title} />
          </div>
        </div>
      ))}
    </section>
  );
};

export default OurValues;
