//jsx code
import React, { useState } from "react";
import { Accordion, Container, Row, Col } from 'react-bootstrap';
import './faqsmodify.css'; 

const ModifiedAccordion = ({ items, customClassName }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Accordion defaultActiveKey={null} className={`accordion ${customClassName}`}>
      {items.map((item, index) => (
        <Accordion.Item eventKey={`${index}`} key={index} className="custom-card" style={{ animationDelay: `${index * 0.2}s` }}>
          <Accordion.Header className="accordion-header" onClick={() => handleClick(index)}>
            <span>{item.title}</span>
            <span className="accordion-toggle-icon">
              {activeIndex === index ? "-" : "+"}
            </span>
          </Accordion.Header>
          <Accordion.Body>{item.description}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

const row1 = [
  { title: "What Types Of Stones Does Your Crusher Process?", description: "Crushed Stone Aggregate, Washed Sand And Artificial Sand." },
  { title: "What Is The Production Capacity Of Your Stone Crusher?", description: "70 To 80 Thousand Tons Per Month." },
  { title: "Can Your Stone Crusher Be Customized For Specific Projects Or Requirements?", description: "Yes, It Can Be Customised." },
  { title: "What Is The Geographical Coverage Of Your Stone Crushing Services?", description:"It's Around 20 Acres Plant."},
  { title: "How Are Workers And Equipment Safeguarded During Operational Tasks?", description: "Helmets For Safety And Protection Of Each Worker And Wearing Gloves, Eye Protection And Face Shield Are Used. Incase Of Injury First Aid Kits Are Provided." },
];
const row2 = [
  { title: "Do You Offer Any Rental Options For Your Stone Crusher?", description: "No, Not Any." },
  { title: "What Is The Lead Time For Scheduling Stone Crushing Services?", description: "7am To 10pm." },
  { title: "What Size Range Of Stones Can Your Crusher Handle?", description: "Crushed Stone Aggregate Ranging From 10 mm To 20 mm And 30 mm." },
  { title: "What Payment Methods Do You Accept For Stone Crushing Services?", description: "UPI Payment, Cash Payment And Also Card Or Check Payment Are Accepted." },
  { title: "How Do You Handle Environmental Concerns Related To Stone Crushing?", description: "Water Consumption :Appropriate Size Of Tanks And Recycle & Reuse Of Water Is Done In This Process." },
];

function BuildingConstruction() {
  return (
    <div className="modified-faqs">
      <Container>
        <div className="section-header text-center">
          <p>Updated Frequently Asked Questions</p>
          <h2>You May Ask</h2>
        </div>
        <Row className="modified-row">
          <Col md={6} id="modified-accordion-1">
            <ModifiedAccordion items={row1} customClassName="mt-3" />
          </Col>
          <Col md={6} id="modified-accordion-2">
            <ModifiedAccordion items={row2} customClassName="mt-3" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default BuildingConstruction;
