const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'Recommender';
const users = dbName.collection('Users');

try {
    await client.connect();
} catch (e) {
    console.error(e);
};

export function checkIfUsernameUnique (inputtedUsername) {
    console.log("Got to Backend")
}

export function addNewUser(userInformation){
    
}

export function authenticateUser(userInformation){
    
}






