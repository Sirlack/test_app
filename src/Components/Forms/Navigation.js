import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import {
    Link,NavLink,
  } from "react-router-dom";

function Navigation(){
    return (
        <Navbar bg="light"  expand="lg">
          <Navbar.Brand as={Link} to="/">Mi Sitio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="flex-column" > 
              <Nav.Link as={NavLink} exact to="/" activeClassName="active">Inicio</Nav.Link>
              <Nav.Link as={NavLink} to="/dashboard" activeClassName="active">Dashboard</Nav.Link>
              <Nav.Link as={NavLink} to="/bs_Inicio" activeClassName="active">Bootstrap-React Dashboard</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      );
}
export default Navigation