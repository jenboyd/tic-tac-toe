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


module.exports = {
  signUp,
  signIn,
  signOut,
};
