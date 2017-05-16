describe('User', function() {

  beforeEach(function() {
    user = new User();
    user.name = 'Ahmed';
    user.email = 'ahmed@egypt.com';
  });

  describe('User functionality', function() {
    it('creates a new user', function() {
      expect(user).toEqual(jasmine.any(User));
    });

    it('has a name', function() {
      expect(user.name).toBe('Ahmed');
    });

    it('has an email', function() {
      expect(user.email).toBe('ahmed@egypt.com');
    });
  });
});
