//----------------//
// *** RIDES *** //
//--------------//
// Create a Child class that takes a height, name, and age.
// Create a Ride class that takes a minimum and maximum height.
// Create two instances of each.
// Write a function that takes a ride object and a child object as arguments and determines if the child is take enough for the ride (return true or false).

//classes
function Child(height, name, age){
  this.height = height;
  this.name = name;
  this.age = age;
}

function Ride(minHeight, maxHeight){
  this.min =  minHeight;
  this.max = maxHeight;
}

//instances
var sam = new Child(3, 'Sam', 3);
var julie = new Child(7, 'Julie', 5);
var rollerCoaster = new Ride(5,10);
var bumperCar = new Ride(3,9);

function canRide(ride, child){

  if (child.height >= ride.min){
    return true;
  }
  else{
    return false;
  }
}

console.log(canRide(rollerCoaster, sam));//false
console.log(canRide(rollerCoaster, julie));//true
console.log(canRide(bumperCar, sam));//true
console.log(canRide(bumperCar, julie));//true

//----------------//
// *** MILES *** //
//--------------//
// Create a Car class that takes the miles per gallon and gallons in a tank.
// Create a Route class that takes the total miles to the destination, the destination name, and location (city and state).
// Create two instances of each.
// Write a function that takes a car object and a route object as arguments and determines if the car has enough gas to make the entire route (return true or false).

//classes
function Car (mpg, gallonsInTank){
  this.mpg = mpg;
  this.gallonsInTank = gallonsInTank;
}

function Route (totalMiles, destinationName, location){
  this.totalMiles = totalMiles;
  this.destinationName = destinationName;
  this.location = location;
}

//instances
var jeep = new Car(17, 10);
var prius = new Car(30, 15);
var nyc = new Route(350, 'Times Square', 'NY, NY');
var cali = new Route(100, 'Big Sur', 'HWY 1, CA');

function makeRide (car, route){
  car = car.mpg * car.gallonsInTank;
  route = route.totalMiles;
  if(car > route){
    return true;
  }
  else {
    return false;
  }
}

console.log(makeRide(jeep, nyc));//false
console.log(makeRide(jeep, cali));//true
console.log(makeRide(prius, nyc));//true
console.log(makeRide(prius, cali));//true








