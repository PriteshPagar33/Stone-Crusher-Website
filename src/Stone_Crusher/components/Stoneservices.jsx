import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Services.css'; 
import { Link } from 'react-router-dom';

import img1 from '../assets/aggregateimg.jpg';
import img2 from '../assets/aggregate10mm.jpg';
import img3 from '../assets/aggregate20mm.jpg';
import img4 from '../assets/aggregate30mm.jpg';
import img5 from '../assets/washedsand.jpg';
import img6 from '../assets/artificialsand.jpg';

const ServicesPage = () => {
  return (
    <>
     {/* <!-- Page Header Start --> */}
          
     <div className="page-header">
     <Container fluid>
       <Row>
         <Col>
           <h2>Our Services</h2>
         </Col>
       </Row>
       <Row>
         <Col>
           <a href="/">Home</a>
           <a href="">Our Services</a>
         </Col>
       </Row>
     </Container>
   </div>
         {/* <!-- Page Header End --> */}

    <div className="page-container">  
      <Container fluid>
       
        <Row>
          <Col md={6} sm={6}>
            <Card className="service-card-left">
              <Card.Img variant="top" src={img1} />
              <Card.Body>
                <Card.Title>Aggregate</Card.Title>
                <Card.Text>
                Aggregate stone, often referred to simply as "aggregate,"
                 is a broad category of coarse to medium-grained particulate
                  material used in construction.providing strength, stability, and 
                  durability to the final structure. 
                </Card.Text>
                <center>
                  <Link to="/Aggregate"> 
                    <Button variant="dark" className="view-more-btn">View More</Button>
                  </Link>
                </center>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} sm={6}>
            <Card className="service-card-right">
              <Card.Img variant="top" src={img2} />
              <Card.Body>
                <Card.Title>Aggregate10mm</Card.Title>
                <Card.Text>
                Aggregate 10 mm refers to a specific type of aggregate stone
                 that has been graded to have a maximum particle size of 10 millimeters (mm).
                 The properties of aggregate 10 mm will depend on factors such as the source. 
                </Card.Text>
                <center>
                  <Link to="/Aggregate10mm"> 
                    <Button variant="dark" className="view-more-btn">View More</Button>
                  </Link>
                </center>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={6} sm={6}>
            <Card className="service-card-left">
              <Card.Img variant="top" src={img3} />
              <Card.Body>
                <Card.Title>Aggregate20mm</Card.Title>
                <Card.Text>
                Aggregate 20 mm is a specific type of coarse aggregate commonly
                 used in construction. 
                It refers to aggregate particles with a maximum size of 20 millimeters (mm).
                </Card.Text>
                <center>
                  <Link to="/Aggregate20mm"> 
                    <Button variant="dark" className="view-more-btn">View More</Button>
                  </Link>
                </center>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} sm={6}>
            <Card className="service-card-right">
              <Card.Img variant="top" src={img4} />
              <Card.Body>
                <Card.Title>Aggregate30mm</Card.Title>
                <Card.Text>
                Aggregate 30 mm refers to a specific type of coarse aggregate used in construction,
                 characterized by a maximum particle size of 30 millimeters (mm). 
                 This size of stone aggregate is often used in construction projects.
                </Card.Text>
                <center>
                  <Link to="/Aggregate30mm"> 
                    <Button variant="dark" className="view-more-btn">View More</Button>
                  </Link>
                </center>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={6} sm={6}>
            <Card className="service-card-left">
              <Card.Img variant="top" src={img5}/>
              <Card.Body>
                <Card.Title>Washedsand</Card.Title>
                <Card.Text>
                Wash sand" typically refers to sand that has been washed to remove impurities,
                 such as dust, clay, silt, and organic matter, resulting in cleaner
                  and more uniform particles. 
                </Card.Text>
                <center>
                  <Link to="/Washedsand"> 
                    <Button variant="dark" className="view-more-btn">View More</Button>
                  </Link>
                </center>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} sm={6}>
            <Card className="service-card-right">
              <Card.Img variant="top" src={img6} />
              <Card.Body>
                <Card.Title>Artificialsand</Card.Title>
                <Card.Text>
                Artificial sand, also known as manufactured sand or crushed sand,
                 is a type of sand that is produced by crushing rocks, quarry stones,
                  or larger aggregates into smaller particles.
                </Card.Text>
                <center>
                  <Link to="/Artificialsand"> 
                    <Button variant="dark" className="view-more-btn">View More</Button>
                  </Link>
                </center>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
    </>
  );
};

export default ServicesPage;
