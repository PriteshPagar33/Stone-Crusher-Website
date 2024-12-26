import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Help.css';
import Exaccordian from './faqsmodify';
import ContactUs from './ContactC';

function Helps() {
    return (
        <>
            <div class="page-header">
        <Container>
        <Row>
            <Col>
              <h2>Help</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <Link to="/">Home</Link>
              <Link to="/help">Help</Link>
            </Col>
          </Row>
        </Container>
      </div>

            <Exaccordian />
            <ContactUs showHeading={false} />
        </>
    );
}

export default Helps;