var express = require('express');
var app = express();
var User = require('./src/User');
var bodyParser = require('body-parser');
var session = require('express-session');

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(session({
  user: {test: "test"},
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('pages/signup');
});

app.post('/signup', function(req, res) {
  var user = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.passwordConfirmation
  };
  req.session = user.name
  res.redirect('/home')
});

app.get('/home', function(req, res) {
  console.log(req.session)
  res.send(req.session)
});

app.listen(3000, function () {
  console.log(app.settings.env)
});
