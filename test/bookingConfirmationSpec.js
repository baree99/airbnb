const Browser = require('zombie');
var app = require('../app.js')
var expect = require('chai').expect
var assert = require('assert');
Browser.localhost('localhost', 4001);

describe('Booking confirmation', function() {
  const browser = new Browser();
  beforeEach(function(done) {
    browser.visit('/', done);
  });

  it('makes a booking', function(done) {
    browser.visit('/login').then(function() {
      browser
      .fill('email', 'test@test.com')
      .fill('password', 'tron21')
      .pressButton('Submit').then(function() {
        browser.pressButton('Book Me !').then(function() {
        assert.ok(browser.success);
        browser.assert.text('p', '')
        });
      }).then(done, done);
    });
  });


});
