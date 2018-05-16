function Airport() {
  this.planes = [];
  const DEFAULT_CAPACITY = 5;
  this.capacity = this.planes.length;
}

//add new landing function including capacity

Airport.prototype.land = function(plane) {
  if (this.full === true) {
    throw new Error("Airport is full, soz");
  }
  else {
    this.planes.push(plane);
  }
}

Airport.prototype.takeoff = function(plane) {
  var index = this.planes.indexOf(plane)
  this.planes.splice(index, 1);
}

//capacity

Airport.prototype.full = function() {
  if (this.capacity === DEFAULT_CAPACITY) {
    return true;
  } else {
    return false;
  }
}

//Airport.prototype.capacity = function() {
//  capacity = this.planes.length;
//}
