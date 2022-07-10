import React from "react";
import "./Button.css"

export default function Button(props) {
  return (
    <a href="https://www.google.com" className="external-auth-button-container">
      <img alt={props.text} src={props.image} />
      <p>{props.text}</p>
    </a>
  );
}
