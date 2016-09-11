'use strict';

const app = require ('../app');

const createGameSuccess = (data) => {
  app.game = data.game;
};

const getGameSuccess = (data) => {
  $('.games-popup').show();
  setTimeout(function() {
       $('.games-popup').fadeOut();
        }, 2000);
  let totalGames = data.games.length;
  $('#games-played').text(totalGames);
};

const failure = (error) => {
  console.error(error);
};

module.exports = {
  createGameSuccess,
  getGameSuccess,
  failure,
};
