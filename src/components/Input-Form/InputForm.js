import React from "react";
import Buttons from "../Buttons/Buttons";
import Inputs from "../Inputs/Inputs";
import AuthenticationButton from "../Authentication-Button/AuthenticationButton";
import "./InputForm.css";

export default function InputForm(props) {
  return (
    <div className="input-half-container">
      <div className="input-form-container">
        <div className="input-form-title"> 
          <h2>{props.title}</h2>
          {props.signupText && <p>{props.signupText}</p>}
        </div>
        <Buttons url={props.url} />
        <p className="input-middle-line">
          <span>Or</span>
        </p>
        <Inputs onChangeHandler={props.onChangeHandler} email={props.data.email} password={props.data.password}/>
        <AuthenticationButton
          buttonText={props.buttonText}
          bottomText={props.bottomText}
          onClickHandler={props.onClickHandler}
          nav={props.nav}
        />
      </div>
    </div>
  );
}
