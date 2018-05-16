describe ('Plane', function() {
  var airport;

  beforeEach(function() {
    plane = new Plane();
});

describe('is the plane flying', function() {
  it('new plane starts off with not flying', function() {
    expect(plane._flying).toBe(false);
  });
  it('plane takes off and is flying', function() {
    plane.takeOff()
    expect(plane._flying).toBe(true);
  });
  it('plane lands and is not flying', function() {
    plane.takeOff()
    plane.land()
    expect(plane._flying).toBe(false);
  });
  });
});
