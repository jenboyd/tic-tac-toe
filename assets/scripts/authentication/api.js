'use strict';

const app = require ('../app');

const signUp = (data) => {
  return $.ajax ({
      url: app.host + '/sign-up',
      method: 'POST',
      data: data,
  });
};

const signIn = (data) => {
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

const changePassword = (data) => {
  return $.ajax({
      url: app.host + '/change-password/' + app.user.id,
      method: 'PATCH',
      headers: {
        authorization: 'Token token=' + app.user.token,
      },
      data: data,
  });
};

const createGame = function() {
  return $.ajax({
    url: app.host + '/games',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    method: 'POST',
  });
};

const getGame = function() {
  return $.ajax({
    url: app.host + '/games',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    method: 'GET',
  });
};

const updateGame = function (index, value) {
  return $.ajax({
      method: 'PATCH',
      url: app.host + '/games/' + app.game.id,
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

  const updateGameEnd = function (index, value) {
    return $.ajax({
        method: 'PATCH',
        url: app.host + '/games/' + app.game.id,
        headers: {
        Authorization: 'Token token=' + app.user.token,
        },
        data: {
             "game": {
                "over": true,
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
  updateGameEnd,
  changePassword,
};
