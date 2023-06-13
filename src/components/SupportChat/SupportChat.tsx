import React from "react";
import { ReactComponent as Chat } from "../../svg/chat.svg";
import { ReactComponent as Fotos } from "../../svg/fotos.svg";
import "./supportchat.scss";

export default function SupportChat() {
  return (
    <section className="supportchat">
      <article className="supportchat__text">
        <h2>We support you in 5 different languages</h2>
        <p>
          Our support team in here to help you in 5 languages - English, French,
          Spanish,Polish and German.
        </p>
        <Fotos />
      </article>
      <Chat />
    </section>
  );
}
