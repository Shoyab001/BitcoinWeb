import React from "react";
import "./nav.css";

import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";

const navindex = () => {
  return (
    <>
      <Navbar style={{ backgroundColor: "#13161f" }} expand="lg">
        <Container>
          <Navbar.Brand href="#" className="navhead">
            <h2>bitcoinexch7</h2>
          </Navbar.Brand>

          <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Nav>
            <Nav.Link className="getHelp" href="#">
              <h4>
                Get Help <i class="fa fa-question-circle"></i>
              </h4>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default navindex;
