'use strict';

const app = require ('../app');
const api = require('./api');
const ui = require('./ui');

// let gameBoard = document.getElementById('game-board');
let data = app.host;

const onTileSelection = function () {
  console.log("tile clicked");
  $(this).toggleClass("active-tile");
};

const addHandlers = () => {
  $(".col-xs-4").on('click', onTileSelection);
};

module.exports = {
  addHandlers,
};
