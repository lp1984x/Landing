import React from "react";
import Navigate from "../Navigate/Navigate";
import "./header.scss";
import PhoneSection from "../PhoneSection/PhoneSection";

export default function Header() {
  return (
    <section className="header">
      <Navigate />
      <PhoneSection />
    </section>
  );
}
