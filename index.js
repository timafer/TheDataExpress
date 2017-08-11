var express = require("express");
var pug = require("pug");

var app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/views"));

app.get("/", function(req, res) {
    res.render("index", {
        title: "Homepage"
    });
});

app.get("/:page", function(req, res) {
    res.render(req.params.page, {
        title: req.params.page
    });
});

app.listen(3000);