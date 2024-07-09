import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../CSS/NavB.css';

const NavB = () => {
  return (
    <Navbar bg="light" expand="lg" className="navbar-custom">
      <Container>
        <Navbar.Brand href="#home" className="navbar-brand-custom">CelestialCharms</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='toggle-icon' />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="mr-auto nav-items">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#product">Product</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#gallery">Gallery</Nav.Link>
            <Nav.Link href="#contact">Contact Us</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#cart" className="nav-icon"><i className="fas fa-shopping-cart"></i></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavB;
