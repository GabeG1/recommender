import React from 'react';
const axios = require('axios');

export async function PostNewUser(newUser) {
  const signupResponse = await axios.post('http://localhost:4000/user', {
    fName: newUser.fNameRef.current.value,
    lName: newUser.lNameRef.current.value,
    usernameRef: newUser.usernameRef.current.value,
    emailRef: newUser.emailRef.current.value,
    passwordRef: newUser.passwordRef.current.value,
  });
  return signupResponse;
}
