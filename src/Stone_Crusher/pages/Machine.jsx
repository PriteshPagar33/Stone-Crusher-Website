import React from 'react';
import { Link } from 'react-router-dom';
import './Machine.css'
import { Container, Row, Col} from "react-bootstrap";


import img1 from '../assets/machine1.png'
import img2 from '../assets/machine2.png'
import img3 from '../assets/machine3.png'
import img4 from '../assets/machine4.png'
import img5 from '../assets/machine5.png'
import img6 from '../assets/machine6.png'


const MachinePage = () => {
    const Machines = [
         {
            img: img1,
            LinkTo: "/jawpage",
            h1: "jaw crusher",
            p: "jaw crusher "
        },
       {
            img: img2,
            LinkTo: "/vsipage",
            h1: "Vertical Shaft Impactors",
            p: "Vertical Shaft Impactors "
        },
         {
            img: img3,
            LinkTo: "/vibpage",
            h1: "Vibrating Screens",
            p: "Vibrating Screens "
        },
        {
            img: img4,
            LinkTo: "/feederpage",
            h1: "Feeders",
            p: "Feeder"
        },
        {
            img: img5,
            LinkTo: "/conepage",
            h1: "Cone crusher",
            p: "cone crusher "
        },
        {
            img: img6,
            LinkTo: "/hopperpage",
            h1: "hooper",
            p: "hooper"
        },
    ]
    return (
        <>
            {/* <div className='MachinePageheading d-flex align-items-center justify-content-center' > MACHINES </div> */}
                  {/* <!-- Page Header Start --> */}

                   <div className="page-header">
        <Container>
          <Row>
            <Col>
              <h2>Machines</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <a href="/">Home</a>
              <a href="">Machines</a>
            </Col>
          </Row>
        </Container>
                   </div>
            {/* <!-- Page Header End --> */}
            <div className='cardcontainer'>
            {
                Machines.map((a) => {
                    return(
                       
                        <div className='card'>
                            <div className='image'>
                                <Link to={a.LinkTo}> <img src={a.img} alt="Machine 1" /></Link>
                            </div>
                            <div className='content' >
                                <h3>{a.h1}</h3>
                                <p>{a.p}</p>
                            </div>
                        </div>

                       
                    
                    )
                    
                })
            }
            </div>





        </>
    );
};
export default MachinePage;