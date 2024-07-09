import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/Footer.css';
import logo from '../Assets/logo.svg'; 
import namelogo from '../Assets/namelogo.svg' // Update the path to your logo

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="justify-content-center">
          <Col className="text-center">
            <p>©2024. Crafted with <span className="heart">❤️</span> Supported by <img src={logo} alt="Khojo" className="footer-logo" /> <img src={namelogo} alt="" className="footer-namelogo"/></p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
