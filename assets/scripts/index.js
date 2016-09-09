'use strict';

const authEvents = require('./authentication/events.js');
const gameEvents = require('./gamelogic/events.js');

// On document ready
$(() => {
  authEvents.addHandlers();
  gameEvents.addHandlers();

});
