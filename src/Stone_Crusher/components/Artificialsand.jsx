import React from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
// import './Services.css'; 
import img12 from '../assets/artificialsand.jpg';

const Artificial = () => {
  return (
    <Container fluid className="materials-page">
      <Row>
        <Col>
          <h1 className='Head'>Materials</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="Head2-container">
            <h2 className='Head2'>Washed Sand</h2>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <img className='imageagg' src={img12} alt="Material" />
        </Col>
        <Col>
          <h2 className='Aggregate'>What is Washed Sand?</h2>
          <p1>Artificial sand, also known as manufactured sand or crushed sand, is a type of sand that is produced by crushing rocks, quarry stones,
             or larger aggregates into smaller pieces. It is typically produced to meet the specifications of construction projects where natural sand
              may be scarce or of inferior quality. Here's some detailed information about artificial sand:</p1>
              <p3><span className="bold-word" style={{fontWeight:'bolder',fontFamily:'cursive'}}>Production Process:</span> </p3>
          <p2><span className="bold-word">Crushing:  </span> Natural rocks or quarry stones are crushed using various types of crushers, such as jaw crushers,
           cone crushers, or impact crushers, to produce smaller particles. </p2>
          <p4><span className="bold-word"> Screening</span>The crushed material is then screened to remove oversized particles and ensure uniformity in size.</p4>
          <p4><span className="bold-word">Washing:</span> In some cases, the crushed material may undergo a washing process to remove impurities and ensure cleanliness.</p4>
           
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 className='tablespec'>Product Specifications</h2>
          <div className="table-container"> 
            <Table striped bordered hover className="spec-table">
              <thead>
                <tr>
                  <th>Property</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Packaging Size</td>
                  <td>10 brass</td>
                </tr>
                <tr>
                  <td>Material Type</td>
                  <td>Crushed Stone</td>
                </tr>
                <tr>
                  <td>Size</td>
                  <td>Free</td>
                </tr>
                <tr>
                  <td>Application</td>
                  <td>Construction, Landscaping, Drainage</td>
                </tr>
                <tr>
                  <td>Minimum Order Quantity</td>
                  <td>12 brass</td>
                </tr>
              </tbody>
            </Table>
          </div>

        </Col>
        <Col>
        <div className="price-tag">
        <p className="price">₹<span class="blurry">3000</span></p>
            <p className="unit">per brass</p>
          </div>
        </Col>
      

      </Row>
     
       

    </Container>
  );
};

export default Artificial;
