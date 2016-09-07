'use strict';

const app = require ('../app');

const signUpSuccess = (data) => {
  app.user = data.user;
  console.log("Successfully signed up");
  $('#signUpModal').modal('hide');
};

const signInSuccess = (data) => {
  app.user = data.user;
  console.log("Successfully signed in");
  $('#signInModal').modal('hide');
};

const signOutSuccess = () => {
  app.user = null;
  console.log("Successfully signed out");
};

const failure = (error) => {
  console.error(error);
};


module.exports = {
  signUpSuccess,
  signInSuccess,
  signOutSuccess,
  failure,
};
