import React from 'react';
const axios = require('axios');
const CryptoJS = require("crypto-js");


export async function AuthenticateUser(newUser) {

  const rawTextPassword = newUser.passwordRef.current.value;
  const encryptedPassword = CryptoJS.AES.encrypt(rawTextPassword, "AngeloKookieBrownie");

  const signupResponse = await axios.post('http://localhost:4000/newUser', {
    fName: newUser.fNameRef.current.value,
    lName: newUser.lNameRef.current.value,
    usernameRef: newUser.usernameRef.current.value,
    emailRef: newUser.emailRef.current.value,
    passwordRef: encryptedPassword,
  });

  return signupResponse;
}

export async function checkIfInformationIsValid(newUser){

  const allLetters = /^[A-Za-z]+$/;
  const noWhiteSpaces = /^\S*$/;
  const validEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const fName = newUser.fNameRef.current.value;
  const lName = newUser.lNameRef.current.value;
  const username = newUser.usernameRef.current.value;
  const email = newUser.emailRef.current.value;
  const password = newUser.passwordRef.current.value;
  const passwordConfirmation = newUser.passwordConfirmRef.current.value;

  if (!fName.value.match(allLetters)){
    return "First Name cannot contain anything but letters";
  }
  else if (!lName.value.match(allLetters)){
    return "Last Name cannot contain anything but letters";
  }
  else if (!username.value.match(noWhiteSpaces)){
    return "Usernames cannot contain a space";
  }
  else if (!email.value.match(validEmail)){
    return "Invalid email address format";
  }
  else if (password != passwordConfirmation){
    return "Password and confirmation password do not match";
  }
  else{
    return "";
  }

}
