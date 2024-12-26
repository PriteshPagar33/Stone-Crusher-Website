import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TermsofUse.css';
import { Link } from 'react-router-dom';

const TermsOfUse = () => {
  return (
    <>
      <div class="page-header">
        <Container>
        <Row>
            <Col>
              <h2>Terms Of Use</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <Link to="/">Home</Link>
              <Link to="/terms-of-use">Terms Of Use</Link>
            </Col>
          </Row>
        </Container>
      </div>
      <div class= "containers">
      <Container>
        <Row>
          <Col>
            <h1>Terms of Use</h1>
            <p>Welcome to SS Jupiter Infra Limited, Stone Crusher Plant Website ("the Website name"). These Terms of Use govern your access to and use of the Website. By accessing or using the Website, you agree to be bound by these Terms of Use. If you do not agree with these terms, please do not use the Website.</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>1. Acceptance of Terms</h2>
            <p>By accessing or using the Website, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use, as well as any additional terms and conditions that may apply to specific features or services offered on the Website.</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>2. Use of the Website</h2>
            <h3>2.1 Eligibility</h3>
            <p>You must be of legal age and have the legal capacity to enter into agreements to use the Website.</p>
            <h3>2.2 Permitted Use</h3>
            <p>You may use the Website for lawful purposes only. You agree not to use the Website for any illegal or unauthorized purpose, including but not limited to the infringement of intellectual property rights or the transmission of harmful or offensive content.</p>
            <h3>2.3 Compliance</h3>
            <p>You agree to comply with all applicable laws, regulations, and third-party agreements while using the Website.</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>3. Intellectual Property</h2>
            <h3>3.1 Ownership</h3>
            <p>All content, materials, and intellectual property displayed or made available on the Website, including but not limited to text, graphics, logos, images, and software, are the property of SS Jupiter Infra Limited or its licensors and are protected by copyright, trademark, and other intellectual property laws.</p>
            <h3>3.2 License</h3>
            <p>Subject to these Terms of Use, SS Jupiter Infra Limited grants you a limited, non-exclusive, non-transferable license to access and use the Website for your personal or internal business purposes.</p>
            <h3>3.3 Restrictions</h3>
            <p>You may not reproduce, modify, distribute, display, perform, or create derivative works of any content on the Website without prior written consent from SS Jupiter Infra Limited.</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>4. User Conduct</h2>
            <h3>4.1 Prohibited Activities</h3>
            <p>You agree not to engage in any conduct that may disrupt, damage, or impair the functionality of the Website or interfere with other users' access to the Website.</p>
            <h3>4.2 Compliance with Laws</h3>
            <p>You agree to use the Website in compliance with all applicable laws, regulations, and industry standards.</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>5. Disclaimer of Warranties</h2>
            <p>The Website is provided on an "as is" and "as available" basis, without any warranties of any kind, express or implied.SS Jupiter Infra Limited makes no representations or warranties regarding the accuracy, completeness, reliability, or suitability of the Website for any purpose.</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>6. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, SS Jupiter Infra Limited shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in any way related to your use of the Website, whether based on contract, tort, negligence, strict liability, or any other legal theory.</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>7. Indemnification</h2>
            <p>You agree to indemnify, defend, and hold harmless SS Jupiter Infra Limited and its affiliates, officers, directors, employees, agents, and licensors from and against any and all claims, damages, losses, liabilities, costs, and expenses arising out of or in any way related to your use of the Website or violation of these Terms of Use.</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>8. Governing Law and Jurisdiction</h2>
            <p>These Terms of Use shall be governed by and construed in accordance with the laws of MPCB, without regard to its conflicts of law principles. Any dispute arising out of or in connection with these Terms of Use shall be subject to the exclusive jurisdiction of the courts of MPCB.</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>9. Changes to Terms of Use</h2>
            <p>SS Jupiter Infra Limited reserves the right to update or modify these Terms of Use at any time without prior notice. By continuing to use the Website after such changes are posted, you agree to be bound by the revised terms.</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>10. Contact Information</h2>
            <p>If you have any questions or concerns about these Terms of Use, please <Link to="/contactpage" className="contact-link">Contact Us </Link></p>
          </Col>
        </Row>
      </Container>
      </div>
    </>
  )
}
export default TermsOfUse;