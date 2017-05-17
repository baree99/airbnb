var express = require('express');
var app = express();
var User = require('./src/User');
var bodyParser = require('body-parser');
var session = require('express-session');
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
  res.redirect('/home')

});

app.get('/home', function(req, res) {
sess = req.session
res.render('pages/home', {
name: sess.name
});
});

app.use(express.static(__dirname + '/views/pages'));
app.listen(3000, function () {
  console.log(app.settings.env)
});
