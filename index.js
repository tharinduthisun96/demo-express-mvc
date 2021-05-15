var express = require("express");
var app = express();
var bodyParser = require('body-parser');

require('./models');

var users = require('./routes/users');
//app.use(bodyParser());


app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


app.use('/users', users)

app.listen(5000);