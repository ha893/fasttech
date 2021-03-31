var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Ticket = require('../model/ticket');
var random = require('randomstring');
var responseGenerator = require('../responsegenerator');
router.use(bodyParser.urlencoded({ extended: true }));


//REdaing all the user tickets
router.get('/tickets', function (req, res) {
    Ticket.find({}, function (err, result) {
        if (err) {
            var response = responseGenerator.generate(true, "Some error", 400, null);
            res.send(response);
        } else {
            //delete req.user;
            var response = responseGenerator.generate(false, "Tickets of users", 200, result);
            res.send(response);
        }
    });
});

module.exports = router;












router.get('/tickets', function (req, res) {
    Ticket.find({
        userid: req.body.userid
    }, function (err, result) {
        if (err) {
            var response = responseGenerator.generate(true, "Some error", 500, null);
            res.send(response);
        } else {
            //delete req.user;
            var response = responseGenerator.generate(false, "Tickets of users", 200, result);
            res.send(response);
        }
    });
});