import React from "react";
import "./navigate.scss";
import { Container, Navbar } from "react-bootstrap";
import { ReactComponent as Logo } from "../../svg/Logo.svg";

export default function Navigate() {
  return (
    <Navbar collapseOnSelect expand="sm" className="navigate">
      <Container className="navigate__container">
        <Logo />
        <Navbar.Collapse className="navigate__collapse">
          <ul className="navigate__menu">
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
