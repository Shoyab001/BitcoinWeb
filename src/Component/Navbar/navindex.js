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
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#" className="head">
          <h2>
          bitcoinexch11
          </h2>
          </Navbar.Brand>

          <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Nav>
            <Nav.Link className="getHelp" href="#">
              Get Help <i class="fa fa-question-circle"></i>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default navindex;
