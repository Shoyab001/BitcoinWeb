import React from "react";
import "./footer.css";
import { Col, Container, Row, Button } from "react-bootstrap";

const footerindex = () => {
  return (
    <>
      <div className="footer">
        <Container className="App footertitle">
          <Row>
            <h2>bitcoinexch7</h2>
            <p>
              <span>
                <a href="#" class="whatsapp">
                  <i class="fa fa-whatsapp"></i>
                </a>
              </span>{" "}
              <span>
                <a href="#" class="telegram">
                  <i class="fa fa-telegram"></i>
                </a>
              </span>
            </p>
            <p></p>
          </Row>
        </Container>
        <br />
      </div>
    </>
  );
};

export default footerindex;
