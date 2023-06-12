import React from "react";
import { ReactComponent as Phone } from "../../svg/phone.svg";
import { ReactComponent as Pink } from "../../svg/pinkpopup.svg";
import { ReactComponent as Blue } from "../../svg/bluepopup.svg";
import { ReactComponent as Bagel } from "../../svg/bagel.svg";
import { Container } from "react-bootstrap";
import "./phonesection.scss";
import * as Icon from "react-bootstrap-icons";

export default function PhoneSection() {
  return (
    <section>
      <Container className="phoneSection">
        <section className="phoneSection__left">
          <article className="phoneSection__article">
            <h1>Smart Banking for freelancers</h1>
            <p>
              Draft is a revolutionary mobile app built to help you manage your
              business easily and save your money.
            </p>
            <button className="phoneSection__button">
              Register Now <Icon.ArrowRight className="phoneSection__arrow" />
            </button>
          </article>
        </section>
        <section className="phoneSection__phone">
          <Blue className="phoneSection__blue" />
          <Pink className="phoneSection__pink" />
          <Bagel className="phoneSection__bagel" />
          <Phone className="phoneSection__phone" />
        </section>
      </Container>
    </section>
  );
}
