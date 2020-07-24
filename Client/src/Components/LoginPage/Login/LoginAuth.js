import React from 'react';
const axios = require('axios');

export async function PostExistingUser(newUser) {
    const loginResponse = await axios.post('http://localhost:4000/user', {
        usernameRef: newUser.usernameRef.current.value,
        passwordRef: newUser.passwordRef.current.value,
    });
    return loginResponse;
}
