import React from "react";
import Logo from "../Logo/Logo";
import InputForm from "../Input-Form/InputForm";
import Signup from "../../assets/logo-signup.png";
import { auth } from "../../firebase/firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function SignUp() {
  const [signUpData, setSignUpData] = React.useState({
    email: "",
    password: ""
  })


  function onSignUp(){
    if(verifyEmail(signUpData.email) && verifyPassword(signUpData.password)){
      createUserWithEmailAndPassword(auth, signUpData.email, signUpData.password)
      .then((cred) => {
        console.log("user created: " + cred.user);
      })
      .catch(err => console.log(err))
    }
  }

  function onChangeHandler(e){
    const {type, value} = e.target;
    setSignUpData((prev) => ({...prev, [type]: value}))
  }


  function verifyEmail(email){
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return email.match(regex);
  }

  function verifyPassword(password){
    return password.length > 6;
  }
  

  return (
    <div className="input-authentication-container">
      <Logo image={Signup} />
      <InputForm
        onChangeHandler={onChangeHandler}
        onClickHandler={onSignUp}
        nav="/login"
        data={signUpData}
        title="Sign up"
        signupText="If you are already a member you can login with your email address and password."
        buttonText="Signup"
        bottomText={{
          pText: "Already have an account ?",
          hrefText: "Login here",
        }}
      />
    </div>
  );
}
