import React from "react";
import "./style.css";
import { Col, Container, Row } from "react-bootstrap";

const headerindex = () => {
  return (
    <Container>
       <Row>
          <Col xs={12} md={6}  className="head  text-center">
            <h1>Getting started with Bitcoinexch365</h1>
            <p className="summery">
              Using Bitcoin to transact is easy and accessible to everyone.
            </p>
          </Col>
          <Col xs={12} md={6}  className="head" >
            {/* <img src='/bg.png' style={{}}></img> */}
            <div>
              <ul className="mt-2">
                <li> Pay  3000rps And Get 10000rps</li>
                <li> Pay  5000rps And Get 15000rps</li>
                <li> Pay  8000rps And Get 24000rps</li>
                <li> Pay 10000rps And Get 30000rps</li>
                <li> Pay 20000rps And Get 60000rps</li>
                <li> Pay 30000rps And Get 85000rps</li>
                <li> Pay 50000rps And Get 1.4Lac rps</li>
              </ul>
            </div>
          </Col>
        </Row>
        <br></br>
        <br></br>
    <br></br>
    </Container>
   
  );
};

export default headerindex;
