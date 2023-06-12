import React from "react";
import { ReactComponent as Card } from "../../svg/card.svg";
import "./onecard.scss";

export default function OneCard() {
  return (
    <section className="onecard">
      <article className="onecard__article">
        <h1>One card for all your payments</h1>
        <p>
          Get 3% back on everything you buy with the Draft card. Register today
          and enjoy every aspect of your business.{" "}
        </p>
      </article>
      <div className="onecard__card">
        <Card className="onecard__card-svg" />
      </div>
    </section>
  );
}
