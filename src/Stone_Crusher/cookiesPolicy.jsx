import React,{useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './cookiesPolicy.css';
import { Link } from 'react-router-dom';

const CookiesPolicy = () => {
  
  return (
    <>
      <div class="page-header">
        <Container>
        <Row>
            <Col>
              <h2>Cookies Policies</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <Link to="/">Home</Link>
              <Link to="/cookies-policy">Cookies Policy</Link>
            </Col>
          </Row>
        </Container>
      </div>
      <div class= "conta">
        <Container>
          <Row>
            <Col>
              <h1>Cookies Policy</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <h2>1. What Are Cookies</h2>
              <p>Cookies are small pieces of text sent by your web browser by a website you visit. A cookie file is stored in your web browser and allows the Service or a third-party to recognize you and make your next visit easier and the Service more useful to you.</p>
              <p>Cookies can be "persistent" or "session" cookies. Persistent cookies remain on your personal computer or mobile device when you go offline, while session cookies are deleted as soon as you close your web browser.</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h2>2. How We Use Cookies</h2>
              <p>When you use and access the Service, we may place a number of cookies files in your web browser.</p>
              <h5>We Use Cookies For The Following Purposes:</h5>
              <ul>
                <li>To enable certain functions of the Service</li>
                <li>To provide analytics</li>
                <li>To store your preferences</li>
                <li>To enable advertisements delivery, including behavioral advertising</li>
                <li>We use both session and persistent cookies on the Service</li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col>
              <h2>3. Your Choices Regarding Cookies</h2>
              <p>If you'd like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the help pages of your web browser.</p>
              <p>Please note, however, that if you delete cookies or refuse to accept them, you might not be able to use all of the features we offer, you may not be able to store your preferences, and some of our pages might not display properly.</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h2>4. Contact Us</h2>
              <p>If you have any questions about this Cookies Policy, please  <Link to="/contactpage" className="contact-link">Contact Us </Link></p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}
export default CookiesPolicy;