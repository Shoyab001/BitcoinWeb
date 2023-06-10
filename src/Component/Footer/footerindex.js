import React from "react";
import "./footer.css";
import { Col, Container, Row, Button } from "react-bootstrap";

const footerindex = () => {
  return (
    <>
      <div className="footer">
        <Container className="App">
          <a className="logofooter" href="">
            <img
              src="https://bitcoin.org/img/icons/logo-footer.svg?1682978874"
              width={"120px"}
              alt="logo"
            />
          </a>
          <Row>
            <Col xs={4} style={{ textAlign: "start" }}>
              <span className="title">Support Bitcoin.org:</span>
              <Button variant="warning" className="btn">
                Donate
              </Button>
              <p>
                <a href="https://bitcoin.org/en/">Link</a>
              </p>
            </Col>
            <Col xs={8} style={{}}>
              <Row>
                <Col xs={3} className="footermenu">
                  <p className="title">Introduction:</p>
                  <ul>
                    <li>
                      <a href="">Individuals</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="">Businesses</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="">Developers</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="">Getting started</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="">How it works</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="">You need to know</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="">White paper</a>
                    </li>
                  </ul>
                </Col>
                <Col xs={3} className="footermenu">
                  <p className="title">Resources:</p>
                  <ul>
                    <li>
                      <a href="">Resources</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="">Exchanges</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="">Community</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="">Vocabulary</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="">Events</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="">Bitcoin Core</a>
                    </li>
                  </ul>
                </Col>
                <Col xs={3} className="footermenu">
                  <p className="title">Participate:</p>
                  <ul>
                    <li>
                      <a href="">Support Bitcoin</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="">Buy Bitcoin</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="">Running a full node</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="">Development</a>
                    </li>
                  </ul>
                </Col>
                <Col xs={3} className="footermenu">
                  <p className="title">Other:</p>
                  <ul>
                    <li>
                      <a href="">Avoid Scams</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="">Legal</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="">Privacy Policy</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="">Press</a>
                    </li>
                  </ul>
                  <ul>  
                    <li>
                      <a href="">About bitcoin.org</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="">Blog</a>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <br/>
      </div>
      <div
        className=""
        style={{
          backgroundColor: "black",
          color: "white",
          padding: "20px 0px 20px",
        }}
      >
        {" "}
        <Container>
          <Row>
            <Col>
              <a href="#" style={{ color: "#888888" }}>
                Bitcoin Project 2009-2023 Released under the MIT license
              </a>
            </Col>
            <Col className="Network">
              <a href="#" style={{ color: "#888888" }} className="dot">
                Network Status
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default footerindex;
