const Users = require('../Services/Users.js')
var express = require('express');
var router = express.Router();

router.post('/newUser', function(req, res, next) {
    let username = req.body.usernameRef;
    console.log('post request received');
    console.log(username);
    Users.checkIfUsernameUnique(username).then(response => {
    console.log(response);
    if (response){
        console.log("Is unique");
        Users.addNewUser(req.body);
        res.status(200).send();
    }
    else{
        console.log("Not unique");
        res.status(400).send("Username is already taken, please enter a new one");
    }
        }
    )
    });
    
router.post('/existingUser', function(req, res, next) {
    let username = req.usernameRef;
    let password = req.passwordRef;

    Users.authenticateUser(username,password);

});

module.exports = router;
