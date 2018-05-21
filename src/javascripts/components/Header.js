import React from "react";
import '../../stylesheets/Header.css';
import {Nav, Navbar, NavItem} from "react-bootstrap";
import NavLink from "react-router-dom/es/NavLink";
import {LinkContainer} from "react-router-bootstrap";

const Header = () => {
  return (
    <Navbar className='header' staticTop inverse fluid collapseOnSelect>
      <Navbar.Header id="surf-header">
        <Navbar.Brand>
          <NavLink to="/" id="surf-branding">
            Imperial College Surf Society
            {/*<img id="surf-logo" src="/images/surf_logo.png" alt="Surf Logo"/>*/}
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle/>
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <LinkContainer to="/about"><NavItem>About</NavItem></LinkContainer>
          <LinkContainer to="/trips"><NavItem>Trips</NavItem></LinkContainer>
          <LinkContainer to="/committee"><NavItem>Committee</NavItem></LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;

