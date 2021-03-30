var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Ticket = require('../model/ticket');
var random = require('randomstring');
var responseGenerator = require('../responsegenerator');
router.use(bodyParser.urlencoded({ extended: true }));


router.post('/create', function (req, res) {

    var newTicket = new Ticket({
        ticketid: random.generate(10),
        userid: req.body.userid,
        message: req.body.message

    });

    newTicket.save(function (err) {
        if (err) {
            var response = responseGenerator.generate(true, "Some error", 500, null);
            res.send(response);
        } else {
            //console.log("Saved--");
            var response = responseGenerator.generate(false, "Ticket Raised Suuccessfully", 200, newTicket);
            res.send(response);
        }
    });
});


module.exports = router;