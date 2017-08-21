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
    var question1 = [0,0,0,0], question2 = [0,0,0,0], question3 = [0,0,0,0];
    Person.find(function(err, users){
        if (err) return console.error(err);
        var answerToIndex = ["A", "B", "C", "D"];
        for (var i = 0; i < users.length; i++) {
            var person = users[i];
            question1[answerToIndex.indexOf(person.Ans1)]++;
            question2[answerToIndex.indexOf(person.Ans2)]++;
            question3[answerToIndex.indexOf(person.Ans3)]++;
        }
    });
    if (req.session.user) {
      var isAdmin = req.session.user.AcountType == "Admin";
      res.render("index", {
        username: req.session.user.UserName,
        admin: isAdmin,
        questions: {
          q1:question1,
          q2:question2,
          q3:question3
        }
      })
    } else {
      res.render("index");
    }
};

exports.accountcreate = function (req, res) {
    res.render('accountcreate');
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
  person.save(function (err, person) {
    if (err) return console.error(err);
  });
  res.redirect('/');
};

exports.loginpost=function (req, res) {
    var i=0;
    Person.findOne({UserName:req.body.Name,Password:req.body.Pass},function(err,person){
        if (err) return console.error(err);
        if(person!=null){
          console.log(person);
          console.log('You are logged in as '+req.body.Name)
          req.session.user = person;
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

exports.logout = function(req, res) {
  req.session.user = null;
  res.redirect("/");
}