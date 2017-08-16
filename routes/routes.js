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
    Person.find(function (err, person) {
    if (err) return console.error(err);
    res.render('index', {
      title: 'Home',
      people: person
    });
  });
};
exports.acountcreate = function (req, res) {
    res.render('acountcreate');
  };
exports.login = function (req, res) {
    res.render('login');
  };
exports.adminview = function (req, res) {
    Person.find(function (err, person) {
    if (err) return console.error(err);
    res.render('adminview', {
      title: 'Account List',
      people: person
    });
        console.log(person);
  });
};
exports.accountedit = function (req, res) {
    Person.findById(req.params.id, function (err, person) {
    if (err) return console.error(err);
    res.render('accountedit', {
      title: 'Edit Account',
      person: person
    });
  });
  };

exports.createPerson = function (req, res) {
    console.log('create enter');
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
    Person.find
    res.redirect('/');
};
exports.edit=function (req, res) {
    res.redirect('/');
};
exports.delete=function (req, res) {
Person.findByIdAndRemove(req.params.id, function (err, person) {
    if (err) return console.error(err);
    res.redirect('/');
  });
};