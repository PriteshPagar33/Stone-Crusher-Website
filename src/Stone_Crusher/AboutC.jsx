import React from "react";
import { Container, Row, Col, Accordion, Card } from "react-bootstrap";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "bootstrap/dist/css/bootstrap.min.css";
import im1 from "./Imgs/abt2.jpg";
import PhoneCallButton from './PhonecallBtn'



import c1 from './Imgs/Aris_Infra-2.webp';
import c2 from './Imgs/Hcon.png';
import c3 from './Imgs/Borabuildon.jpeg';
import c4 from './Imgs/designerlogo.png';
import c5 from './Imgs/badlogo.png';
import c6 from './Imgs/hrutiklogo.png';

function AboutC() {

    const testimonials = [
      { 
        name: 'Aris Infra', profession: 'Mumbai', 
        text: ' We are working with SS Jupiter Infra Ltd since many years now and have placed a lot of repeat orders in their favour. Personally our company is very happy with their stone quality and its durability ',
        image: c1
      },
      { name: 'H -con', profession: 'Nashik',
       text: '"SS Jupiter Infra Limited has been our reliable partner in the stone crusher business for years. Their dedication to quality and service is unparalleled."',
        image: c2
      },
      { name: 'Bora BuildCon', profession: 'Nashik',
       text: '"SS Jupiter Infra Limited has consistently exceeded our expectations with their stone crusher services. Their dedication to excellence sets them apart in the industry."',
        image: c3
      },
      { name: 'Designer Concrete', profession: 'Nashik',
       text: ` "We've been working with SS Jupiter Infra Limited for our stone crusher requirements, and they never disappoint. Their attention to detail and prompt delivery are exceptional."`,
        image: c4},
      { name: 'Badgujar Pvt Ltd ', profession: 'Pune',
       text: '"SS Jupiter Infra Limited is our go-to partner for all our stone crusher projects. Their skilled team and state-of-the-art equipment ensure smooth operations and high-quality results."',
        image: c5},
      { name: 'Hrutik Dumre Pvt Ltd. ', profession: 'Nashik',
       text: '"SS Jupiter Infra Limited delivers top-notch stone crusher solutions every time. Their expertise and commitment to customer satisfaction are truly impressive.', 
       image: c6},
    ];

    const settings = {
      dots: true,
      infinite: true,
      speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000, // Adjust as needed
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false
          }
        }
      ]
    };
  return (
    <div>
      {/* <!-- Page Header Start --> */}

      <div className="page-header">
        <Container>
          <Row>
            <Col>
              <h2>About Us</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <a href="/">Home</a>
              <a href="">About Us</a>
            </Col>
          </Row>
        </Container>
      </div>
      {/* <!-- Page Header End --> */}
      <PhoneCallButton/>

      {/* About section start */}
      <>
      <Container>
        <Row>
          <Col lg={5} sm={12} md={6}>
            <div className="about-img">
              <img
                src="https://cdn.downtoearth.org.in/library/large/2023-12-28/0.88046200_1703758619_istock-523091953.jpg"
                alt=""
              />
            </div>
          </Col>

          <Col lg={7} sm={12} md={6}>
            <div className="section-header ">
              <p>Welcome to Thakare's Crusher</p>
              <h2>12 Years Experience</h2>
            </div>
            <div class="about-text">
              <p id="first">
                Established in 2012, Thakare Crushers stands as a beacon of
                trust and reliability in the stone crushing industry. With a
                legacy built upon years of dedication and unwavering commitment
                to excellence, we have earned the trust of our customers and
                partners alike.{" "}
              </p>
              <p id="first">
                Our name resonates with integrity and quality, symbolizing a
                tradition of craftsmanship and precision that spans generations.
                Each stone crushed by Thakare Crushers carries the weight of our
                legacy, a testament to our unwavering standards and
                uncompromising dedication to excellence. <br />
                <br />
                As pioneers in the field, we have set the benchmark for quality
                and innovation, pushing boundaries and redefining industry
                standards. Our legacy is not just in the products we deliver,
                but in the relationships we nurture and the communities we
                serve. With every project undertaken, we honor our legacy by
                delivering superior products and unparalleled service, earning
                the continued trust and confidence of our valued clients. At
                Thakare Crushers, our legacy is etched in stone, a testament to
                our enduring commitment to excellence and our unwavering
                dedication to the success of our partners and the prosperity of
                our communities.{" "}
              </p>
              <a class="btn">Learn More</a>
            </div>
          </Col>
        </Row>
      </Container><br /><br />
      </>

      <>
     

      <div className="testimonial">
        <div className="container">
        <h1 className="gallery-heading mb-5" style={{color:"beige",fontSize:"35px",marginTop:"-40px"}}>Testimonals</h1>

          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div className="testimonial-slide" key={index}>
                <img src={testimonial.image} alt={testimonial.name} />
                <h3>{testimonial.name}</h3>
                <h4>{testimonial.profession}</h4>
                <p>{testimonial.text}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div><br /><br />
      </>

      <>
      <Container>
        <div className="why-us">
          <h2>WHY US</h2>
          <h6>
            We have acquired a respectable position in the industry, owing to
            the following key factors:.
          </h6>
        </div><br /><br />
        <Row>
          <Col lg={3} md={12} sm={12}>
            <div className="mncard">
              <div className="numbering">1</div>
              <div className="point">
                <p>
                  Quality Products: SS Jupiter is renowned for producing
                  high-quality crushed stone, artificial sand, and washed sand.
                  Quality is crucial in the construction industry, and customers
                  will appreciate reliable and consistent products for their
                  projects.
                </p>
              </div>
            </div>
          </Col>
          <Col lg={3} md={12} sm={12}>
            <div className="mncard">
              <div className="numbering">2</div>
              <div className="point">
                <p>
                  Variety of Sizes: Offering 20mm, 30mm, and 40mm crushed stone
                  provides versatility to customers with different project
                  requirements. This variety ensures that clients can find the
                  right size of material for their specific needs, enhancing
                  customer satisfaction.
                </p>
              </div>
            </div>
          </Col>
          <Col lg={3} md={12} sm={12}>
            <div className="mncard">
              <div className="numbering">3</div>
              <div className="point">
                <p>
                  Reliability: We likely built a reputation for reliability and
                  consistency in delivering products to its customers. By
                  choosing SS Jupiter, customers can trust that their material
                  needs will be met on time and with consistent quality.
                </p>
              </div>
            </div>
          </Col>
          <Col lg={3} md={12} sm={12}>
            <div className="mncard">
              <div className="numbering">4</div>
              <div className="point">
                <p>
                  Customer Service: A business's reputation often hinges on its
                  customer service. If SS Jupiter prioritizes excellent customer
                  service, it can differentiate itself from competitors by
                  providing personalized attention, timely responses to
                  inquiries, and support throughout the purchasing process.
                </p>
              </div>
            </div>
          </Col>
          <Col lg={3} md={12} sm={12}>
            <div className="mncard">
              <div className="numbering">5</div>
              <div className="point">
                <p>
                  Industry Expertise: SS Jupiter's experience and expertise in
                  the stone crusher business likely mean they understand the
                  market dynamics, customer preferences, and industry standards.
                  This knowledge can translate into better products, services,
                  and support for customers.
                </p>
              </div>
            </div>
          </Col>
          <Col lg={3} md={12} sm={12}>
            <div className="mncard">
              <div className="numbering">6</div>
              <div className="point">
                <p>
                  Environmental Considerations: If SS Jupiter employs
                  environmentally friendly practices, such as sustainable
                  sourcing of raw materials and minimizing waste generation, it
                  can appeal to environmentally conscious customers and
                  regulatory requirements.
                </p>
              </div>
            </div>
          </Col>
          <Col lg={3} md={12} sm={12}>
            <div className="mncard">
              <div className="numbering">7</div>
              <div className="point">
                <p>
                  Competitive Pricing: Offering competitive pricing for
                  high-quality products can attract customers looking for value
                  for their money. SS Jupiter may have developed efficient
                  processes or strategic partnerships that enable them to offer
                  competitive prices without compromising on quality.
                </p>
              </div>
            </div>
          </Col>
          <Col lg={3} md={12} sm={12}>
            <div className="mncard">
              <div className="numbering">8</div>
              <div className="point">
                <p>
                  Track Record of Success: SS Jupiter may have a proven track
                  record of success in the stone crusher business, with
                  satisfied customers, successful projects, and positive
                  testimonials. A strong track record instills confidence in
                  prospective customers.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      </>
     

    
    </div>
  );
}

export default AboutC;
