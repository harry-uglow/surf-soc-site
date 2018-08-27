import React from "react";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import NavLink from "react-router-dom/es/NavLink";
import { LinkContainer } from "react-router-bootstrap";

import '../../stylesheets/Header.css';

const Header = () => (
  <Navbar className='header' staticTop inverse fluid collapseOnSelect>
    <Navbar.Header id="surf-header">
      <Navbar.Brand>
        <NavLink to="/" id="surf-branding">
          {window.innerWidth > 400 ? "Imperial College" : "IC"} Surf Society
        </NavLink>
      </Navbar.Brand>
      <Navbar.Toggle/>
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        {/*<LinkContainer to="/about"><NavItem>About</NavItem></LinkContainer>*/}
        <LinkContainer to="/trips"><NavItem>Trips</NavItem></LinkContainer>
        <LinkContainer to="/events"><NavItem>Events</NavItem></LinkContainer>
        <LinkContainer to="/committee"><NavItem>Committee</NavItem></LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;

