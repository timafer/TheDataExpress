var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/data');

var mdb = mongoose.connection;
mdb.on('error', console.error.bind(console, 'connection error:'));
mdb.once('open', function (callback) {

});

var personSchema = mongoose.Schema({
  UserName: String,
  Password:String,
  AcountType:String,
  Email:String,
  Age: String,
  Ans1:String,
  Ans2:String,
  Ans3:String
});


var Person = mongoose.model('People_Collection', personSchema);

exports.index = function (req, res) {
    res.render('index');
  };
exports.acountcreate = function (req, res) {
    res.render('acountcreate');
  };
exports.login = function (req, res) {
    res.render('login');
  };
exports.adminview = function (req, res) {
    res.render('adminview');
  };
exports.accountedit = function (req, res) {
    res.render('accountedit');
  };

exports.createPerson = function (req, res) {
  var person = new Person({
    UserName: req.body.UserName,
    Password: req.body.Password,
    AcountType: "Admin",
    Email:req.body.Email,
    Age: req.body.Age,
    Ans1: req.body.Ans1,
    Ans2: req.body.Ans2,
    Ans3: req.body.Ans3,
  });
  person.save(function (err, person) {
    if (err) return console.error(err);
    console.log(req.body.name + ' added');
  });
  res.redirect('/');
};
exports.loginpost=function (req, res) {
    res.redirect('/');
};
exports.edit=function (req, res) {
    res.redirect('/');
};