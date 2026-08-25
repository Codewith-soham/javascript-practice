const EventEmitter = require("events")

const eventEmitter = new EventEmitter() //created object of a class

eventEmitter.on("greet", () => {
    console.log("hello good morning from soham");
})

eventEmitter.emit("greet")

//on -> listen/register an event
//emit() -> trigger an event