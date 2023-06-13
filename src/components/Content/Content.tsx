import React from "react";
import "./content.scss";
import { Container } from "react-bootstrap";
import OneCard from "../OneCard/OneCard";
import Manage from "../Manage/Manage";
import SupportChat from "../SupportChat/SupportChat";
import Plans from "../Plans/Plans";
import Frequently from "../Frequently/Frequently";

export default function Content() {
  return (
    <section className="content">
      <Container className="content__container">
        <OneCard />
        <Manage />
        <SupportChat />
        <Plans />
        <Frequently />
      </Container>
    </section>
  );
}
