import React from "react";
import "./style.css";
import { Col, Container, Row } from "react-bootstrap";

const headerindex = () => {
  return (
    <Container>
      <Row>
        <Col>
          {" "}
          <div className="headimg">
            <h1>Getting started with Bitcoinexch7</h1>
            <p className="summery">
              Using Bitcoin to transact is easy and accessible to everyone.
            </p>
          </div>
        </Col>
        <Col>
          <img
            src="https://img.freepik.com/free-vector/bitcoin-mining-cryptocurrency-mining-investors-invest-bitcoin-technology-they-buy-computers-mine-bitcoins-get-rich-vector-cartoon-illustration-flat-design_1150-56217.jpg?w=826&t=st=1686390302~exp=1686390902~hmac=955a83658f3ef3dd5840b15ae1a12153062d1ffa8809c740b98b55a8d6b7c5e5"
            width={"100%"}
            alt=""
            className="headerimage"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default headerindex;
