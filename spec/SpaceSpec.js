describe('Space', function(){
  var moment = require('moment');
  var Space = require("../src/space");
  var myDescription = 'A bunch of text that explains what my space is like.';
  var space;

  beforeEach(function() {
    space = new Space('My Space', myDescription, 100);
  })

  describe('create class', function() {

    it('has a name', function (){
      expect(space.name).toEqual('My Space');
    })

    it('has a description', function (){
      expect(space.description).toEqual(myDescription);
    })

    it('has a price', function (){
      expect(space.price).toEqual(100);
    })
  })

  describe('available dates', function() {
    it('should have an available date', function() {
      space.addAvailableDates("2017-01-01")
      expect(space.availableDates).toContain("2017-01-01")
    });

    it('should have an available date', function() {
      space.addAvailableDates("2017-01-01", "2017-01-08")
      expect(space.availableDates.length).toEqual(8)
    });
  });

})
