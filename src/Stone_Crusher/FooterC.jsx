import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faLinkedinIn, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';

import './Footers.css';

const FooterC= () => {
    const navigate = useNavigate()
    return (
        <div className="footer wow fadeIn" data-wow-delay="0.3s">
            <Container>
                <Row>
                    <Col md={6} lg={3}>
                        <div className="footer-contact">
                            <h2>Office Contact</h2>
                            <p>Deola Nagar Panchyat , Shopping Centre ,5 Kandil,  Deola - 431 523</p>
                            <p>9970446795 / 9665200356</p>
                            <p><FontAwesomeIcon icon="envelope"/> ssjiltd@gmail.com</p>
                            <div className="footer-social">
                                <Link to=""><FontAwesomeIcon icon={faTwitter} /></Link>
                                <Link to=""><FontAwesomeIcon icon={faFacebookF} /></Link>
                                <Link to=""><FontAwesomeIcon icon={faLinkedinIn} /></Link>
                                <Link to=""><FontAwesomeIcon icon={faInstagram} /></Link>
                                <Link to=""><FontAwesomeIcon icon={faYoutube} /></Link>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg={3}>
                        <div className="footer-link">
                            <h2>Services Areas</h2>
                            <Link to="/Aggregate10mm">Aggregate10mm</Link>
                            <Link to="/Aggregate20mm">Aggregate20mm</Link>
                            <Link to="/Aggregate30mm">Aggregate30mm </Link>
                            <Link to="/Washedsand">Washedsand</Link>
                            <Link to="/Artificialsand">Artificialsand</Link>
                        </div>
                    </Col>
                    <Col md={6} lg={3}>
                        <div className="footer-link">
                            <h2>Useful Pages</h2>
                            <Link to="/aboutpage">About Us</Link>
                            <Link to="/contactpage">Contact Us</Link>
                            <Link to="/teampage">Our Team</Link>
                            <Link to="/servicepage">Services</Link>
                            <Link to="/gallerypage">Gallery</Link>
                        </div>
                    </Col>
                    <Col md={6} lg={3}>
                        <div className="newsletter">
                            <h2>Newsletter</h2>
                            <p>Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulpu</p>
                            <form className="form">
                                <input className="form-control" placeholder="Email here" />
                                <Button onClick={() => navigate('/NewsLetter')} className="btn">Submit</Button>
                            </form>
                        </div>

                    </Col>
                </Row>
            </Container>
            <Container className="footer-menu">
                <div className="f-menu">
                    <Link to="/terms-of-use">Terms of Use</Link>
                    <Link to="/privacy-policy">Privacy Policy</Link>
                    <Link to="/cookies-policy">Cookies</Link>
                    <Link to="/help">Help</Link>
                    <Link to="/faqs">FAQs</Link>
                </div>
            </Container>
            <Container className="copyright">
                <Row>
                    <Col md={6}>
                        <p>&copy; <Link to="/">SS Jupiter Infra Limited</Link>, All Right Reserved.</p>
                    </Col>
                    <Col md={6}>
                        <p>Made with ❤️ by Pritesh Pagar and  <Link to="">Build Site Crew</Link></p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default FooterC;

