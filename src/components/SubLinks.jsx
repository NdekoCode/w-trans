import React from "react";
import { NavLink } from "react-router-dom";

const SubLinks = ({ childLinks, name }) => {
  console.log("render");
  return (
    <li className="dropdown-parent-item list-item">
      <a className="navlink" href="#" aria-current="page">
        {name}
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
        {childLinks.map((item, index) => (
          <li key={index}>
            <NavLink to={item.path}>{item.name}</NavLink>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default SubLinks;
