import React from "react";
import Hero from "../components/Hero";
import PageLayout from "../components/PageLayout";
import playBtn from "../assets/images/icons/play.svg";
import img1 from "../assets/images/image-1.jpg";
import img2 from "../assets/images/image-2.jpeg";
import img3 from "../assets/images/image-3.jpeg";
import Block from "../components/Block";

const Project = () => {
  return (
    <PageLayout>
      <Hero
        BlockLeft={
          <Block>
            <div className="block-left">
              <h1 className="title">Nos projets</h1>
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
          </Block>
        }
        BlockRight={
          <Block>
            <div className="block-right">
              <div className="hero__circle">
                <div
                  className="circle-hero bg-cover bg-center circle-1"
                  style={{
                    backgroundImage: `linear-gradient(45deg, rgba(0,0,0,0.2) 15%, rgba(0,0,0,0.4)),url(${img1})`,
                  }}
                ></div>
              </div>
            </div>
          </Block>
        }
      />
    </PageLayout>
  );
};

export default Project;
