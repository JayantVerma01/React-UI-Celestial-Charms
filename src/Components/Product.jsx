import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import data from './Data';
import '../CSS/Product.css';

const Product = () => {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleViewAll = () => {
    setShowAll(!showAll);
  };

  return (
    <Container className="product-container">
      <Row className="align-items-center justify-content-between">
        <Col>
          <h1>Products</h1>
        </Col>
        <Col xs="auto">
          <Button variant="link" onClick={handleViewAll} className="view-all">
            {showAll ? "View less" : "View all"}
          </Button>
        </Col>
      </Row>
      <Row>
        
        {data.slice(0, isMobile && !showAll ? 4 : data.length).map(item => (
          <Col key={item.id} xs={6} sm={6} md={4} lg={3} className="mb-4">
            <Card className="product-card">
              <Card.Img variant="top" src={item.image} alt={item.title} />
              <Card.Body className='card-d'>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text className="desc">{item.desc}</Card.Text>
                <Card.Text className="price">{item.price}</Card.Text>
                <div className="buttons">
                  <Button variant="outline-primary" className="add-to-cart">Add to Cart</Button>
                  <Button variant="primary" className="buy-now">Buy Now</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Product;
