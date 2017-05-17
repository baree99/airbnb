describe('Space', function(){
  var moment = require('moment');
  var SpaceModel = require("../src/space");
  var myDescription = 'A bunch of text that explains what my space is like.';
  // var spaceTest;

  beforeEach(function(done) {
    SpaceModel.remove({}, function(err){
    console.log('collection removed')
    done();
    });
  });

  it('should save to the space collection', function(done){
    var spaceTest = new SpaceModel();
    spaceTest.name = 'old cabin'
    spaceTest.description = 'an old cabin in the woods filled with bats'
    spaceTest.price = '150'
    spaceTest.save(function(err){
      expect(err).toBeNull();
    });
    done();
  });


  describe('available dates', function() {
    var spaceTest = new SpaceModel();
    spaceTest.name = 'new house'
    spaceTest.description = 'an shiny new house!'
    spaceTest.price = '300'
    spaceTest.addAvailableDates("2017-01-01")
    spaceTest.save(function(err){
      expect(err).toBeNull();
    });

    it('should have an available date', function(done) {
      expect(spaceTest.availableDates).toContain("2017-01-01")
      done()
    });

    it('should have multiple available dates', function(done) {
      spaceTest.addAvailableDates("2017-01-02", "2017-01-08")
      spaceTest.save(function(err){
      });
      expect(spaceTest.availableDates.length).toEqual(8)

      done()
    });
  });

})
