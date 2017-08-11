var express = require("express");
var pug = require("pug");
var cookieParser = require("cookie-parser");
var expressSession = require("express-session");

var app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/views"));
app.use(expressSession({
    secret: "t2w)R=9o%A;X&6;8#{DFM5,Sc00<8I1v*1OD2U9Tn``~rKdz-T!W17L'v61Z})Q(Xigi^r%CtHfi*f.l\"CjQqydtm22{l)KtJ6|b5QLzk_t-MD:~gN[tun<<vh9IOt",
    saveUninitialized: true,
    resave: true
}));

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