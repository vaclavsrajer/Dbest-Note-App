import React from 'react'
import Input from '../Input/Input'
import "./Inputs.css";

export default function Inputs({email, password, onChangeHandler}) {
  return (
    <div className='inputs-container'>
        <Input inputValue={email} onChangeHandler={onChangeHandler} label="Email address"/>
        <Input inputValue={password} onChangeHandler={onChangeHandler} type={"password"} label="Password"/>
    </div>
  )
}
