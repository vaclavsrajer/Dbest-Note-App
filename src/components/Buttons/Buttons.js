import React from 'react'
import Button from '../Button/Button'
import Google from "../../assets/google-logo.svg"
import Facebook from "../../assets/facebook-logo.svg"
import "./Buttons.css"


export default function Buttons(props) {
  return (
    <div className='input-buttons-container'>
        <Button url={props.url} text={"Google account"} image={Google}/>
        <Button url={props.url} text={"Facebook account"} image={Facebook} />
    </div>
  )
}
