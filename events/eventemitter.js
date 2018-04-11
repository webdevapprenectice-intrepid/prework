events = require('events')

function MyObj() {
  function myEvent() {
    console.log("event called");
  }
  events.EventEmitter.call(this);
}


MyObj().prototype.__proto__ = events.EventEmitter.prototype;

var myObj = new MyObj()
myObj.emit("myEvent")
