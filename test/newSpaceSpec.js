const Browser = require('zombie');
var app = require('../app.js')
var expect = require('chai').expect
var assert = require('assert');
Browser.localhost('localhost', 4001);


describe('New Space', function() {
  const browser = new Browser();
  before(function(done) {
    browser.visit('/home', done);
  });

    it("'New Space button' takes you to the add a new space page", function(done){

      browser
      .pressButton('New Space').then(function() {
        assert.ok(browser.success);
        browser.assert.text('h1', 'List a space')
      }).then(done, done);
    });
    it('submits a new space', function(done){
      browser
        .fill('spacename', 'googleCampus')
        .fill('description', 'very interesting')
        .fill('price', '666')
        .fill('startdate', '06062017')
        .fill('enddate', '06082017')
        .pressButton('Submit').then(function() {
          assert.ok(browser.success);
          browser.assert.text('h1', 'RocksBnB - feel at home, anywhere')
        }).then(done, done);
      });
});
