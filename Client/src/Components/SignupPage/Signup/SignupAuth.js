import React from 'react';
const axios = require('axios');
const AES = require("crypto-js/aes");



export async function PostNewUser(newUser) {
  //ToDO: check if confirmation password and normal password are same

  const rawTextPassword = newUser.passwordRef.current.value;
  //const encryptedPassword = CryptoJS.AES.encrypt(rawTextPassword, "AngeloKookieBrownie");

  const signupResponse = await axios.post('http://localhost:4000/newUser', {
    fName: newUser.fNameRef.current.value,
    lName: newUser.lNameRef.current.value,
    usernameRef: newUser.usernameRef.current.value,
    emailRef: newUser.emailRef.current.value,
    //passwordRef: encryptedPassword,
  });
  return signupResponse;
}
