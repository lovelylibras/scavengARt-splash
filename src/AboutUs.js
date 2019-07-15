import React from 'react';
import { Jumbotron, Image, Container, Row, Col, Button } from 'react-bootstrap';

function AboutUs() {
  return (
    <div className="section" id="about-us">
      <Container>
        <Row className="text-row">
          <Col>
            <h1>About Us</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Image fluid src="met_girls.jpg" />
          </Col>
        </Row>
        <Row className="justify-content-md-center title">
          <Col className="lg-8 mx-auto text-center">
            <h3>Audra Kenney</h3>
            <a href="https://www.linkedin.com/in/audra-kenney-b1b2528/">
              <img
                className="img-linkedin"
                src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_circle_black-512.png"
              />
            </a>
            <a href="https://www.github.com/audrakenney">
              <img
                className="img-git"
                src="https://www.stickpng.com/assets/images/5847f98fcef1014c0b5e48c0.png"
              />
            </a>
          </Col>
          <Col className="lg-8 mx-auto text-center">
            <h3>Rachel Reinauer</h3>
            <a href="https://www.linkedin.com/in/rachel-reinauer/">
              <img
                className="img-linkedin"
                src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_circle_black-512.png"
              />
            </a>
            <a href="https://www.github.com/rreinauer">
              <img
                className="img-git"
                src="https://www.stickpng.com/assets/images/5847f98fcef1014c0b5e48c0.png"
              />
            </a>
          </Col>
          <Col className="lg-8 mx-auto text-center">
            <h3>Ahsun Kim</h3>
            <a href="https://www.linkedin.com/in/ahsunkim">
              <img
                className="img-linkedin"
                src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_circle_black-512.png"
              />
            </a>
            <a href="https://www.github.com/ahsunkim">
              <img
                className="img-git"
                src="https://www.stickpng.com/assets/images/5847f98fcef1014c0b5e48c0.png"
              />
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutUs;
