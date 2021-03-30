var mongoose = require('mongoose');

var ticketSchema = new mongoose.Schema({

    ticketid: {
        type: String
    },
    userid: {
        type: String
    },
    message: {
        type: String
    }
});

var Ticket = module.exports = mongoose.model('Ticket', ticketSchema);