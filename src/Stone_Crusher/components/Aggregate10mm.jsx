import React from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
// import './Services.css'; 
import img12 from '../assets/aggregate10mm.jpg';

const aggregate10mm = () => {
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
            <h2 className='Head2'>Crushed Stone Aggregate 10mm</h2>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <img className='imageagg' src={img12} alt="Material" />
        </Col>
        <Col>
          <h2 className='Aggregate'>What is Crushed Stone Aggregate 10mm?</h2>
          <p1>Crushed stone aggregate, often referred to simply as "aggregate," is a construction material made by crushing large rocks or boulders
             to create smaller pieces. These pieces can vary in size depending on the intended use, and the term "10mm aggregate" specifies the size
              of the individual stones.</p1>
          <p2><span className="bold-word">Concrete Mixing:</span>Aggregates are a crucial component of concrete, making up the majority of its volume.
           The 10mm aggregate is commonly used in concrete mixes to provide bulk and stability while allowing for proper bonding with cement paste.  </p2>
          <p3><span className="bold-word">Road Construction:</span> Crushed stone aggregate is used as a base material in road construction projects.
           It provides a stable foundation for the layers above, such as asphalt or concrete, and helps to distribute the load of traffic evenly.</p3>
          <p4><span className="bold-word">Drainage Systems:</span>  In drainage systems, 10mm aggregate is often used as a backfill material around pipes 
          or in trenches. Its permeable nature allows water to flow through easily while providing support and preventing soil erosion.</p4>
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
                  <td>10mm</td>
                </tr>
                <tr>
                  <td>Material Type</td>
                  <td>Crushed Stone</td>
                </tr>
                <tr>
                  <td>Size</td>
                  <td>10mm</td>
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

export default aggregate10mm;
