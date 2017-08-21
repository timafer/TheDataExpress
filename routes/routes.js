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
  makeAdmin();
  Person.find(function(err, users){
        var question1 = [0,0,0,0], question2 = [0,0,0,0], question3 = [0,0,0,0];
        if (err) return console.error(err);
        var answerToIndex = ["A", "B", "C", "D"];
        for (var i = 0; i < users.length; i++) {
            var person = users[i];
            question1[answerToIndex.indexOf(person.Ans1)]++;
            question2[answerToIndex.indexOf(person.Ans2)]++;
            question3[answerToIndex.indexOf(person.Ans3)]++;
        }
        if (req.session.user) {
          var isAdmin = req.session.user.AcountType == "Admin";
          res.render("index", {
            username: req.session.user.UserName,
            admin: isAdmin,
            total: users.length,
            q1a: question1[0],
            q1b: question1[1],
            q1c: question1[2],
            q1d: question1[3],
            q2a: question2[0],
            q2b: question2[1],
            q2c: question2[2],
            q2d: question2[3],
            q3a: question3[0],
            q3b: question3[1],
            q3c: question3[2],
            q3d: question3[3]
          })
        } else {
          res.render("index", {
            total: users.length,    
            q1a: question1[0],
            q1b: question1[1],
            q1c: question1[2],
            q1d: question1[3],
            q2a: question2[0],
            q2b: question2[1],
            q2c: question2[2],
            q2d: question2[3],
            q3a: question3[0],
            q3b: question3[1],
            q3c: question3[2],
            q3d: question3[3]
          });
        }
    });
    
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
  if (req.session.user) {
    Person.find({UserName:req.session.user.UserName}, function(err, person){
      if (err) return console.error(err);
      res.render("edit", {
        user: req.session.user
      });
    });
  } else {
    res.redirect("/");
  }
};

exports.saveEdit = function(req, res) {
  if (req.session.user) {
    console.log(req.session.user.Name);
    Person.findOne({UserName:req.session.user.UserName}, function(err, person){
      if (err) return console.error(err);
      if (person) {
        person.Email = req.body.Email;
        person.Age = req.body.Age;
        person.Ans1 = req.body.Ans1;
        person.Ans2 = req.body.Ans2;
        person.Ans3 = req.body.Ans3;
        person.save(function(err, person){
          if (err) return console.error(err);
          console.log("Updated user!");
          res.redirect("/");
        });
      } else {
        console.log("Could not find person to update?");
        res.redirect("/");
      }
    });
  } else {
    res.redirect("/");
  }
}

exports.createPerson = function (req, res) {
  var person = new Person({
    UserName: req.body.Name,
    Password: req.body.Pass,
    AcountType: "Regular",
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

function makeAdmin() {
  Person.findOne({UserName:"user"}, function(err, person){
    if (!person) {
      var person = new Person({
        UserName: "user",
        Password: "pass",
        AcountType: "Admin",
        Email: "admin@thissite.com",
        Age: 20,
        Ans1: "A",
        Ans2: "B",
        Ans3: "C"
      });
      person.save(function (err, person) {
        if (err) return console.error(err);
      })
    }
  });
}

exports.loginpost=function (req, res) {
    var i=0;
    Person.findOne({UserName:req.body.Name,Password:req.body.Pass},function(err,person){
        if (err) return console.error(err);
        if(person!=null){
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