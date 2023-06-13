import React from "react";
import "./navigate.scss";
import { Container, Navbar } from "react-bootstrap";
import { ReactComponent as Logo } from "../../svg/Logo.svg";

export default function Navigate() {
  return (
    <Navbar collapseOnSelect expand="md" className="navigate">
      <Container className="navigate__container">
        <Logo />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="navigate__collapse">
          <ul className="navigate__menu">
            <li>
              <b>SIGN UP</b>
            </li>
            <li>Home</li>
            <li>Feature</li>
            <li>Pricing</li>
          </ul>
          <button className="navigate__button">Sign up</button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
