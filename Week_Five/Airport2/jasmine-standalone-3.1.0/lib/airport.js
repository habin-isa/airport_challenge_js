function Airport() {
  this.planes = [];
  const DEFAULT_CAPACITY = 5;
  capacity = capacity;
}

//landing and taking off planes

Airport.prototype.land = function(plane) {
  this.planes.push(plane);
}

Airport.prototype.takeoff = function(plane) {
  this.planes.pop(plane);
}

//capacity

Airport.prototype.full = function() {
  return(this.planes.length === DEFAULT_CAPACITY);
}
