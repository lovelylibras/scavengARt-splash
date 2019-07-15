import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Row, Col, Container, Button } from 'react-bootstrap';

function TechStack() {
  return (
    <div className="section" id="techstack">
      <Container>
        <Row className="justify-content-md-center title">
          <Col className="lg-8 mx-auto text-center">
            <h1>Tech Stack</h1>
            <hr className="half-rule" />
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col className="text-center">
            <div className="service-box mt-5 mx-auto">
              <img src="SWIFT.png" className="img-png" />
              <h3 className="mb-3">swift</h3>
            </div>
          </Col>
          <Col className="text-center">
            <div className="service-box mt-5 mx-auto">
              <img src="XCODE 2.png" className="img-png" />
              <h3 className="mb-3">xcode</h3>
            </div>
          </Col>
          <Col className="text-center">
            <div className="service-box mt-5 mx-auto">
              <img src="ARKIT.png" className="img-png" />
              <h3 className="mb-3">ARKit</h3>
            </div>
          </Col>
          <Col className="text-center">
            <div className="service-box mt-5 mx-auto">
              <img src="SCNKIT.png" className="img-png" />
              <h3 className="mb-3">SCNKit</h3>
            </div>
          </Col>
          <Col className="text-center">
            <div className="service-box mt-5 mx-auto">
              <img src="CORELOC.png" className="img-png" />
              <h3 className="mb-3">coreLocation</h3>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col className="text-center">
            <div className="service-box mt-5 mx-auto">
              <img src="POSTGRESQL.png" className="img-png" />
              <h3 className="mb-3">postgreSQL</h3>
            </div>
          </Col>
          <Col className="text-center">
            <div className="service-box mt-5 mx-auto">
              <img src="SEQUELIZE.png" className="img-png" />
              <h3 className="mb-3">sequelize</h3>
            </div>
          </Col>
          <Col className="text-center">
            <div className="service-box mt-5 mx-auto">
              <img src="NODE.png" className="img-png" />
              <h3 className="mb-3">nodeJS</h3>
            </div>
          </Col>
          <Col className="text-center">
            <div className="service-box mt-5 mx-auto">
              <img src="EXPRESS.png" className="img-png" />
              <h3 className="mb-3">expressJS</h3>
            </div>
          </Col>
        </Row>
        <Button size="lg" className="button">
          <Link className="button-link" smooth to="#screencast">
            View Our Screencast
          </Link>
        </Button>
      </Container>
    </div>
  );
}

export default TechStack;
