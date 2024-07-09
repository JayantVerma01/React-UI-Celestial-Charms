import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import '../CSS/Gallery.css'; // Make sure this path is correct
import three from '../Assets/three.png';
import header from '../Assets/header.png';
import two from '../Assets/two.png';

const Gallery = () => {
  return (
    <Container className='gallery-main'>
      <Row className='gallery-header'>
        <Col xs={8} md={6}>
          <h1 className='gallery-heading'>Gallery</h1>
        </Col>
        <Col xs='auto'>
        <Button variant="link" className="view-btn">View all</Button>
        </Col>
      </Row>
      <Row className='gallery-images'>
        <Col xs={4} md={4} className='gallery-col'>
          <img src={three} alt="Ring 1" className='gallery-image' />
        </Col>
        <Col xs={4} md={4} className='gallery-col'>
          <img src={header} alt="Ring 2" className='gallery-image' />
        </Col>
        <Col xs={4} md={4} className='gallery-col'>
          <img src={two} alt="Earrings" className='gallery-image' />
        </Col>
      </Row>
    </Container>
  );
};

export default Gallery;
