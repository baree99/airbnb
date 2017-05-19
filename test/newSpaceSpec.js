const Browser = require('zombie');
var app = require('../app.js')
var expect = require('chai').expect
var assert = require('assert');
Browser.localhost('localhost', 4001);


describe('New Space', function() {
  const browser = new Browser();
  before(function(done) {
    browser.visit('/login', done);
  });

    it("'New Space button' takes you to the add a new space page", function(done){
      browser
      .fill('email', 'test23@test.com')
      .fill('password', 'tron21')
      .pressButton('Submit').then(function() {
        browser.pressButton('New Space').then(function() {
        assert.ok(browser.success);
        browser.assert.text('h1', 'List a space')
        }).then(done, done);
      });
    });
    it('submits a new space', function(done){
      browser
        .fill('spacename', 'googleCampus')
        .fill('description', 'very interesting')
        .fill('price', '666')
        .fill('startdate', '2017-01-01')
        .fill('enddate', '2017-01-05')
        .pressButton('Submit').then(function() {
          assert.ok(browser.success);
          browser.assert.text('h1', 'RocksBnB - feel at home, anywhere')
        }).then(done, done);
      });
});
