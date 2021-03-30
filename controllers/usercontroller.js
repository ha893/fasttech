var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var User = require('../model/user');
router.use(bodyParser.urlencoded({ extended: true }));


// Creating our User trough post request
router.post('/', function (req, res) {
    User.create({
            fname    : req.body.fname,
            lname    : req.body.lname,
            email    : req.body.email,
            password : req.body.password,
            role     : req.body.role
        }, 
        function (err, user) {
            if (err) return res.status(500).send("Issue adding information to the database.");
            res.status(200).send(user);
        });
});

// Returning all the existng users from the database
router.get('/', function (req, res) {
    User.find({}, function (err, users) {
        if (err) return res.status(500).send("Problem  occured finding the users.");
        res.status(200).send(users);
    });
});


// Updating single user in  the database
router.put('/:id', function (req, res) {
    User.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, user) {
        if (err) return res.status(500).send("Problem occured while updating the user.");
        res.status(200).send(user);
    });
});


module.exports = router;