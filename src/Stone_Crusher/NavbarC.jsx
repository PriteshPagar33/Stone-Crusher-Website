import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./project.css";
import im1 from "./Imgs/calendar.png";
import im2 from "./Imgs/custo-service.png";
// import im3 from "./Imgs/logo_page_bg.png"
import  { useEffect } from 'react';
import { Link } from 'react-router-dom';


function NavbarC() {
    useEffect(() => {
        const handleScroll = () => {
          const topBar = document.getElementById('topBar');
          const navbar = document.querySelector('.nav-bar');
          const navbarHeight = navbar.offsetHeight;
          const topBarHeight = topBar.offsetHeight;
          if (window.scrollY > topBarHeight) {
            navbar.classList.add('nav-sticky');
          } else {
            navbar.classList.remove('nav-sticky');
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        // Cleanup
        return () => window.removeEventListener('scroll', handleScroll);
      }, []); 
  return (
    <div>
         {/* top-bar */}
      <div className="top-bar" id="topBar">
        <Container fluid>
          <Row className="align-items-center" >
            <Col lg={4} md={12}>
              <div className="logo">
                <a href="index.html">
                  <h1>SS JUPITER</h1>
                </a>
              </div>
            </Col>
            
            <Col lg={8} md={12} className="d-none d-lg-block">
              <Row>
                <Col>
                  <div className="top-bar-item">
                    <div className="top-bar-icon">
                      <img src={im1} alt="" height={"40px"} />
                      {/* <img src={im3} height={"150px"} width={"150px"} id='sslogo'/> */}
                    </div>
                    <div className="top-bar-text">
                      <h3>Opening Hour</h3>
                      <p>Mon - Fri, 8:00 - 9:00</p>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="top-bar-item">
                    <div className="top-bar-icon">
                      <img src={im2} alt="" height={"40px"} />
                    </div>
                    <div className="top-bar-text">
                      <h3>Call Us</h3>
                      <p>(0253) 3590624</p>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="top-bar-item">
                    <div className="top-bar-icon">
                      <img
                        src="https://cdn-icons-png.flaticon.com/128/555/555012.png"
                        alt=""
                        height={"40px"}
                      />
                    </div>
                    <div className="top-bar-text">
                      <h3>Email Us</h3>
                      <p>ssjiltd@gmail.com</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      {/* top-bar end */}

      {/* navbar -start */}
      <div className="nav-bar ">
        <Container fluid>
          <Navbar expand="lg" bg="dark" variant="dark"  >
          <Navbar.Brand as={Link} to="/">MENU</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarCollapse" />
            <Navbar.Collapse id="navbarCollapse">
              <Nav className="mr-auto">
                <Nav.Link >
                  <Link to='/' id='t'>HOME</Link>
                </Nav.Link>
                <Nav.Link >
                  <Link to='/aboutpage' id='t'>About</Link>
                </Nav.Link>
                <Nav.Link >
                  <Link to='/servicepage' id='t'>Service</Link>
                </Nav.Link>
                <Nav.Link >
                <Link to='/teampage' id='t' >Team</Link>
                </Nav.Link>
                <Nav.Link >
                <Link to='/gallerypage' id='t' >Gallery</Link>
                </Nav.Link>
                <Nav.Link >
                <Link to='/machinepage' id='t' >Machine</Link>
                </Nav.Link>
                {/* <NavDropdown title="Machines" id="t"  to='/machinepage' >
                  <NavDropdown.Item >
                    <Link to='jawpage' id='t1' >Jaw Crushers</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item >
                    <Link to='vsipage' id='t1' >Vertical Shaft Impactor </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item >
                    <Link to='conepage' id='t1' > Cone Crusher </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item >
                    <Link to='vibpage' id='t1' >  Vibrating Screen  </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item >                  
                    <Link to='feederpage' id='t1' >  Feeders   </Link>
                  </NavDropdown.Item>
                </NavDropdown> */}
                <Nav.Link >
                  <Link to='/contactpage' id='t'>Contact</Link>                  
                  </Nav.Link>
              </Nav>
              {/* <Nav className="ms-auto">
                <Nav.Link href="#" className="btn">
                  Pricing Catlog
                </Nav.Link>
              </Nav> */}
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </div>
      {/* navbar -end */}
    </div>
  )
}

export default NavbarC