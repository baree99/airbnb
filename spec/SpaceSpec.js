var moment = require('moment');
var SpaceModel = require("../src/space");

describe('Space', function(){

  it('should have an available date', function() {
    var spaceTest = new SpaceModel();
    spaceTest.addAvailableDates("2017-01-01")
    expect(spaceTest.availableDates).toContain("2017-01-01")
  });

  it('should have multiple available dates', function() {
    var spaceTest = new SpaceModel();
    spaceTest.addAvailableDates("2017-01-02", "2017-01-15")
    expect(spaceTest.availableDates.length).toEqual(14)
  });

  describe('finding records', function() {
    beforeEach(function(done) {
      SpaceModel.remove({}, function(err){
        var spaceTest = new SpaceModel();
        spaceTest.name = 'old cabin'
        spaceTest.price = 150
        spaceTest.ownerId = 'XABC1234'
        spaceTest.addAvailableDates("2017-01-02", "2017-01-15")
        spaceTest.save(function(err){
          done()
        });
      });
    })

    it('finds record details', function(done){
      SpaceModel.find({'name': 'old cabin' }, function(err, spaces) {
        expect(spaces[0].name).toBe('old cabin')
        expect(spaces[0].price).toBe(150)
        expect(spaces[0].availableDates).toContain("2017-01-06")
        done();
      });
    });

    it('finds record returns price', function(done){
      SpaceModel.find({'name': 'old cabin' }, function(err, spaces) {
        expect(spaces[0].ownerId).toBe('XABC1234')
        done();
      });
    });
  })
})
