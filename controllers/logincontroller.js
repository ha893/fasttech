var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var User = require('../model/user');
var jwt = require('jsonwebtoken');
var config = require('../config');
var VerifyToken = require('./authorize');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

//user sign in to create jwt token with the help of correct email and password
router.post('/login', function(req, res) {

    var email = User.findOne({ email: req.body.email,password: req.body.password }, function (err, user) {
      if (err) return res.status(500).send('Error on the server.');
      if (!user) return res.status(404).send('No email and password found.');
      var token = jwt.sign({ id: user._id }, config.secret, {
        expiresIn: 86400 // expires in 24 hours
        
      });
      res.status(200).send({ auth: true, token: token });
    });
      
  });
  
  module.exports = router;