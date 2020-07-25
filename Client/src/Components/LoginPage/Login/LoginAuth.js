import React from 'react';
const CryptoJS = require("crypto-js");

const axios = require('axios');

export async function PostExistingUser(newUser) {
    const rawTextPassword = newUser.passwordRef.current.value;
    const encryptedPassword = CryptoJS.AES.encrypt(rawTextPassword, "AngeloKookieBrownie");

    const loginResponse = await axios.post('http://localhost:4000/existingUser', {
        usernameRef: newUser.usernameRef.current.value,
        passwordRef: encryptedPassword,
    });

    return loginResponse;
}
