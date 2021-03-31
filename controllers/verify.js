var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var User = require('../model/user');
var jwt = require('jsonwebtoken');
var config = require('../config');
var VerifyToken = require('./authorize');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

//Get the user with specific token
router.get('/me', VerifyToken, function(req, res, next) {

    User.findById(req.userId, { password: 0 }, function (err, user) {
      if (err) return res.status(500).send("There was a problem finding the user.");
      if (!user) return res.status(404).send("No user found.");
      res.status(200).send(user);
    });
  
  });

  //Updating users first and last name based on jwt authentcation
  router.put('/:id', VerifyToken, function(req, res, next) {

    User.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, user) {
      if (err) return res.status(500).send("Problem occured while updating the user.");
      res.status(200).send(user);
  });
  
  });
  
  module.exports = router;
  