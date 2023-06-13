import React from "react";
import * as Icon from "react-bootstrap-icons";
import "./darkbuttom.scss";

interface IProp {
  text: string;
}

export default function DarkButton({ text }: IProp) {
  return (
    <button className="darkbutton">
      {text} <Icon.ArrowRight className="darkbutton__arrow" />
    </button>
  );
}
