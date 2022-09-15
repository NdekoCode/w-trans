import React from "react";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container block-content">
        <div className="block-left">
          <h1 className="title">Nous sommes spécialisé dans le recyclage ☘️</h1>
          <div>
            <p>
              Nous mettons en place le paves fabriqués à base de déchets
              plastique pour réduire la pollution de l’environnement.
            </p>
            <p>
              Cultivons les bons gestes pour un environnement plus sain,
              devenons tous Éco-Citoyens !
            </p>
          </div>
          <div className="btn-container">
            <a href="#" className="btn btn-primary">
              Commencer aujourd'hui
            </a>
            <a href="#" className="btn btn-icon">
              <img src={playBtn} alt="Play" />
              <span>Comment on fonctionne</span>
            </a>
          </div>
        </div>
        <div className="block-right">
          <div className="hero__circle">
            <div className="circle-hero circle-1"></div>
            <div className="circle-hero circle-2"></div>
            <div className="circle-hero circle-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
