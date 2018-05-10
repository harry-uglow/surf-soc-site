import React from "react";
import '../../stylesheets/Header.css';
import {Nav, Navbar, NavItem} from "react-bootstrap";
import NavLink from "react-router-dom/es/NavLink";

const Header = () => {
  return (
    <Navbar className='header' inverse>
      <Navbar.Header>
        <NavLink to="/" id='surf-logo-link'>
          <img id="surf-logo" src="/images/surf_logo.png" alt="Surf Logo"/>
        </NavLink>
      </Navbar.Header>
      <Nav pullRight>
        <NavItem><NavLink to="/about">About</NavLink></NavItem>
        <NavItem><NavLink to="/trips">Trips</NavLink></NavItem>
        <NavItem><NavLink to="/committee">Committee</NavLink></NavItem>
      </Nav>
    </Navbar>
  );
};

export default Header;

