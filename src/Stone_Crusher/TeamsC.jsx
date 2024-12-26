import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import PhoneCallButton from './PhonecallBtn'

import "bootstrap/dist/css/bootstrap.min.css";
import VT from './Imgs/VT.jpg';
import ST from './Imgs/ST.jpg';
import RT from './Imgs/RT.jpg';
import YT from './Imgs/YT.jpg';
import YLT from './Imgs/YLT.jpg';
import AP from './Imgs/AP.jpg';

function TeamsC() {
  return (
     <div>
         
          {/* <!-- Page Header Start --> */}
         <div className="page-header">
      <Container>
        <Row>
          <Col>
            <h2>Teams</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <a href="/">Home</a>
            <a href="">Teams</a>
          </Col>
          
        </Row>
      </Container>
         </div>
          {/* <!-- Page Header End --> */}
          <PhoneCallButton/>

          {/* <!-- Team Start --> */}
            <div class="team">
                <div class="container">
                    <div class="section-header text-center">
                        <p>Our Team</p>
                        <h2>Meet Our Team</h2>
                    </div>
                    <div class="row">
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div class="team-item">
                                <div class="team-img">
                                    <img src={VT} alt="Team Image" height={"415px"} width={"410px"}/>
                                </div>
                                <div class="team-text">
                                    <h2>Vinod B. Thakare</h2>
                                    <p>Director & CEO</p>
                                </div>
                                <div class="team-social">
                                    <a class="social-fb" href=""><i class="fab fa-facebook-f"></i></a>
                                    <a class="social-in" href=""><i class="fab fa-instagram"></i></a>
                                    <a class="social-wa" href=""><i class="fab fa-whatsapp"></i></a>
                                    <a class="social-phone" href=""><i class="fas fa-phone"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                            <div class="team-item">
                                <div class="team-img">
                                    <img src={ST} alt="Team Image" height={"415px"} width={"410px"}/>
                                </div>
                                <div class="team-text">
                                    <h2>Shubham R. Thakare</h2>
                                    <p>Site & Plant Manager</p>
                                </div>
                                <div class="team-social">
                                    <a class="social-fb" href=""><i class="fab fa-facebook-f"></i></a>
                                    <a class="social-in" href=""><i class="fab fa-instagram"></i></a>
                                    <a class="social-wa" href=""><i class="fab fa-whatsapp"></i></a>
                                    <a class="social-phone" href=""><i class="fas fa-phone"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                            <div class="team-item">
                                <div class="team-img">
                                    <img src={RT} alt="Team Image" height={"415px"} width={"410px"}/>
                                </div>
                                <div class="team-text">
                                    <h2>Ravindra B Thakare</h2>
                                    <p>Production Manager</p>
                                </div>
                                <div class="team-social">
                                    <a class="social-fb" href=""><i class="fab fa-facebook-f"></i></a>
                                    <a class="social-in" href=""><i class="fab fa-instagram"></i></a>
                                    <a class="social-wa" href=""><i class="fab fa-whatsapp"></i></a>
                                    <a class="social-phone" href=""><i class="fas fa-phone"></i></a>
                                </div>
                            </div>
                        </div> <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                            <div class="team-item">
                                <div class="team-img">
                                    <img src={YT} alt="Team Image" height={"415px"} width={"410px"}/>
                                </div>
                                <div class="team-text">
                                    <h2>Yashraj R Thakare</h2>
                                    <p>Operations Supervisor</p>
                                </div>
                                <div class="team-social">
                                    <a class="social-fb" href=""><i class="fab fa-facebook-f"></i></a>
                                    <a class="social-in" href=""><i class="fab fa-instagram"></i></a>
                                    <a class="social-wa" href=""><i class="fab fa-whatsapp"></i></a>
                                    <a class="social-phone" href=""><i class="fas fa-phone"></i></a>
                                </div>
                            </div>
                        </div> <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                            <div class="team-item">
                                <div class="team-img">
                                    <img src={YLT} alt="Team Image" height={"415px"} width={"410px"}/>
                                </div>
                                <div class="team-text">
                                    <h2>Yogesh L Thakare</h2>
                                    <p>Quality Control Manager</p>
                                </div>
                                <div class="team-social">
                                    <a class="social-fb" href=""><i class="fab fa-facebook-f"></i></a>
                                    <a class="social-in" href=""><i class="fab fa-instagram"></i></a>
                                    <a class="social-wa" href=""><i class="fab fa-whatsapp"></i></a>
                                    <a class="social-phone" href=""><i class="fas fa-phone"></i></a>
                                </div>
                            </div>
                        </div> <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                            <div class="team-item">
                                <div class="team-img">
                                    <img src={AP} alt="Team Image" height={"415px"} width={"410px"}/>
                                </div>
                                <div class="team-text">
                                    <h2>Aniket R. Pagar</h2>
                                    <p>Accountant</p>
                                </div>
                                <div class="team-social">
                                    <a class="social-fb" href=""><i class="fab fa-facebook-f"></i></a>
                                    <a class="social-in" href=""><i class="fab fa-instagram"></i></a>
                                    <a class="social-wa" href=""><i class="fab fa-whatsapp"></i></a>
                                    <a class="social-phone" href=""><i class="fas fa-phone"></i></a>
                                </div>
                            </div>
                        </div>+
                        {/* Repeat similar structure for other team members */}
                    </div>
                </div>
            </div>
            {/* <!-- Team End --> */}
          
     </div>
  )
}

export default TeamsC;
