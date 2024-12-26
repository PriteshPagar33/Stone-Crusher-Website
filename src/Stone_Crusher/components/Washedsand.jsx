import React from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
// import './Services.css'; 
import img12 from '../assets/washedsand.jpg';

const washedsand = () => {
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
          <p1>Washed sand is obtained by washing natural sand or manufactured sand (such as crushed sand) to remove dust, silt, clay,
             and other impurities that may affect its quality and performance in construction applications.</p1>
          <p2><span className="bold-word">Process: </span> The washing process typically involves passing the sand through a series of screens and 
          classifiers to remove particles of different sizes and densities. Water is used to wash away fine particles and impurities, leaving behind
           clean sand with uniform particle size and shape. </p2>
          <p3><span className="bold-word" style={{fontWeight:'bolder',fontFamily:'cursive'}}>Characteristics:</span> </p3>
          <p4><span className="bold-word">Cleanliness: </span>Washed sand is free from contaminants like dust, clay, and organic matter, making 
          it suitable for use in construction where cleanliness is crucial.</p4>
          <p4><span className="bold-word">Particle Size:</span> Washed sand typically has a consistent particle size distribution, which ensures better
           compaction and stability in construction applications.</p4>
           
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
                  <td>12</td>
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

export default washedsand;
