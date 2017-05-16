// var moment = require('moment');

function Space(name, description, price) {
  this.name = name
  this.description = description
  this.price = price
  this.availableDates = [];
}

Space.prototype.addAvailableDates = function(date) {
  this.availableDates.push(moment(date));
}
