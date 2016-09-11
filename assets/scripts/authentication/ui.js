'use strict';

const app = require ('../app');

const signUpSuccess = (data) => {
  app.user = data.user;
  $('#signUpModal').modal('hide');
};

const signInSuccess = (data) => {
  app.user = data.user;
  $('#signInModal').modal('hide');
  $('.disabled').hide();
  $('#newGame').show();
};

const signOutSuccess = () => {
  app.user = null;
  $('#newGame').hide();
};

const changePasswordSuccess = () => {
  $('#changePwdModal').modal('hide');
};

const failure = (error) => {
};


module.exports = {
  signUpSuccess,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess,
};
