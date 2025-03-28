import React from 'react'
import Machine from '../components/detailinfo'
import img1 from '../assets/verticalshaftimpact.png'
import img2 from '../assets/verticalshaftimpact2.png'
import carouselimg1 from '../assets/Feeder-carousel-1.jpg'
import carouselimg2 from '../assets/Feeder-carousel-1.jpg'
import carouselimg3 from '../assets/Feeder-carousel-1.jpg'
function VerticalShaftImpactor() {
  const VerticalShaftImpactor={
    Name:"Vertical Shaft Impactor",
    description:"These vibro grizzly feeders are designed for mobile, portable and stationary use as well as surface and underground operations for abrasive or soft rock, gravel, slag or other recycling and industrial materials. These feeders are compatible with many crushing equipment by other manufacturers also for easy replacement. Fitted with 2 Nos of equivalent motors, they come in two main sizes and capacities.",
    img1:img1,
    img2:img2,
    title:{
      t1:"ADOPT GREASE LUBRICATION:",
      d1:" Incorporate grease lubrication for easy maintenance and longer service life, allowing timely refills and regular grease replacement.",
      t2:"Modular Screen Assembly: ",
      d2:"Facilitate versatile assembly with interchangeable aperture modular screens, ensuring adaptability to various screening needs",
      t3:"Bolted Flange Construction:",
      d3:" Utilize high-strength bolt connections for flange side plates, beams, and supporting bases, eliminating welding stress and enhancing structural integrity.",
      t4:"Extended Service Life",
      d4:"Enhance longevity with vibration springs made of steel, prolonging the operational lifespan of the vibrating screen.",
      t5:"Versatile Screen Options:",
      d5:"Offer flexibility with wire or polyurethane screens (tension and modular types) available in different mesh sizes, catering to diverse screening requirements ",
      t6:"Durable Screen Body:",
      d6:" Constructed with high-quality steel plate resistant to vibration, ensuring durability and facilitating easy maintenance for the Multi Cylinder Hydraulic Cone Crusher.",
      t7:"Efficient Hydraulic System:",
      d7:": Implement an efficient hydraulic system for smooth operation and precise control, enhancing the performance of the Multi Cylinder Hydraulic Cone Crusher."
    },
    carouselimages:{
      c1:carouselimg1,
      c2:carouselimg2,
      c3:carouselimg3
     },
    advantages:{
      a1:"Achieve cubical product owing to serrated jaw plates",
      a2:"Energy-saving equipment: stand-alone energy-saving 15% to 30% ",
      a3:"Easy to clean crushing chamber",
      a4:"Stable and reliable, with overload protection device",
      a5:"Low operating cost",
      a6:"Non-welded frame design leads to more durability against shock loads",
      a7:" Replaceable parts that make maintenance easier",
      a8:"Fly wheel design that delivers perfect inertia and least vibration"
    }
   }
  return (
    <>
      <Machine MachineName={VerticalShaftImpactor.Name} MachineDescription={VerticalShaftImpactor.description} Machineimg={VerticalShaftImpactor.img1} Machineimg2={img2} MachineTitles={VerticalShaftImpactor.title} carousel={VerticalShaftImpactor.carouselimages} advantages={VerticalShaftImpactor.advantages}/>
    </>
   )
}

export default VerticalShaftImpactor