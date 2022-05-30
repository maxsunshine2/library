import { EventEmitter } from 'events';
var eventEmitter = new EventEmitter();

//create an event handker
var myEventhandler = () => {
    console.log('i heard a scream');
};

//assign the event handler to an event
eventEmitter.on('scream', myEventhandler);

//fire the scream event
eventEmitter.emit('scream');