var express = require('express')
var app = express()
var User = require('./src/User');

app.get('/', function (req, res) {
  user = new User('Test', 'test.test@testy.com', 'password')
  res.send(user)
})

app.listen(3000, function () {
  console.log('Eamlasojibaviubdvobihusadv')
})
