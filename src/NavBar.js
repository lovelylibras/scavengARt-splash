import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

function NavBar() {
  return (
    <div className="nav">
      <div id="logo">
        <h1>ScavengARt</h1>
      </div>
      <div>
        <Link smooth to="#home" className="links">
          Home
        </Link>
        <Link smooth to="#techstack" className="links">
          TechStack
        </Link>
        <Link smooth to="#screencast" className="links">
          Screencast
        </Link>
        <Link smooth to="#about-us" className="links">
          About Us
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
