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

exports.accountcreate = function (req, res) {
    res.render('accountcreate');
};

exports.login = function (req, res) {
    console.log("In login()");
    res.render('login');
};

exports.adminview = function (req, res) {
    console.log("In adminView()");
  
    Person.find(function (err, person) {
    if (err) return console.error(err);
    res.render('adminview', {
      title: 'Account List',
      people: person
    });
  });
};

exports.accountedit = function (req, res) {
  console.log("In accountEdit()");
  
    Person.findById(req.params.id, function (err, person) {
    if (err) return console.error(err);
    res.render('accountedit', {
      title: 'Edit Account',
      person: person
    });
  });
};

exports.createPerson = function (req, res) {
  console.log("In createPerson()");
  var person = new Person({
    UserName: req.body.Name,
    Password: req.body.Pass,
    AcountType: "Admin",
    Email:req.body.Email,
    Age: req.body.Age,
    Ans1: req.body.Ans1,
    Ans2: req.body.Ans2,
    Ans3: req.body.Ans3,
  });
    console.log(person);
  person.save(function (err, person) {
    if (err) return console.error(err);
    console.log(req.body.name + ' added');
  });
  res.redirect('/');
};

exports.loginpost=function (req, res) {
    var i=0;
    Person.findOne({UserName:req.body.Name,Password:req.body.Pass},function(err,person){
        if (err) return console.error(err);
        if(person!=null){
        console.log('You are loged in as '+req.body.Name)
        res.redirect('/');
        }
        else{
           res.redirect('/login'); 
        }
    });   
};

exports.edit=function (req, res) {
    res.redirect('/');
};

exports.delete=function (req, res) {
  Person.findByIdAndRemove(req.params.id, function (err, person) {
    if (err) return console.error(err);
    res.redirect('/adminview');
  });
};