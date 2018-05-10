import React from "react";
import '../../stylesheets/Header.css';
import {Nav, Navbar, NavItem} from "react-bootstrap";
import NavLink from "react-router-dom/es/NavLink";

const Header = () => {
  return (
    <Navbar inverse>
      <Navbar.Header>
        <NavLink to="/">
          <img id="surf-logo" src="/images/surf_logo.png" alt="Surf Logo"/>
        </NavLink>
      </Navbar.Header>
      <Nav>
        <NavItem><NavLink to="/about">About</NavLink></NavItem>
        <NavItem><NavLink to="/trips">Trips</NavLink></NavItem>
        <NavItem><NavLink to="/committee">Committee</NavLink></NavItem>
      </Nav>
    </Navbar>
  );
};

export default Header;

