import React from "react";
import "./content.scss";
import { Container } from "react-bootstrap";
import OneCard from "../OneCard/OneCard";

export default function Content() {
  return (
    <section className="content">
      <Container className="content__container">
        <OneCard />
      </Container>
    </section>
  );
}
