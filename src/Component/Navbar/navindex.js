import React from "react";

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
      <div
        className="App"
        style={{
          backgroundColor: "black",
          color: "white",
          padding: "10px 0px 10px",
        }}
      >
        {" "}
        <a href="#" style={{ color: "white" }}>
          Bitcoin.org needs your support!
        </a>
      </div>

      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#">
            <img
              src="https://bitcoin.org/img/icons/logotop.svg?1682978874"
              width={"120px"}
              alt=""
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 "
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Nav>
              
              <NavDropdown title="Introduction" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#">Individuals</NavDropdown.Item>
                <NavDropdown.Item href="#">Businesses</NavDropdown.Item>
                <NavDropdown.Item href="#">Developers</NavDropdown.Item>
                <NavDropdown.Item href="#">
                  Getting Started
                </NavDropdown.Item>
                <NavDropdown.Item href="#">Hot it Work</NavDropdown.Item>
                <NavDropdown.Item href="#">White Paper</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Resources" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#">Exchange</NavDropdown.Item>
                <NavDropdown.Item href="#">Community</NavDropdown.Item>

                <NavDropdown.Item href="#">
                  Documentation
                </NavDropdown.Item>
                <NavDropdown.Item href="#">Vocabulary</NavDropdown.Item>
                <NavDropdown.Item href="#">Events</NavDropdown.Item>
                <NavDropdown.Item href="#">
                  Bitcoin Core
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#">Innovation</Nav.Link>
              <NavDropdown title="Participate" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#">Support Bitcoin</NavDropdown.Item>
                <NavDropdown.Item href="#">Buy Bitcoin</NavDropdown.Item>
                <NavDropdown.Item href="#">Running a full node</NavDropdown.Item>
                <NavDropdown.Item href="#">Development</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default navindex;
