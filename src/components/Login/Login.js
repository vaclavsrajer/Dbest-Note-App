import React from 'react'
import Logo from '../Logo/Logo'
import InputForm from '../Input-Form/InputForm'
import LoginLogo from "../../assets/logo-login.png";
import { auth } from "../../firebase/firebase.config";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

export default function Login() {
  const [loginData, setLoginData] = React.useState({
    email: "",
    password: ""
  })

  onAuthStateChanged(auth, (user) => {
    console.log("user status changed: " + user)
  })

  function onLogin(){
    signInWithEmailAndPassword(auth, loginData.email, loginData.password).then(console.log)
  }

  function onChangeHandler(e){
    const {type, value} = e.target;
    setLoginData((prev) => ({...prev, [type]: value}))
  }

  return (
    <div className='input-authentication-container'>
        <Logo image={LoginLogo}/>
        <InputForm 
        nav="/sign-up"
        onChangeHandler={onChangeHandler}
        onClickHandler={onLogin}
        data={loginData}
        title="Account Login" 
        buttonText="Login" 
        bottomText={{pText: "Dont have an account ?", 
        hrefText: "Sign up here"}}/>
    </div>
  )
}
