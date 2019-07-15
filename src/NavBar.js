import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

function NavBar() {
  return (
    <div className="nav">
      <div id="logo">
        <Link smooth to="#home">
          <img id="logo" src="scavengARt.png" />
        </Link>
      </div>
      <div>
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
      </div>
    </div>
  );
}

export default NavBar;
