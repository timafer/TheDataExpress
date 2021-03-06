var express = require("express"),
    pug = require("pug"),
    cookieParser = require("cookie-parser"),
    expressSession = require("express-session"),
    route = require('./routes/routes.js'),
    bodyParser=require('body-parser');

var app = express();
var urlencodedParser = bodyParser.urlencoded({extended:true});

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/views"));
app.use(expressSession({
    secret: "t2w)R=9o%A;X&6;8#{DFM5,Sc00<8I1v*1OD2U9Tn``~rKdz-T!W17L'v61Z})Q(Xigi^r%CtHfi*f.l\"CjQqydtm22{l)KtJ6|b5QLzk_t-MD:~gN[tun<<vh9IOt",
    saveUninitialized: true,
    resave: true
}));

app.use(cookieParser("some passphrase?"));

app.get("/", route.index);

app.get("/accountcreate", route.accountcreate);
app.post("/accountcreate",urlencodedParser,route.createPerson);

app.get("/logout", route.logout);

app.get("/login", route.login);
app.post("/login",urlencodedParser,route.loginpost);

app.get("/adminview", route.adminview);
app.post("/adminview/:i",urlencodedParser,route.delete);

app.get("/accountedit",route.accountedit);
app.post("/accountedit",urlencodedParser, route.saveEdit);

app.get('/delete/:id', route.delete);

app.post("/", route.index);

app.listen(3000);