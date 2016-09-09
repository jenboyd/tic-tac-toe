'use strict';

const app = require ('../app');

const createGameSuccess = (data) => {
  app.game = data.game;
  console.log(data);
};

const getGameSuccess = (data) => {
  console.log ("Game Data!");
  console.log(data);
};

const updateGameSuccess = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

module.exports = {
  createGameSuccess,
  getGameSuccess,
  updateGameSuccess,
  failure,
};
