import React from 'react';
import { Navbar, Container, Row, Col } from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';

function Footer() {
  return (
    <Navbar className="app-footer" sticky="bottom" id="footer">
      <p>© 2019</p>
    </Navbar>
  );
}

export default Footer;
