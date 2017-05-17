  var moment = require('moment');
  var SpaceModel = require("../src/space");
  var myDescription = 'A bunch of text that explains what my space is like.';

  beforeAll(function(done) {
    SpaceModel.remove({}, function(err){
      console.log('space collection removed')
      done();
    });
  });

  describe('Space', function(){

  var spaceTest = new SpaceModel();
  spaceTest.name = 'old cabin'
  spaceTest.description = 'an old cabin in the woods filled with bats'
  spaceTest.price = 150
  spaceTest.save(function(err){
    expect(err).toBeNull();
  });


  it('should have an available date', function(done) {
    spaceTest.addAvailableDates("2017-01-01")
    expect(spaceTest.availableDates).toContain("2017-01-01")
    done()
  });

  it('should have multiple available dates', function(done) {
    spaceTest.addAvailableDates("2017-01-02", "2017-01-15")
    spaceTest.save();
    expect(spaceTest.availableDates.length).toEqual(15)
    done()
  });

  it('finds record return name', function(done){
    SpaceModel.find({'name': 'old cabin' }, function(err, spaces) {
      done();
      expect(spaces[0].name).toBe('old cabin')
    });
  });

  it('finds record returns price', function(done){
    SpaceModel.find({'name': 'old cabin' }, function(err, spaces) {
      done();
      expect(spaces[0].price).toBe(150)
    });
  });

  it('finds record returns dates', function(done){
    SpaceModel.find({'name': 'old cabin' }, function(err, spaces) {
      done();
      expect(spaces[0].availableDates).toContain("2017-01-06")
    });
  });


})
