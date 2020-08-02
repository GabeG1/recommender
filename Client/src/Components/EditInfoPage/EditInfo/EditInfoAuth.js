import React from 'react';
const axios = require('axios');
const CryptoJS = require("crypto-js");

export async function authenticateUser(existingUser) {
  console.log('in authenticateUser');
  const rawTextPassword = existingUser.passwordRef.current.value;
  const encryptedPassword = CryptoJS.SHA3(rawTextPassword, { outputLength: 512 });

  const editInfoResponse = await axios.post('http://localhost:4000/editInfo', {
    'fName': existingUser.fNameRef.current.value,
    'lName': existingUser.lNameRef.current.value,
    'usernameRef': existingUser.usernameRef.current.value,
    'emailRef': existingUser.emailRef.current.value,
    'passwordRef': encryptedPassword.toString(CryptoJS.enc.Hex),
  });
  return editInfoResponse;
}
