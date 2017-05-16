describe('Space', function(){
  var myDescription = 'A bunch of text that explains what my space is like.',
  space;

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

})
