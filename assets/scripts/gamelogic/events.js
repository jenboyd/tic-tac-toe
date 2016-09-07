'use strict';

const api = require('./api');
const ui = require('./ui');

const getFormFields = require ('../../../lib/get-form-fields');

$(() => {
  $('#new-game').on('submit', onNewGame); //Create function to reset the gameboard.
  $('#sign-out').on('submit', onSignOut); //Create function to sign the user out.

  $('#').on('submit', onSignOut); //Create function add "x" or "o" to game-board array and show indicator on board .

});
