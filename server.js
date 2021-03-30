const express = require('express');
const app = express();
var userRoutes = require('./controllers/usercontroller');
var loginRoutes = require('./controllers/logincontroller');
var checkRoutes = require('./controllers/verify');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
mongoose.connect("mongodb://localhost/signjwt",{ useNewUrlParser: true , useUnifiedTopology: true});
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/',userRoutes);
app.use('/log',loginRoutes);
app.use('/che',checkRoutes);
app.listen(8080,()=> {
    console.log("backend running on port 8080");
}); 