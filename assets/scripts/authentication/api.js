'use strict';

const app = require ('../app');

const signUp = (data) => {
  console.log (data);

  return $.ajax ({
      url: app.host + '/sign-up',
      method: 'POST',
      data: data,
  });
};

const signIn = (data) => {
  console.log (data);

  return $.ajax ({
      url: app.host + '/sign-in',
      method: 'POST',
      data: data,
  });
};

const signOut = () => {
  return $.ajax({
      url: app.host + '/sign-out/' + app.user.id,
      method: 'DELETE',
      headers: {
        authorization: 'Token token=' + app.user.token,
      },
  });
};

const createGame = function() {
  return $.ajax({
    url: 'http://tic-tac-toe.wdibos.com/games',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    method: 'POST',
  });
};

const getGame = function(data) {
  return $.ajax({
    url: 'http://tic-tac-toe.wdibos.com/games/' + data.games.id,
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    method: 'GET',
  });
};

const updateGame = function (index, value) {
  return $.ajax({
      method: 'PATCH',
      url: 'http://tic-tac-toe.wdibos.com/games/' + app.game.id,
      headers: {
      Authorization: 'Token token=' + app.user.token,
      },
      data: {
           "game": {
              "cell": {
               "index": index,
               "value": value,
                      },
                    }
      }
    });
  };


module.exports = {
  signUp,
  signIn,
  signOut,
  createGame,
  getGame,
  updateGame,
};
