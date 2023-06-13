import React from "react";
import "./plan.scss";
import { ReactComponent as Card } from "../../svg/card.svg";
import * as Icon from "react-bootstrap-icons";

export default function Plans() {
  const free = [
    {
      title: "10 free local transfer",
      status: true,
    },
    {
      title: "Multi-user access",
      status: true,
    },
    {
      title: "Prepaid debit cards",
      status: true,
    },
    {
      title: "Virtual cards",
      status: true,
    },
    {
      title: "Priority 24/7 support",
      status: true,
    },
    {
      title: "Exchange 24 currencies",
      status: false,
    },
    {
      title: "10 free local transfer",
      status: false,
    },
    {
      title: "Free payment to other Draft accounts",
      status: false,
    },
  ];
  const premium = [
    {
      title: "10 free local transfer",
      status: true,
    },
    {
      title: "Multi-user access",
      status: true,
    },
    {
      title: "Prepaid debit cards",
      status: true,
    },
    {
      title: "Virtual cards",
      status: true,
    },
    {
      title: "Priority 24/7 support",
      status: true,
    },
    {
      title: "Exchange 24 currencies",
      status: true,
    },
    {
      title: "10 free local transfer",
      status: true,
    },
    {
      title: "Free payment to other Draft accounts",
      status: true,
    },
  ];
  return (
    <section className="plans">
      <article className="plans__article">
        <h3>
          An exceptional service, <span>at the right price.</span>
        </h3>
        <p>Start with our free plan and switch to premium as you grow</p>
      </article>
      <div className="plans__tabs">
        <h3>FREE</h3>
        <h1>$0/m</h1>
        <p>Manage your business with a simple and efficient account.</p>
        <button className="plans__button">Get Started</button>
        <div className="plans__card">
          <Card className="plans__svg" />
        </div>

        <div className="plans__checks">
          {free.map((item, index) => (
            <p
              key={index}
              className={item.status ? "plans__enabled" : "plans__disabled"}
            >
              <Icon.CheckLg
                className={item.status ? "plans__icon" : "plans__icon-disabled"}
              />{" "}
              {item.title}
            </p>
          ))}
        </div>
      </div>
      <div className="plans__tabs">
        <h3>PREMIUM</h3>
        <h1>$8/m</h1>
        <p>
          Priority support and multi-user access to maximize your productivity.
        </p>
        <button className="plans__button">Get Started</button>
        <div className="plans__card">
          <Card className="plans__svg" />
        </div>

        <div className="plans__checks">
          {premium.map((item, index) => (
            <p
              key={index}
              className={item.status ? "plans__enabled" : "plans__disabled"}
            >
              <Icon.CheckLg
                className={item.status ? "plans__icon" : "plans__icon-disabled"}
              />{" "}
              {item.title}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
