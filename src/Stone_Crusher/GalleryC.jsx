import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

import './gallery.css';


import v1 from './Imgs/Crushervd1.mp4';
import v2 from './Imgs/Crushervd2.mp4';
import v3 from './Imgs/Dumper1.mp4';
import v4 from './Imgs/video3.mp4';
import v5 from './Imgs/video4.mp4';
import v6 from './Imgs/stone-crush.mp4';

import dum from './Imgs/dumper.jpg';
import sc1 from './Imgs/sc1.jpg';
import sc2 from './Imgs/sc2.jpg';
import sc3 from './Imgs/sc3.jpg';
import sc4 from './Imgs/sc4.jpg';
import sc5 from './Imgs/sc5.jpg';

import im1 from './Imgs/d1.jpg';
import im2 from './Imgs/d2.jpg';
import im3 from './Imgs/d3.jpg';
import im4 from './Imgs/d4.jpg';
import im5 from './Imgs/d5.jpg';
import im6 from './Imgs/d6.jpg';
import im7 from './Imgs/d7.jpg';
import im8 from './Imgs/d8.jpg';
import im9 from './Imgs/d9.jpg';
import im10 from './Imgs/d10.jpg';
import im11 from './Imgs/d11.jpg';


function GalleryC() {
  const pqr=[
    {
      ima:im1

    },
    {
      ima:im2
    },
    {
      ima:im3
    },
    {
      ima:im4
    },
    {
      ima:im5
    },
    {
      ima:im6
    },
    {
      ima:im7
    },
    {
      ima:im8
    },
    {
      ima:im9
    },
    {
      ima:im10
    },
    {
      ima:im11
    },
    {
      ima:sc2

    },
    {
      ima:sc5

    },
    {
      ima:sc1
    },
    {
            ima:sc3
    },
    // {
    //   title:"XRP (XRP)  ",
    //   ima:sc4
    // },
    // {
    //   title:"Cardano (ADA)  ",
    //   ima:dum
    // },
   
  ]

  return (
    <div>

        {/* <!-- Page Header Start --> */}
          <div className="page-header">
      <Container>
        <Row>
          <Col>
            <h2>Gallery</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <a href="/">Home</a>
            <a href="">Gallery</a>
          </Col>
          
        </Row>
      </Container>
         </div>
          {/* <!-- Page Header End --> */}

          {/* <div>
            <Container>
              <Row>
                <Col lg={4} mdd={6} sm={6}>
                <div className="i1">
                <img src={im1} alt="" />
                </div>
                </Col>

                <Col lg={4} mdd={6} sm={6}>
                <div className="i1">
                <img src={im2} alt="" />
                </div>
                </Col>

                <Col lg={4} mdd={6} sm={6}>
                <div className="i1">
                <img src={im3} alt="" />
                </div>
                </Col>

              
             


                </Row>
            </Container>
          </div> */}
          <div className="gallery">
      {/* <h1>Gallery</h1> */}
      <section>
        <Container fluid className="my-5"> 
          <Row>
            <div>
              <h2 className="gallery-heading">Site Images/Videos</h2>
            </div>

            {
              pqr.map((a)=>{
                return(
                  <Col lg={4} md={6}sm={12}style={{ paddingRight: 0 }} className="my-3">
                  <div className="card1">
                    <div className="image-box">
                      <img
                        src={a.ima}
                        alt="Image 1"
                      />
                    </div>
                    <div className="content">
                      <h2 style={{ color: "white" }}>
                        {a.title}
                      </h2>
                    </div>
                  </div>
                </Col>
                
                )
              })
            }

          </Row>
          
          <Row>
          <Col lg={4} md={6}sm={12}style={{ paddingRight: 0 }} className="my-3">
          <div className="video-container">
      <video autoPlay loop muted className="video">
        <source src={v5} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
            </Col>

            <Col lg={4} md={6}sm={12}style={{ paddingRight: 0 }} className="my-3">
          <div className="video-container">
      <video autoPlay loop muted className="video">
        <source src={v2} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
            </Col>
            <Col lg={4} md={6}sm={12}style={{ paddingRight: 0 }} className="my-3">
          <div className="video-container">
      <video autoPlay loop muted className="video">
        <source src={v4} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
            </Col>
            <Col lg={4} md={6}sm={12}style={{ paddingRight: 0 }} className="my-3">
          <div className="video-container">
      <video autoPlay loop muted className="video">
        <source src={v3} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
            </Col>
            <Col lg={4} md={6}sm={12}style={{ paddingRight: 0 }} className="my-3">
          <div className="video-container">
      <video autoPlay loop muted className="video">
        <source src={v1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
            </Col>

            <Col lg={4} md={6}sm={12}style={{ paddingRight: 0 }} className="my-3">
          <div className="video-container">
      <video autoPlay loop muted className="video">
        <source src={v6} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
            </Col>
            
       
        </Row>
        </Container>
      
      </section>

    </div>
    </div>
  )
}

export default GalleryC