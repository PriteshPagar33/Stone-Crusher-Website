import React from 'react';
import { useRef, useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Row, Col, Carousel,Button,Modal } from 'react-bootstrap'
import '../components/detailinfo.css'; // CSS file

function Machine(props) {
  const div1Ref = useRef(null);
  const div2Ref = useRef(null);
  const div3Ref = useRef(null);
  const div4Ref = useRef(null);

  //  sliding effect 
  const scrollToRef = (ref) => {
    window.scrollTo({ top: ref.current.offsetTop, behavior: 'smooth' });
  };
  // inquire Now button 
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  return (
    <div>
      {/* Machine  top bar  */}

      <Navbar bg="warning" expand="lg" className="p-3 navbar" style={{ color: '#030f27' }}>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto NavbarLink">
            <Nav.Link onClick={() => scrollToRef(div1Ref)} className="fw-bolder mx-4">{props.MachineName.toUpperCase()}</Nav.Link>
            <Nav.Link onClick={() => scrollToRef(div2Ref)} className="fw-bolder mx-4">FEATURES</Nav.Link>
            <Nav.Link onClick={() => scrollToRef(div3Ref)} className="fw-bolder mx-4">ADVANTAGES</Nav.Link>
            <Nav.Link onClick={() => scrollToRef(div4Ref)} className="fw-bolder mx-4">PLANT INSTALLATION</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>



      <div className="sliding-container">

        {/* machine page 1   */}
        <div ref={div1Ref} className="sliding-div">
          <div class='page1-container'>
            <div class="page1-container_content">
              <div class="page1-container_content_inner">
                <div class="page1-title">
                  <h1>{props.MachineName.toUpperCase()}</h1>
                </div>
                <div class="page1-par">
                  <p>
                    {props.MachineDescription}
                  </p>
                </div>
                <div class="page1-btns">
                  <Button variant="warning" onClick={handleShow} className=' py-2 px-2 page1-btns_more' >
                    <i className="fa fa-plus-square mr-5 danger "></i>
                    <span ms-2>  INQUIRE NOW</span>
                  </Button>
                  {/* modal for inquire now button */}
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <h1 className="text-center">INQUIRE NOW</h1>
                    </Modal.Header>
                    <Modal.Body>
                      <form>
                        <div className="mb-3">
                          <input type="text" className="form-control" placeholder="Name" />
                        </div>
                        <div className="mb-3">
                          <input type="text" className="form-control" placeholder="Phone Number" />
                        </div>
                        <div className="mb-3">
                          <input type="email" className="form-control" placeholder="Email" />
                        </div>
                        <div className="mb-3">
                          <textarea className="form-control" rows="3" placeholder="Message"></textarea>
                        </div>
                      </form>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="warning" onClick={handleClose}>
                        Close
                      </Button>
                      <Button variant="warning" onClick={handleClose}>
                        Submit
                      </Button>
                    </Modal.Footer>
                  </Modal>

                </div>
              </div>
            </div>
            <div class="page1-container_outer_img">
              <div class="page1-img-inner">
                <img src={props.Machineimg} alt="" class="page1-container_img" />
              </div>
            </div>
          </div>
          <div class="page1-overlay"></div>

        </div>


        {/*  page 2  */}

        <div ref={div2Ref} className="sliding-div page2" >

          <Container>
            <Row>
              <Col>
                <h1 className='text-center fw-bolder mt-5 ' style={{ color: "#faac09" }}>SUCCESS IN EVERY HARDNESS</h1>
                <p className='text-center my-4 fw-bold' style={{ color: "#030f27" }}>Wide range of crushing for soft to very hard materials. For various materials, crushing efficiency is increased by different jaw types. </p>
              </Col>
            </Row>
            <Row>
              <Col sm={12} md={12} lg={5}>

                <img className='img-fluid page2-img' src={props.Machineimg2} style={{ height: "600px", width: "450px" }}></img>


              </Col>
              <Col>

                <h6 className='fw-bold'>{props.MachineTitles.t1}</h6>
                <p>{props.MachineTitles.d1} </p>

                <h6 className='fw-bold '> {props.MachineTitles.t2}</h6>
                <p>{props.MachineTitles.d2}</p>

                <h6 className='fw-bold '>{props.MachineTitles.t3}</h6>
                <p>{props.MachineTitles.d3}</p>

                <h6 className='fw-bold '>{props.MachineTitles.t4}</h6>
                <p>{props.MachineTitles.d4}</p>

                <h6 className='fw-bold '>{props.MachineTitles.t5}</h6>
                <p>{props.MachineTitles.d5}</p>

                <h6 className='fw-bold '>{props.MachineTitles.t6}</h6>
                <p>{props.MachineTitles.d6}</p>

                <h6 className='fw-bold '>{props.MachineTitles.t7}</h6>
                <p>{props.MachineTitles.d7}</p>


              </Col>
            </Row>
          </Container>





        </div>




        {/* page 3 */}
        <div ref={div3Ref} className="sliding-div page3" >

{/* advantages */}

<Container>
<h1 className='text-center mb-5'> ADVANTAGES</h1>
<div className="advantages">
  
      <Container>
        <Row className="row">
          <Col md={6} id="accordion-1">
              <h1 className="card" style={{ animationDelay: "0.2s" }} >
                <span className='d-flex align-items-center'>{props.advantages.a1}</span>
              </h1>
              <h1 className="card" style={{ animationDelay: "0.3s" }} >
                <span className='d-flex align-items-center'>{props.advantages.a2}</span>
              </h1>
              <h1 className="card" style={{ animationDelay: "0.4s" }} >
                <span className='d-flex align-items-center'>{props.advantages.a3}</span>
              </h1>
              <h1 className="card" style={{ animationDelay: "0.5s" }} >
                <span className='d-flex align-items-center'>{props.advantages.a4}</span>
              </h1>
          </Col>
          
          <Col md={6} id="accordion-2">       
              <h1 className="card" style={{ animationDelay: "0.2s" }} >
                <span className='d-flex align-items-center'>{props.advantages.a5}</span>
              </h1>
            
              <h1 className="card" style={{ animationDelay: "0.3s" }} >
                <span className='d-flex align-items-center'>{props.advantages.a6}</span>
              </h1>      
              <h1 className="card" style={{ animationDelay: "0.4s" }} >
                <span className='d-flex align-items-center'>{props.advantages.a7}</span>
              </h1>
              <h1 className="card" style={{ animationDelay: "0.5s" }} >
                <span className='d-flex align-items-center'>{props.advantages.a8}</span>
              </h1>
          </Col>
        </Row>
      </Container>
    </div>
</Container>

        </div>

        {/* page 4 */}
        <div ref={div4Ref} className="sliding-div page4" >
          <Container fluid >
            <h1 className='text-center my-5 ' >PLANT INSTALLATION</h1>
            <Carousel>
              <Carousel.Item>
                <img 
                  className="d-block w-100"
                  src={props.carousel.c1}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={props.carousel.c2}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={props.carousel.c3}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </Container>

        </div>


      </div>
    </div >
  );
}

export default Machine;
