'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled


const authEvents = require('./authentication/events.js');

// On document ready
$(() => {
  authEvents.addHandlers();

});

const logicEvents = require('./gamelogic/events.js');

// On document ready
$(() => {
  logicEvents.addHandlers();

});
