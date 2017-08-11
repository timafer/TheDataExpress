var express = require("express");
var pug = require("pug");
var bcrypt=

var app = express();

app.get("/", function(req, res) {res.send("It's up and running.")});

app.listen(3000);