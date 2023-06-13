import React from "react";
import "./footer.scss";
import { Container } from "react-bootstrap";
import { ReactComponent as Logo } from "../../svg/Logo.svg";

export default function Footer() {
  return (
    <section className="footer">
      <Container className="footer__container">
        <div className="footer__copyright">
          <Logo />
          <p>Copyright © 2020 Draft LLC. All rights reserved.</p>
        </div>
        <div className="footer__links">
          <a href="#none">Team</a>
          <a href="#none">Services</a>
          <a href="#none">Terms of use</a>
          <a href="#none">Press</a>
          <a href="#none">Projects</a>
          <a href="#none">Privacy policy</a>
          <a href="#none">Fees</a>
          <a href="#none">Affiliate</a>
          <a href="#none">Contact us</a>
        </div>
      </Container>
    </section>
  );
}
