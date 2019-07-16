import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Navbar, Nav } from 'react-bootstrap';

function NavigationBar() {
  return (
    <Navbar expand="lg" className="justify-content-between nav" fixed="top">
      <div id="logo">
        <Navbar.Brand>
          <Link smooth to="#home">
            <img id="logo" src="scavengARt.png" />
          </Link>
        </Navbar.Brand>
      </div>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        id="nav-toggle"
        // className="justify-content-end"
      />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <div>
          <Nav className="mr-auto">
            <Link smooth to="#about-scavengart" className="links">
              About ScavengARt
            </Link>
            <Link smooth to="#techstack" className="links">
              Tech Stack
            </Link>
            <Link smooth to="#screencast" className="links">
              Screencast
            </Link>
            <Link smooth to="#about-us" className="links">
              About Us
            </Link>
          </Nav>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
