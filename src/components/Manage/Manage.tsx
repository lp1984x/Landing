import React from "react";
import "./manage.scss";
import DarkButton from "../DarkButton/DarkButton";
import { ReactComponent as Graf } from "../../svg/graf.svg";

export default function Manage() {
  return (
    <section className="manage">
      <article className="manage__graf">
        <div className="manage__smallgraf">
          <div>
            <p>Balance</p>
            <h2>$5,600</h2>
          </div>
        </div>
        <div className="manage__smallgraf">
          <div>
            <p>Last Transaction</p>
            <h2>$230</h2>
          </div>
        </div>
        <div className="manage__biggraf">
          <Graf className="manage__biggraf-svg" />
        </div>
      </article>
      <article className="manage__text">
        <h2>Manage your finances like a pro in no time</h2>
        <p>
          With Draft, book keeping, banking, and invoices are all in one place.
          You will always know where you stand.{" "}
        </p>
        <DarkButton text="Learn More" />
      </article>
    </section>
  );
}
