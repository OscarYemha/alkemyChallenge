import React from "react";
import { Navbar, Nav } from "react-bootstrap";

export default () => {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <div>
          <Navbar.Brand href="/">Alkemy Challenge</Navbar.Brand>
        </div>

        <div>
          <Nav className="mr-auto">
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
            <Nav.Link href="/allregistries">All Registries</Nav.Link>
            <Nav.Link href="/newregistry">New Registry</Nav.Link>
          </Nav>
        </div>
      </Navbar>
    </div>
  );
};
