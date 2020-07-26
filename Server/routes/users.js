import {Users} from '../Services/Users.js'

var express = require('express');
var router = express.Router();

router.post('/newUser', function(req, res, next) {
    let username = req.usernameRef;

    const isUsernameUnique = Users.checkIfUsernameUnique(username);

    if (isUsernameUnique){
        Users.addNewUser(req)
        res.status(200).send()
    }
    else{
        res.status(400).send("Username is already taken, please enter a new one")
    }
});

router.post('/existingUser', function(req, res, next) {
    let username = req.usernameRef;
    let password = req.passwordRef;

    Users.authenticateUser(username,password);

});

module.exports = router;
