import React from "react";
import { useCallback } from "react";
import { useState } from "react";
import { useEffect } from "react";

import Logo from "./Logo";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState({
    className: "humburger",
    open: false,
  });
  const toggleButton = useCallback(({ target }) => {
    const mobileMenu = document.querySelector(".navlinks-container");
    const aria =
      target.getAttribute("aria-expanded") === "true" ? "false" : "true";
    target.setAttribute("aria-expanded", aria);
    mobileMenu.classList.toggle("open");
    target.classList.toggle("open");

    console.log(mobileMenu);
    console.log(target);
    new ResizeObserver((entries) => {
      if (entries[0].contentRect.width <= 900) {
        if (mobileMenu !== null) {
          mobileMenu.style.transition = "transform 0.3s ease-out";
        }
      } else {
        if (mobileMenu !== null) {
          mobileMenu.style.transition = "none";
        }
      }
    }).observe(document.body);
  });
  useEffect(() => {
    const humburger = document.getElementById("humburger");
    console.log(humburger);
  }, [toggleMenu]);
  return (
    <nav className="navbar">
      <div className="container">
        <Logo />
        <div className="main-navlinks">
          <button
            onClick={toggleButton}
            className={toggleMenu.className}
            id="humburger"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded="false"
          >
            <span />
            <span />
            <span />
          </button>
          <ul className="navlinks-container">
            <li className="list-item">
              <a className="navlink" href="#" aria-current="page">
                Acceuil
              </a>
            </li>
            <li className="dropdown-parent-item list-item">
              <a className="navlink" href="#" aria-current="page">
                A propos
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  focusable="false"
                  width="1em"
                  height="1em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 20 20"
                  className="iconify"
                  data-icon="dashicons:arrow-down-alt2"
                  style={{
                    verticalAlign: "-0.125em",
                    transform: "rotate(360deg)",
                  }}
                >
                  <path fill="currentColor" d="m5 6l5 5l5-5l2 1l-7 7l-7-7z" />
                </svg>
              </a>
              <ul className="dropdown-list">
                <li>
                  <a href="#">Offre d'emplois</a>
                </li>
                <li>
                  <a href="#">Appel d'offre</a>
                </li>
              </ul>
            </li>
            <li className="list-item">
              <a className="navlink" href="#" aria-current="page">
                Projets
              </a>
            </li>
            <li className="list-item">
              <a className="navlink" href="#" aria-current="page">
                Services
              </a>
            </li>
            <li className="list-item">
              <a className="navlink" href="#" aria-current="page">
                Actualités
              </a>
            </li>
            <li className="list-item">
              <a className="navlink" href="#" aria-current="page">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <ul className="nav-authentication">
          <li className="auth-links">
            <a href="#" className="user-auth" aria-label="Se connecter">
              <img src="" alt="user-icon" />
            </a>
          </li>
          <li className="sign-btns">
            <a href="#">Se connecter</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
