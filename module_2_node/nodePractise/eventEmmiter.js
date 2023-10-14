const events = require("events");
const eventEmitter = new events.EventEmitter();

// create and event
const chillani = () => {
    console.log("Huday chilla chilli kore");
};

// assign the handler into event
eventEmitter.on('screm', chillani).chillani
eventEmitter.emit('screm');