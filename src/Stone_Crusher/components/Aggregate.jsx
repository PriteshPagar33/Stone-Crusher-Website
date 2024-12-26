import React from 'react';
import { Container, Row, Col,  Table } from 'react-bootstrap';
// import './Services.css'; 
import img11 from '../assets/aggregateimg.jpg';

const Aggregate = () => {
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
            <h2 className='Head2'>Aggregate</h2>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <img className='imageagg' src={img11} alt="Material" />
        </Col>
        <Col>
          <h2 className='Aggregate'>What is Aggregate?</h2>
          <p1>Stone aggregate" typically refers to a construction material composed of crushed stone,
            gravel, sand, or recycled concrete that is mixed with a binding agent such as cement to create
            concrete or asphalt. It is widely used in construction for various purposes, including</p1>
          <p2><span className="bold-word">Concrete:</span>  Stone aggregate is a key component of concrete, providing strength and durability to
            the final product. It is mixed with cement, water, and sometimes other additives to form concrete
            for use in foundations, roads, bridges, buildings, and other structures.</p2>
          <p3><span className="bold-word">Landscaping:</span> Stone aggregate can be used in landscaping projects for pathways, patios, decorative features,
            and drainage solutions. Different types and sizes of stone aggregate can create various aesthetic effects.</p3>
          <p4><span className="bold-word">Drainage:</span> Stone aggregate is often used as a drainage material in construction projects, such as for French drains,
            septic systems, and stormwater management systems. Its permeable nature allows water to flow through it, reducing the
            risk of flooding and erosion.</p4>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 className='tablespec'>Product Specifications</h2>
          <div className="table-container"> {/* Add a container for the table */}
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
                  <td>Free</td>
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

export default Aggregate;
