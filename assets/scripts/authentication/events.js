'use strict';

const getFormFields = require('../../../lib/get-form-fields');
const api = require('./api');
const ui = require('./ui');

const onSignUp = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signUp(data)
    .done (ui.signUpSuccess)
    .fail (ui.failure);
};

const onSignIn = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signIn(data)
    .done (ui.signInSuccess)
    .fail (ui.failure);
};

const onSignOut = function () {
  event.preventDefault();
  $('header').show();
  $('.container').hide();
  api.signOut()
    .done (ui.signOutSuccess)
    .fail (ui.failure);
};

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#sign-out').on('click', onSignOut);
};

module.exports = {
  addHandlers,
};
