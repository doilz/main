const events = require('events');
const eventsEmitter = new events.EventEmitter();

var myEventHandler = () => {
    console.log("I hear a screamn!");
} //이벤트핸들러 악수,

eventsEmitter.on('scream', myEventHandler);

eventsEmitter.emit('scream'); //트리거

