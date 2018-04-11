//creating a wrapper function to provide closure for variables in asynchonous callback
function logCar(logMsg, callback) {
  process.nextTick(function() {
    callback(logMsg);
  });
}

var cars = ["Ferrari", "Porsce", "Bugatti"];
for (var idx in cars) {
  var message = "Saw a " + cars[idx];
  logCar(message, function(){
    console.log("Normal Callback: " + message);
  });
}
//asynchonous behaviour
for (var idx in cars) {
  var message = "Saw a " + cars[idx];
  (function(msg) { //wrapper function
    logCar(msg, function() {
      console.log("Closure Callback: " + msg);
    });
  })(message);
}
