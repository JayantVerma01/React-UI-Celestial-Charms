import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../CSS/Header.css';
import ringImage from '../Assets/header.png';
import WA from '../Assets/WA.png';
import IG from '../Assets/IG.png';
import FB from '../Assets/FB.png';
import YT from '../Assets/YT.png';

const Header = () => {
  return (
    <header className="header-custom">
      <Container fluid>
        <Row className="align-items-center">
          <Col xl={6} lg={6} md={12} className="mb-4 mb-md-0">
            <img src={ringImage} alt="Ring" className="ring-image img-fluid" />
          </Col>
          <Col xl={6} lg={6} md={12} className="outer">
          <Col xl={6} lg={6} md={12} className="text-md-left  right-container">
            <div className="head text-center text-md-left ">
              <h2>Welcome to <h1>CelestialCharms</h1></h2>
            </div>
            <div className="para text-center text-md-left">
              <p>
                Discover the magic of the stars with CelestialCharms. Our exquisite jewelry collection captures the beauty of the cosmos, blending timeless elegance with celestial inspiration. Adorn yourself with pieces that sparkle like the night sky.
              </p>
            </div>
          </Col>
          </Col>
        </Row>
        <div className="text-center text-md-right mb-4 shop-now-container">
          <Button variant="primary" href="#shop" className="shop-now-button">Shop Now</Button>
        </div>
        <div className="social-icons-container">
        <div className="text-md-right social-icons">
          <img src={WA} alt="WA" className='social-icon'/>
          <img src={IG} alt="IG" className='social-icon'/>
          <img src={FB} alt="FB" className='social-icon'/>
          <img src={YT} alt="YT" className='social-icon'/>
        </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
