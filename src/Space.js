var moment = require('moment');

function Space(name, description, price) {
  this.name = name
  this.description = description
  this.price = price
  this.availableDates = [];
}

Space.prototype.addAvailableDates = function(startDate, endDate) {
  if (endDate === undefined ) { this.availableDates.push(moment(startDate).format('YYYY-MM-DD'))
  } else {
        endDate = moment(endDate).add(1, 'days')
        for (var nextDateToAdd = moment(startDate); nextDateToAdd.isBefore(endDate); nextDateToAdd.add(1, 'days')) {
          this.availableDates.push(nextDateToAdd.format('YYYY-MM-DD'));
        }
      }
    }

module.exports = Space;
