describe ('Airport', function() {
  var airport;
  var capacity;

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
    airport.full = true
    expect(function() {
      airport.land(plane_2);
    }).toThrowError("Airport is full, soz")
    })
    it('capacity is not full, plane_2 lands', function() {
      airport.full = false
      airport.land(plane_2)
      expect(airport.planes).toContain(plane_2)
    })
  });
});
