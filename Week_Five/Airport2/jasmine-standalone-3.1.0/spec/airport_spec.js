describe ('Airport', function() {
  var airport;

  beforeEach(function() {
    airport = new Airport();
    plane = {};
    plane_2 = {};
  });

  describe('plane docks in airport', function() {
    it('lands a plane', function() {
      airport.land(plane)
      expect(airport.planes).toContain(plane);
    });
    it('lands two planes', function() {
      airport.land(plane)
      airport.land(plane_2)
      expect(airport.planes).toContain(plane_2);
    });
  })

  describe('plane takes off', function() {
    it('leaves airport, removed from array', function() {
      airport.land(plane)
      airport.takeoff(plane)
      expect(airport.planes).not.toContain(plane);
    });
  });

  describe('capacity of airport', function() {
    it('capacity is full, throws error when plane tries to land', function() {
      capacity === 10
      (airport.land(plane)).times(10)
      expect(airport.land(plane_2)).toThrowError('Airport is full, soz')
    });
    it('capacity is full, plane_2 does not land in array', function() {
      capacity === 10
      (airport.land(plane)).times(10)
      airport.land(plane_2)
      expect(airport.planes).not.toContain(plane_2);
    });
  });
});
