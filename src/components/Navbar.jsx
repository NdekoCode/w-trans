import React from "react";
import { useCallback } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { navbarRouter } from "../routes/routes";
import imgUser from "../assets/images/icons/user-light.svg";
import Logo from "./Logo";
import SubLinks from "./SubLinks";
import { Link } from "react-router-dom";
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
            {navbarRouter.map(({ path, name, children }, index) => {
              if (children !== undefined && children.length > 0) {
                return (
                  <SubLinks key={index} name={name} childLinks={children} />
                );
              } else {
                return (
                  <li className="list-item" key={index}>
                    <NavLink
                      to={path}
                      className="navlink"
                      href="#"
                      aria-current="page"
                    >
                      {name}
                    </NavLink>
                  </li>
                );
              }
            })}
          </ul>
        </div>
        <ul className="nav-authentication">
          <li className="auth-links">
            <a href="#" className="user-auth" aria-label="Se connecter">
              <img src={imgUser} alt="user-icon" />
            </a>
          </li>
          <li className="sign-btns">
            <Link to="/login">Se connecter</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
