//Implementing a callback chain where the callback from an anonymous function calls back into the intial function to iterate through a list

function logCar(car, callback) {
  console.log("Saw a %s", car);
  if (cars.length) {
    process.nextTick(function() {
      callback();
    });
  }
}
function logCars(cars) {
  var car = cars.pop();
  logCar(car, function() {
    logCars(cars);
  });
}
var cars = ["Ferrari", "Porsce", "Bugatti", "Lamborghini", "Aston Martin"];
logCars(cars)
