const Browser = require('zombie');
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
  });
});


describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});
