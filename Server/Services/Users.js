const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'Recommender';
let users;

MongoClient.connect(url, function(err, client) {
    console.log("Connected successfully to server");

    const db = client.db(dbName);
    users = db.collection('Users');
  });

function checkIfUsernameUnique (inputtedUsername) {
    return users.findOne({username: inputtedUsername}).then(response => {
      console.log(response)
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

    console.log('fname:', fName);

    users.insertOne({
        firstName: fName,
        lastName: lName,
        username: username,
        email: email,
        password: password
    });
}

function authenticateUser(userInformation){

}

module.exports = {checkIfUsernameUnique, addNewUser, authenticateUser}





