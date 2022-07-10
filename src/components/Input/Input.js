import React from "react";
import "./Input.css";

export default function Input({label, inputValue, onChangeHandler, type = "email"}) {
  return (
    <label className="authentication-input-container">
      {label}
      <input type={type} className="authentication-input" value={inputValue} onChange={onChangeHandler}/>
    </label>
  );
}
