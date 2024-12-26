import React from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
// import './Services.css'; 
import img12 from '../assets/aggregate30mm.jpg';

const aggregate30mm = () => {
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
            <h2 className='Head2'>Crushed Stone Aggregate 30mm</h2>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <img className='imageagg' src={img12} alt="Material" />
        </Col>
        <Col>
          <h2 className='Aggregate'>What is Crushed Stone Aggregate 30mm?</h2>
          <p1>When we refer to "30mm aggregate," it means that the average diameter of the crushed stones is approximately 30 millimeters.
             As with other aggregates, there can be slight variations in size, and the aggregate may contain stones ranging from 20mm to 30mm in diameter.</p1>
          <p2><span className="bold-word">Concrete Mixing:</span> 30mm aggregate is commonly used in concrete mixes, especially for structures where
           larger stone sizes are preferred. It provides bulk and stability to concrete while ensuring proper bonding with cement paste.  </p2>
          <p3><span className="bold-word">Road Construction:</span> As a base material, 30mm crushed stone aggregate provides a stable foundation for roads, 
          highways, and other transportation infrastructure. It helps to distribute the load of traffic evenly and withstands heavy loads.</p3>
          <p4><span className="bold-word">Drainage Systems:</span>  In drainage applications, 30mm aggregate can be used as backfill material around 
          drainage pipes or in trenches. Its permeable nature allows water to flow through easily, preventing waterlogging and soil erosion.</p4>
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
                  <td>30mm</td>
                </tr>
                <tr>
                  <td>Material Type</td>
                  <td>Crushed Stone</td>
                </tr>
                <tr>
                  <td>Size</td>
                  <td>30mm</td>
                </tr>
                <tr>
                  <td>Application</td>
                  <td>Construction, Landscaping, Drainage</td>
                </tr>
                <tr>
                  <td>Minimum Order Quantity</td>
                  <td>10 Cubic Meter</td>
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

export default aggregate30mm;
