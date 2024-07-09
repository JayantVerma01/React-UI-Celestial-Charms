import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/GetInTouch.css';
import phone from '../Assets/phone.svg';
import mail from '../Assets/mail.svg';
import WA from '../Assets/WA.png';
import IG from '../Assets/IG.png';
import FB from '../Assets/FB.png';
import YT from '../Assets/YT.png';
import QR from '../Assets/QR.jpg';
import UPI from '../Assets/UPI.png';
import PAYTM from '../Assets/paytm.svg';
import Phonepay from '../Assets/Phonepay.png';

const GetInTouch = () => {
  return (
    <div className="get-in-touch-main">
      <h1 className="git-head text-center">Get in Touch</h1>
      <Row className="justify-content-center">
        <Col md={8} lg={6} className="contact-box">
          <div className="contact-info">
            <p className="contact-item"><img src={phone} alt="Phone" />Phone: +91 9351758536</p>
            <p className="contact-item"><img src={mail} alt="Email" />Email: hello@khojorightnow.com</p>
            <p className="contact-item">Address: ABHYAM, C-121 A, Opp Jyoti Nagar Thana, near Rajasthan Vidhan Sabha, Jaipur, Rajasthan 302015</p>
          </div>
          <div className="icons">
            <img src={WA} alt="WhatsApp" className="icon" />
            <img src={IG} alt="Instagram" className="icon" />
            <img src={FB} alt="Facebook" className="icon" />
            <img src={YT} alt="YouTube" className="icon" />
          </div>
          <p className="StP text-center">Scan to pay</p>
          <div className="text-center">
            <img src={QR} alt="QR Code" className="img-qr" />
          </div>
          <div className="payment-icons text-center">
            <img src={UPI} alt="UPI" className="payment-icon" />
            <img src={PAYTM} alt="Paytm" className="payment-icon" />
            <img src={Phonepay} alt="PhonePe" className="payment-icon" />
          </div>
          <Form>
            <Form.Group controlId="formName" className="form-group">
              <Form.Control type="text" className="form-control" placeholder="Your Name*" />
            </Form.Group>
            <Form.Group controlId="formPhone" className="form-group">
              <Form.Control type="text" className="form-control" placeholder="Your Phone*" />
            </Form.Group>
            <Form.Group controlId="formEmail" className="form-group">
              <Form.Control type="email" className="form-control" placeholder="Your Email*" />
            </Form.Group>
            <Form.Group controlId="formMessage" className="form-group">
              <Form.Control as="textarea" className="form-control" placeholder="Your Message*" rows={4} />
            </Form.Group>
            <div className='sm'>
            <Button variant="primary" type="submit" className="message-btn">
              Send Message
            </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default GetInTouch;
