import React from "react";
import "./content.scss";
import { Container } from "react-bootstrap";
import OneCard from "../OneCard/OneCard";
import Manage from "../Manage/Manage";

export default function Content() {
  return (
    <section className="content">
      <Container className="content__container">
        <OneCard />
        <Manage />
      </Container>
    </section>
  );
}
