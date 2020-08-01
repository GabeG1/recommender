import React from 'react';
const axios = require('axios');
//const CircularJSON = require('circular-json');
const CryptoJS = require("crypto-js");

export async function authenticateUser(newUser) {
  console.log('in authenticateUser');
  const rawTextPassword = newUser.passwordRef.current.value;
  const encryptedPassword = CryptoJS.SHA3(rawTextPassword, { outputLength: 512 });

  const signupResponse = await axios.post('http://localhost:4000/newUser', {
    'fName': newUser.fNameRef.current.value,
    'lName': newUser.lNameRef.current.value,
    'usernameRef': newUser.usernameRef.current.value,
    'emailRef': newUser.emailRef.current.value,
    'passwordRef': encryptedPassword.toString(CryptoJS.enc.Hex),
  });
  return signupResponse;
}
