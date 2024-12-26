import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
// import ExampleCarouselImage from "../ReactDaily/ExampleCarouselImage";
import CountUp from "react-countup";

import PhoneCallButton from './PhonecallBtn'
import "./project.css";
import im1 from "./Imgs/calendar.png";
import im2 from "./Imgs/custo-service.png";
import v1 from "./Imgs/stone-crush.mp4";

import im3 from "./Imgs/worker.png";
import im4 from "./Imgs/customer-service.png";
import im5 from "./Imgs/skyscraper.png";
import im6 from "./Imgs/logo_page_bg.png";

function Home() {
  const abc = [
    {
      header: "We Are Professional",
      title: "For  Stone Crushing Task",
      imgs: "https://aimixgroup.com/wp-content/uploads/2023/09/Stone-crusher-plant-in-the-Philippines.jpg",
    },
    {
      header: "We Are Trusted",
      title: "Crushed Stone-Sand Suppliers",
      imgs: "https://aimixgroup.com/wp-content/uploads/2023/09/Stone-crusher-plant-in-the-Philippines.jpg",
    },
    {
      header: "We are Built on Trust",
      title: " Driven by professionalism",
      imgs: "https://aimixgroup.com/wp-content/uploads/2023/09/Stone-crusher-plant-in-the-Philippines.jpg",
    },
  ];

  return (
    <div>
      {/* Carousel Start  */}
      {/* <Container fluid>
        <Row>
          <Col>
            <Carousel className="carousel-main">
              {abc.map((a) => {
                return (
                  <Carousel.Item>
                    <ExampleCarouselImage im={a.imgs} />
                    <Carousel.Caption>
                      <h3 className="carousel-h3 fade-up1">{a.header} </h3>
                      <h1 className="carousel-h1 fade-up2">{a.title} </h1>
                    </Carousel.Caption>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </Col>
        </Row>
      </Container> */}
      {/* <!-- Carousel End --> */}

      {/* video start */}

      <Container fluid>
        <Row>
          <Col lg={12} md={12} sm={12}>
            <div className="vd-container mt-3">
              <video autoPlay loop muted className="vd">
                <source src={v1} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="overlay">
                <img src={im6} id="sslogo" />
                <h2>
                  <span>SS JUPITER INFRA LIMITED</span>
                </h2>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* video end */}

      {/* <!-- Feature Start--> */}
      <div class="feature wow fadeInUp" data-wow-delay="0.1s">
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col-lg-4 col-md-12">
              <div class="feature-item">
                <div class="feature-icon">
                  <img src={im3} alt="" height={"80px"} className="feat-img" />
                </div>
                <div class="feature-text">
                  <h3>Expert Worker</h3>
                  <p>
                     Our experienced workers ensure each stone meets
                    construction standards. Trust in our quality for durable
                    materials that stand strong in any project.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-12">
              <div class="feature-item">
                <div class="feature-icon">
                  <img src={im4} alt="" height={"80px"} className="feat-img" />
                </div>
                <div class="feature-text">
                  <h3>Quality Work</h3>
                  <p>
                    Unbeatable Quality: We source the finest materials and our
                    expert team ensures every stone meets the highest standards.
                  
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-12">
              <div class="feature-item">
                <div class="feature-icon">
                  <img src={im5} alt="" height={"80px"} className="feat-img" />
                </div>
                <div class="feature-text">
                  <h3>24/7 Support</h3>
                  <p>
                    Always Here for You: Need help? We've got your back, 24/7.
                    Whether it's a question or an issue, our team is ready to
                    assist you anytime.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Feature End--> */}

      {/* About - start */}
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
      </Container>
      {/* About section end */}
      <PhoneCallButton/>
      {/* countup section start */}
      <div className="fact">
          <Container fluid>
            <Row className="counters">
              <Col md={6} className="fact-left">
                <Row>
                  <Col xs={6}>
                    <div className="fact-icon">
                      <img
                        src="https://cdn-icons-png.flaticon.com/128/1018/1018611.png"
                        alt=""
                        id="factimg"
                      />
                    </div>
                    <div className="fact-text">
                      <h2>
                        {" "}
                        <CountUp end={45} />+
                      </h2>
                      <p>Expert Workers</p>
                    </div>
                  </Col>
                  <Col xs={6}>
                    <div className="fact-icon">
                      <img
                        src="https://cdn-icons-png.flaticon.com/128/6009/6009864.png"
                        alt=""
                        id="factimg"
                      />
                    </div>
                    <div className="fact-text">
                      <h2>
                        {" "}
                        <CountUp end={100} />+
                      </h2>
                      <p>Happy Clients</p>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col md={6} className="fact-right ">
                <Row>
                  <Col xs={6}>
                    <div className="fact-icon">
                      <img
                        src="https://cdn-icons-png.flaticon.com/128/562/562460.png"
                        alt=""
                        id="factimg"
                      />
                    </div>
                    <div className="fact-text">
                      <h2>
                        {" "}
                        <CountUp end={25} />+
                      </h2>
                      <p>Delievery Cities</p>
                    </div>
                  </Col>
                  <Col xs={6}>
                    <div className="fact-icon">
                      <img
                        src="https://cdn-icons-png.flaticon.com/128/3176/3176366.png"
                        alt=""
                        id="factimg"
                      />
                    </div>
                    <div className="fact-text">
                      <h2>
                        {" "}
                        <CountUp end={7745} />+
                      </h2>
                      <p>Brass Monthly Production</p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      {/* countup section end */}

      {/* <!-- Service Start --> */}
      <div class="service">
        <div class="container">
          <div class="section-header text-center">
            <p>Our Services</p>
            <h2>We Provide Services</h2>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div class="service-item">
                <div class="service-img">
                  <img
                    src="https://cdn.britannica.com/15/129115-050-09898223/Portland-quarry-Eng-Dorset.jpg"
                    alt=""
                  />
                  <div class="service-overlay">
                    <p>
                      At Thakare's Crusher, we specialize in quarrying and
                      producing high-quality aggregate materials through stone
                      crushing operations. Our state-of-the-art facilities and
                      skilled workforce enable us to extract natural stone from
                      quarries and process them into various sizes of aggregate
                      suitable for construction purposes.
                    </p>
                  </div>
                </div>
                <div class="service-text">
                  <h3> Aggregate</h3>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
              <div class="service-item">
                <div class="service-img">
                  <img
                    src="https://5.imimg.com/data5/IOS/Default/2021/8/MR/AJ/ZR/75196113/product-jpeg-500x500.png"
                    alt=""
                  />
                  <div class="service-overlay">
                    <p>
                      Artificial sand, produced by stone crushers at Thakare's
                      crusher, offers a sustainable alternative to natural sand
                      for various construction applications. Crafted from finely
                      crushed stone aggregates, this engineered sand possesses
                      consistent grain size, shape, and texture, ensuring
                      superior quality and performance in concrete, mortar, and
                      asphalt mixtures.
                    </p>
                  </div>
                </div>
                <div class="service-text">
                  <h3>Artifical Sand</h3>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div class="service-item">
                <div class="service-img">
                  <img
                    src="https://5.imimg.com/data5/SELLER/Default/2021/8/RB/GY/GZ/102535989/crush-sand-wash-sand.jpg"
                    alt=""
                  />
                  <div class="service-overlay">
                    <p>
                      Wash sand produced by Thakare's crusher refers to sand
                      that has undergone a washing process to remove impurities
                      and ensure quality. Stone crushers at Thakare's facility
                      crush raw materials into smaller particles, including
                      sand. This sand is then subjected to a washing process
                      where it is cleaned to remove any debris, clay, or other
                      impurities that may affect its usability. projects.
                    </p>
                  </div>
                </div>
                <div class="service-text">
                  <h3>Wash Sand</h3>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
              <div class="service-item">
                <div class="service-img">
                  <img
                    src="https://5.imimg.com/data5/SELLER/Default/2022/2/BT/PW/HU/92883202/20mm-concrete-crushed-stone.jpg"
                    alt=""
                  />
                  <div class="service-overlay">
                    <p>
                      The 20mm aggregates produced at Thakare's Crusher are
                      known for their exceptional quality, strength, and
                      durability. These aggregates are widely used in concrete
                      production, road construction, and building projects,
                      where a strong and stable base material is required. Our
                      commitment to quality control ensures that every batch of
                      20mm aggregates meets stringent standards for particle
                      size distribution, shape, and cleanliness.
                    </p>
                  </div>
                </div>
                <div class="service-text">
                  <h3>20mm Crushed Stone</h3>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div class="service-item">
                <div class="service-img">
                  <img
                    src="https://5.imimg.com/data5/MA/PK/VA/SELLER-97762138/40mm-construction-aggregate-500x500.jpg"
                    alt=""
                  />
                  <div class="service-overlay">
                    <p>
                      The 30mm aggregates produced at Thakare's Crusher are
                      known for their exceptional quality, strength, and
                      durability. These aggregates are widely used in concrete
                      production, road construction, and building projects,
                      where a strong and stable base material is required. Our
                      commitment to quality control ensures that every batch of
                      30mm aggregates meets stringent standards for particle
                      size distribution, shape, and cleanliness.
                    </p>
                  </div>
                </div>
                <div class="service-text">
                  <h3>30mm Crushed Stone</h3>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
              <div class="service-item">
                <div class="service-img">
                  <img
                    src="https://s3.us-east-1.amazonaws.com/mclanahan.com/images/Industries/CD/Sand-Dewatering-_-web.jpg"
                    alt=""
                  />
                  <div class="service-overlay">
                    <p>
                      Thakare's Crusher is at the forefront of C & D
                      (Construction and Demolition) waste recycling, offering a
                      sustainable solution to manage construction waste
                      effectively. Our state-of-the-art stone crushers are adept
                      at processing C & D waste materials into reusable
                      aggregates and other valuable resources.
                    </p>
                  </div>
                </div>
                <div class="service-text">
                  <h3>C & D Waste Recycling</h3>
                  {/* <a class="btn" href="https://www.cdegroup.com/getmedia/b89aad89-1ac2-4390-8f1c-e349cd050b6f/Sodextra-Overview-670x520.jpg" data-lightbox="service">+</a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Service End --> */}
    </div>
  );
}

export default Home;
