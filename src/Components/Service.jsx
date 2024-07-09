import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import '../CSS/Service.css';
import Polish from '../Assets/polish.png';
import serviceImg from '../Assets/serviceImg.png';

const Service = () => {
  return (
    <div className="service-main">
      <Container>

      <Row className="service-header">
        <Col>
          <h1>Services</h1>
        </Col>
        <Col xs='auto'>
          <Button variant="link" className="view-all-btn">View all</Button>
        </Col>
      </Row>
      </Container>
      <Row className="service-section">
        <Col md={6} className="service-image-col-1" >
          <img src={Polish} alt="polish" className="service-image" />
        </Col>
        <Col md={6} className="service-text-col">
        <div className="text-service">
          <h2 className="service-title">Get your Jewelry re-polished</h2>
          <p className="service-description">Restore the original shine & brilliance of your jewelry with our professional repolishing service. Perfect for keeping your jewelry looking as stunning as the day you bought it.</p>
          <p className="service-price">Starting at ₹999</p>
          <div className="service-buttons">
            <Button variant="outline-primary" className="add-to-cart">Add to Cart</Button>
            <Button variant="primary" className="buy-now">Buy Now</Button>
          </div>
        </div>
        </Col>
      </Row>
      <Row className="service-section">
        <Col md={6} className="service-text-col">
        <div className="text-service">

          <h2 className="service-title">Engraving Services</h2>
          <p className="service-description">Add a personal touch to your jewelry with custom engraving. Perfect for gifts, special occasions, or making any piece uniquely yours.</p>
          <p className="service-price">Starting at ₹999</p>
          <div className="service-buttons">
            <Button variant="outline-primary" className="add-to-cart">Add to Cart</Button>
            <Button variant="primary" className="buy-now">Buy Now</Button>
          </div>
        </div>
        </Col>
        <Col md={6} className="service-image-col-2 " style={{borderRadius: "184.5px 10px 10px 184.5px"}}>
          <img src={serviceImg} alt="service" className="service-image" />
        </Col>
      </Row>
    </div>
  );
};

export default Service;
