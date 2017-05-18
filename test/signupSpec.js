const Browser = require('zombie');
var UserModel = require('../src/User');
var mongoose = require('mongoose');
var app = require('../app.js')
var expect = require('chai').expect
var assert = require('assert');
Browser.localhost('localhost', 3000);

describe('User visits signup page', function() {
  const browser = new Browser();
  before(function(done) {
    browser.visit('/', done);
  });

  describe('submits form', function(){
    it('should have a signup page', function(){
      browser.assert.text('h1','Feel at home, anywhere');
    });
    it('should submit signup form', function(done){
      browser
      .fill('name', 'testUser')
      .fill('email', 'test@test.com')
      .fill('password', 'tron21')
      .fill('passwordConfirmation', 'tron21')
      .pressButton('Submit').then(function() {
        assert.ok(browser.success);
        browser.assert.text('p', 'Welcome back to RocksBnBtestUser')
      }).then(done, done);
    });
  });
});



describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});
