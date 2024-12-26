import React from 'react';
// import axios from 'axios';
import { useState } from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contact.css';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import PhoneCallButton from './PhonecallBtn'


const ContactUs = () => {

  const [validated, setValidated] = useState(false);

  // const [cname, setName] = useState("");
  // const [cemail, setEmail] = useState("");
  // const [csubject, setSub] = useState("");
  // const [cmessg, setMessg] = useState("");

  // axios.post("http://localhost:5757/putd", {
  //   Cname: cname,
  //   Cemail: cemail,
  //   Csubject: csubject,
  //   Cmessage: cmessg,
  // });



  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const subject = form.subject.value;
    const message = form.message.value;

    if (name && email && subject && message) {
      alert('Message sent successfully');
      form.reset();
    } else {
      alert('Please fill out all fields');
    }
  };

  return (
    <>
      {/* page header */}
      <div class="page-header">
        <Container>
          <Row>
            <Col>
              <h2>ContactUs</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <Link to="/">Home</Link>
              <Link to="/contactpage">ContactUs</Link>
            </Col>
          </Row>
        </Container>
      </div>
      <PhoneCallButton/>

      {/* contact */}
      <div className="contact wow fadeInUp">
        <Container>
          <div className="section-header text-center">
            <p>Get In Touch</p>
            <h2>For Any Query</h2>
          </div>
          <Row>
            <Col md={6}>
              <div className="contact-info">
                <ContactItem iconClass="fa-solid fa-location-dot" title="Location" text="Deola Nagar Panchyat , Shopping Centre ,5 Kandil,  Deola - 431 523" />
                <ContactItem iconClass="fas fa-phone" title="Phone" text="9970446795 / 9665200356" />
                <ContactItem iconClass="fas fa-envelope" title="Email" text="ssjiltd@gmail.com" />
              </div>
            </Col>

            {/* form */}
            <Col md={6}>
              <div className="contact-form">
                <Form onSubmit={handleSubmit} name="sentMessage" id="contactForm" noValidate>
                  <Form.Group controlId="name">
                    <Form.Control type="text" placeholder="Enter your name" required 
                // value={cname}
                // onChange={(e) => setName(e.target.value)}
                />
                    <Form.Control.Feedback type="invalid">Please enter your name</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group controlId="email">
                    <Form.Control type="email" placeholder="Enter your email" required 
                      // value={cemail}
                      // onChange={(e) => setEmail(e.target.value)}
                      />
                    <Form.Control.Feedback type="invalid">Please enter your email</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group controlId="subject">
                    <Form.Control type="text" placeholder="Enter subject" required 
                    //  value={csubject}
                    //  onChange={(e) => setSub(e.target.value)}
                     />
                    <Form.Control.Feedback type="invalid">Please enter a subject</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group controlId="message">
                    <Form.Control as="textarea" rows={3} placeholder="Enter your message" required style={{ resize: "none" }}  
                    // value={cmessg}
                    //  onChange={(e) => setMessg(e.target.value)}
                      />
                    <Form.Control.Feedback type="invalid" >Please enter your message</Form.Control.Feedback>
                  </Form.Group>
                  <Button variant="primary" type="submit">Send Message</Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

const ContactItem = ({ iconClass, title, text }) => {
  return (
    <div className="contact-item">
      <i className={iconClass}></i>
      <div className="contact-text">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};
export default ContactUs;

