import React from 'react'
import "./AuthenticationButton.css"
import { NavLink } from "react-router-dom";

export default function AuthenticationButton(props) {
  return (
    <div className='authentication-button-container'>
        <button onClick={props.onClickHandler}>{props.buttonText}</button>
        <p>{props.bottomText.pText} <NavLink to={props.nav}>{props.bottomText.hrefText}</NavLink></p>
    </div>
  )
}
