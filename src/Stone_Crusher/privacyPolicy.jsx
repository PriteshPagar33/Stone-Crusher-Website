import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './privacypolicy.css'

const PrivacyPolicy = () => {
  const [agreed, setAgreed] = useState(false);
  const handleAgree = () => {
    const termsAgreed = document.getElementById('termsAgreed').checked;
    const ageAgreed = document.getElementById('ageAgreed').checked;
    if (termsAgreed && ageAgreed) {
      alert('Thank you for agreeing to the Privacy Policy.');
      document.getElementById('termsAgreed').checked = false;
      document.getElementById('ageAgreed').checked = false;
    } else {
      alert('Please check both checkboxes to agree to the Privacy Policy.');
    }
  };
  
  return (
    <>
       <div class="page-header">
        <Container>
        <Row>
            <Col>
              <h2>Privacy Policies</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <Link to="/">Home</Link>
              <Link to="/terms-of-use">Privacy Policy</Link>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="contain">
        <Container>
          <Row>
            <Col>
              <h1>Privacy Policy</h1>

              <h3>Effective Date: [date]</h3>
              <p>Thank you for visiting [website name]. This Privacy Policy explains how we collect, use, share, and protect information obtained from visitors to our website.</p>

              <h2>Information Collection</h2>
              <p>We collect various types of information, including:</p>
              <ul>
                <li>Personal information provided voluntarily through contact forms, such as name, email address, and phone number.</li>
                <li>Automatically collected non-personal information, such as IP address, browser type, and device information, through cookies and similar technologies.</li>
              </ul>

              <h2>Use of Information</h2>
              <p>The information we collect is used for:</p>
              <ul>
                <li>Providing and improving our services.</li>
                <li>Communicating with visitors and responding to inquiries.</li>
                <li>Customizing the user experience.</li>
                <li>Sending promotional materials and marketing communications, where permitted by law.</li>
              </ul>

              <h2>Information Sharing</h2>
              <p>We may share information with:</p>
              <ul>
                <li>Service providers who assist us in operating our website and providing services.</li>
                <li>Business partners for marketing and promotional purposes, with consent.</li>
                <li>Legal authorities in response to legal requests or to comply with applicable laws and regulations.</li>
              </ul>
              <p>We take measures to protect shared information, including contractual agreements and data protection standards.</p>

              <h2>Data Security</h2>
              <p>We implement security measures to safeguard collected information, including encryption, firewalls, and access controls. We are committed to maintaining the security and confidentiality of visitor information.</p>

              <h2>User Rights</h2>
              <p>Visitors have the right to access, update, and delete their personal information. To exercise these rights or for inquiries regarding your data, please contact us using the information provided below.</p>

              <h2>Cookies</h2>
              <p>Our website uses cookies to enhance the user experience. You can manage cookie preferences through your browser settings.</p>

              <h2>Third-Party Links</h2>
              <p>Our website may contain links to third-party websites. This Privacy Policy applies only to our website, and we are not responsible for the privacy practices of external sites.</p>

              <h2>Updates to Privacy Policy</h2>
              <p>We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. Visitors will be notified of any material changes through our website.</p>

              <h2>Contact Information</h2>
              <p>For inquiries or concerns regarding our Privacy Policy, please  <Link to="/contactpage" className="contact-link">Contact Us </Link></p>

              <h2>Legal Compliance</h2>
              <p>We comply with relevant privacy laws and regulations applicable to our operations. This Privacy Policy operates under the jurisdiction of MPCB.</p>
            </Col>
          </Row>
        </Container>
      </div>

      {!agreed && (
        <div className="agree-section">
          <Container>
            <Row>
              <Col>
              <Button className="agree-button" variant="success" onClick={handleAgree}>Agree to Privacy Policy</Button>
                <p>
                  <input type="checkbox" id="termsAgreed" className="checkbox-input" />
                  <label htmlFor="termsAgreed" className="checkbox-label">I have read and agree to the terms outlined in the Privacy Policy.</label>
                </p>
                <p>
                  <input type="checkbox" id="ageAgreed" className="checkbox-input" />
                  <label htmlFor="ageAgreed" className="checkbox-label">I am of legal age and have the legal capacity to agree to the Privacy Policy.</label>
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </>
  );
}
export default PrivacyPolicy;
