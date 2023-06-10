import React from "react";
import "./style.css";
import { Container } from "react-bootstrap";

const headerindex = () => {
  return (
    <Container fluid style={{ padding: "0px" }}>
      <div className="headimg">
        <h1 className="App">Getting started with Bitcoin</h1>
        <p className="summery">Using Bitcoin to transact is easy and accessible to everyone.</p>
      </div>
    </Container>
  );
};

export default headerindex;
