import React from "react";
import '../../stylesheets/Header.css';
import NavLink from "react-router-dom/es/NavLink";

const Header = () => {
  return (
    <div className="header">
      <ul className="navlinks">
        <li id="surf-logo-link">
          <NavLink to="/">
            <img id="surf-logo" src="/images/surf_logo.png" alt="Surf Logo"/>
          </NavLink>
        </li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/trips">Trips</NavLink></li>
        <li><NavLink to="/committee">Committee</NavLink></li>
      </ul>
    </div>
  );
};

export default Header;

