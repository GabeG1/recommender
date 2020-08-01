const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'Recommender';
let users;

MongoClient.connect(url, function(err, client) {
    console.log("Connected successfully to server");

    const database = client.db(dbName);
    users = database.collection('Users');
  });

function checkIfUsernameUnique (inputtedUsername) {
    return users.findOne({username: inputtedUsername}).then(response => {
      return response == null;
    } 
    );
}

function addNewUser(userInformation){
    let fName = userInformation.fName;
    let lName = userInformation.lName;
    let username = userInformation.usernameRef;
    let email = userInformation.emailRef;
    let password = userInformation.passwordRef;

    users.insertOne({
        firstName: fName,
        lastName: lName,
        username: username,
        email: email,
        password: password
    });
}

function authenticateUser(inputtedUsername, inputtedPassword){
  return users.findOne({username: inputtedUsername, password: inputtedPassword}).then(response => {
    return response;
  }
  );
}

module.exports = {checkIfUsernameUnique, addNewUser, authenticateUser}