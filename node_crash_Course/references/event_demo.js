const EventEmitter = require('event');
//creat class
class MyEmitter extends EventEmitter {}
//init object
const myEmitter = new MyEmitter();
//event listener
myEmitter.on('event', () => consol.log('event fired!'));
//init event
myEmitter.emit('event');