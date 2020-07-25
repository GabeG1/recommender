var express = require('express');
var router = express.Router();
import {Users} from '../Services/Users.js'

router.post('/newUser', function(req, res, next) {
    let username = req.usernameRef;
    let password = req.passwordRef;

    Users.authenticateNewUser(username,password)

});

router.post('/existingUser', function(req, res, next) {
    let username = req.usernameRef;
    let password = req.passwordRef;

    Users.authenticateExistingUser(username,password)

});

module.exports = router;
