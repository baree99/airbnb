var express = require('express');
var app = express();
var UserModel = require('./src/User');
var bodyParser = require('body-parser');
var session = require('express-session');
var mongoose = require('mongoose');
var User = require('./src/User');
var bcrypt = require('bcryptjs');
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
  res.render('pages/signup');
});

app.post('/signup', function(req, res) {
  sess = req.session
  sess.name = req.body.name;
  var user = new UserModel();
  user.name = req.body.name
  user.email = req.body.email
  user.password = bcrypt.hashSync(req.body.password, 8);
  user.save();
  res.redirect('/home')
});

app.get('/login', function(req, res) {
  res.render('pages/login')
})

app.post('/login', function(req, res) {
  // var user = new UserModel();
  var userSchema = UserModel.schema
  userSchema.authentication(req.body.email, req.body.password)
  res.redirect('/home')
})

app.get('/home', function(req, res) {
sess = req.session
res.render('pages/home', {
name: sess.name
});
});

app.use(express.static(__dirname + '/views/pages'));

var port = process.env.PORT || 3000
app.listen(port, function () {
  console.log(app.settings.env)
});
