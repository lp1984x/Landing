import React from "react";
import "./frequently.scss";
import * as Icon from "react-bootstrap-icons";

export default function Frequently() {
  return (
    <section className="frequently">
      <article className="frequently__article">
        <h2>
          Frequently <span>asked questions</span>
        </h2>
        <p>
          If you are not sure whether Draft is suitable is for you or not, do
          not worry. We are here to explain everything you might want to know
        </p>
      </article>
      <section className="frequently__questions-section">
        <div className="frequently__questions">
          <b>
            What is the difference between Draft and a traditional bank account?
          </b>
          <Icon.PlusLg className="frequently__plus" />
        </div>
        <div className="frequently__questions">
          <b>Who can open a Draft account?</b>
          <Icon.PlusLg className="frequently__plus" />
        </div>
        <div className="frequently__questions">
          <b>What if I withdraw money abroad?</b>
          <Icon.PlusLg className="frequently__plus" />
        </div>
        <div className="frequently__questions">
          <b>Can I cancel my subscrption or switch to another plan anytime?</b>
          <Icon.PlusLg className="frequently__plus" />
        </div>
        <div className="frequently__questions">
          <b>What happens if I withdraw more than $250?</b>
          <Icon.PlusLg className="frequently__plus" />
        </div>
      </section>
    </section>
  );
}
