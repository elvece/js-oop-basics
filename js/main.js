var child = {
  height: 3,
  name: "Julian",
  age: 3
};

var child = {
  height: 4,
  name: "Cero",
  age: 4
};

var ride = {
  minHeight: 3,
  maxHeight: 7
};

var ride2 = {
  minHeight: 4,
  maxHeight: 7
};

//----------------//
// *** RIDES *** //
//--------------//
//Write a function that takes a ride object and a child object as arguments (see example objects below).
//Determine if the child is tall enough for the ride (the function should return true or false)
function canRide(ride, child){

  if (child.height >= ride.minHeight){
    return true;
  }
  else{
    return false;
  }
}

console.log(canRide(ride2, child));


//----------------//
// *** MILES *** //
//--------------//
//Write a function that takes in a car object and a route object.
//Determine if the car has enough gas to make the entire route (return true or false).

var car = {
  milesPerGallon: 20,
  gallonsInTank: 3
};

var route = {
  miles: 200,
  destination: "Boulder",
  location: "Fancy Land"
};


function makeRide (car, route){
  car = car.milesPerGallon * car.gallonsInTank;
  route = route.miles;
  if(car > route){
    return true;
  }
  else {
    return false;
  }
}

console.log(makeRide(car, route));








