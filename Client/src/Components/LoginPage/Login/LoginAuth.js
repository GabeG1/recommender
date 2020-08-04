const CryptoJS = require('crypto-js');

const axios = require('axios');

export async function PostExistingUser(newUser) {
  const rawTextPassword = newUser.passwordRef.current.value;

  const encryptedPassword = CryptoJS.SHA3(rawTextPassword, {outputLength: 512});

  const loginResponse = await axios.get('http://localhost:4000/existingUser', {
    params: {
      username: newUser.usernameRef.current.value,
      password: encryptedPassword.toString(CryptoJS.enc.Hex),
    },
  });

  return loginResponse;
}
