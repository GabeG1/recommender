const Users = require('../Services/Users.js')
var express = require('express');
var router = express.Router();

router.post('/newUser', function(req, res, next) {
    let username = req.body.usernameRef;
    Users.checkIfUsernameUnique(username).then(response => {
    if (response){
        Users.addNewUser(req.body);
        res.status(200).send();
    }
    else{
        res.status(400).send("Username is already taken, please enter a new one");
    }
})});
    
router.get('/existingUser', function(req, res, next) {
    let username = req.query.username;
    let password = req.query.password;
    Users.authenticateUser(username, password).then(response => {
    if (response != null){
        res.status(200).send();
        res.body = response
    }
    else{
        res.status(400).send("Please ensure your username and password are correct");
    }
})});

module.exports = router;
