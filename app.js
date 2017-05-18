var express = require('express');
var app = express();
var UserModel = require('./src/User');
var SpaceModel = require("./src/Space");
var bodyParser = require('body-parser');
var session = require('express-session');
var mongoose = require('mongoose');
var User = require('./src/User');
var GetUser = require('./src/getUserData');
var bcrypt = require('bcryptjs');
var GetSpace = require('./src/getsSpaces')
var sess;

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true,
}));

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('pages/signup', {
    space: GetSpace()
  });
});

app.post('/signup', function(req, res) {
  sess = req.session
  sess.name = req.body.name;
  var user = new UserModel();
  user.name = req.body.name
  user.email = req.body.email
  user.password = bcrypt.hashSync(req.body.password, 8);
  user.save();
  sess.id = GetUser(req.body.email);
  res.redirect('/home')
});

app.get('/login', function(req, res) {
  res.render('pages/login')
})

app.post('/login', function(req, res) {
  userSchema.authentication(req.body.email, req.body.password)
  res.redirect('/home')
})

app.get('/home', function(req, res) {
sess = req.session
res.render('pages/home', {
name: sess.name
});
});

app.post('/newspace', function(req, res) {
  sess = req.session
  res.render("pages/newspace")
})

app.post('/newspace/save', function(req, res){
  sess = req.session
  var newSpace = new SpaceModel();
  newSpace.name = req.body.spacename
  newSpace.description = req.body.description
  newSpace.price = req.body.price
  newSpace.addAvailableDates(req.body.startdate, req.body.enddate)
  newSpace.ownerId = sess.id
  newSpace.save();
  res.redirect('/home')
})

app.use(express.static(__dirname + '/views/pages'));
app.listen(3000, function () {
  console.log(app.settings.env)
});
