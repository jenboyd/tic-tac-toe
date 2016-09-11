'use strict';

// const getFormFields = require('../../../lib/get-form-fields');
const api = require('../authentication/api');
const ui = require('./ui');

let gameBoard = ['','','','','','','','',''];
let player = 'x';
let gameOver = false;
let scoreX = 0;
let scoreY = 0;
let turnCount = 0;

const onNewGame = function (event) {
    turnCount = 0;
    player = 'x';
    gameBoard = ['','','','','','','','',''];
    gameOver = false;
    $(".game-board>.row>div").removeClass("active-tile-x active-tile-y");
    $('header').hide();
    $('.container').show();
    api.createGame(event)
      .done (ui.createGameSuccess)
      .fail (ui.failure);
};


const nextPlayer = function () {
    if (player === 'x') {
      player = 'y';
    } else if (player === 'y') {
      player = 'x';
    }
};

const checkXWin = function () {
  if (((gameBoard[0] === 'x') && (gameBoard[1] === 'x') && (gameBoard[2] === 'x')) ||
      ((gameBoard[3] === 'x') && (gameBoard[4] === 'x') && (gameBoard[5] === 'x')) ||
      ((gameBoard[6] === 'x') && (gameBoard[7] === 'x') && (gameBoard[8] === 'x')) ||

      ((gameBoard[0] === 'x') && (gameBoard[3] === 'x') && (gameBoard[6] === 'x')) ||
      ((gameBoard[1] === 'x') && (gameBoard[4] === 'x') && (gameBoard[7] === 'x')) ||
      ((gameBoard[2] === 'x') && (gameBoard[5] === 'x') && (gameBoard[8] === 'x')) ||

      ((gameBoard[0] === 'x') && (gameBoard[4] === 'x') && (gameBoard[8] === 'x')) ||
      ((gameBoard[6] === 'x') && (gameBoard[4] === 'x') && (gameBoard[2] === 'x'))){

        gameOver = true;
        return true;

  } else {
        return false;
  }
};

const checkYWin = function () {
  if (((gameBoard[0] === 'y') && (gameBoard[1] === 'y') && (gameBoard[2] === 'y')) ||
      ((gameBoard[3] === 'y') && (gameBoard[4] === 'y') && (gameBoard[5] === 'y')) ||
      ((gameBoard[6] === 'y') && (gameBoard[7] === 'y') && (gameBoard[8] === 'y')) ||

      ((gameBoard[0] === 'y') && (gameBoard[3] === 'y') && (gameBoard[6] === 'y')) ||
      ((gameBoard[1] === 'y') && (gameBoard[4] === 'y') && (gameBoard[7] === 'y')) ||
      ((gameBoard[2] === 'y') && (gameBoard[5] === 'y') && (gameBoard[8] === 'y')) ||

      ((gameBoard[0] === 'y') && (gameBoard[4] === 'y') && (gameBoard[8] === 'y')) ||
      ((gameBoard[6] === 'y') && (gameBoard[4] === 'y') && (gameBoard[2] === 'y'))){


      gameOver = true;
      return true;
  } else {
     return false;
  }
};

const checkTie = function () {
  if ((turnCount > 8) && (!(checkXWin())) && (!(checkYWin()))){
    gameOver = true;
    $('.tie').show();
    setTimeout(function() {
         $('.tie').fadeOut();
     }, 800);
     onNewGame();
  }
};

const celebrateXWin = function () {
      $('.xWin').show();
      setTimeout(function() {
           $('.xWin').fadeOut();
       }, 800);
      onNewGame();
};

const celebrateYWin = function () {
      $('.yWin').show();
      setTimeout(function() {
           $('.yWin').fadeOut();
       }, 800);
       onNewGame();
};


const onGetGame = function (event) {
    api.getGame(event)
      .done (ui.getGameSuccess)
      .fail (ui.failure);
};

const onUpdateGame = function (index, value) {
  if ((checkXWin()) || (checkYWin())) {
    api.updateGameEnd(index, value)
      .done ()
      .fail (ui.failure);
  } else {
    api.updateGame(index, value)
      .done ()
      .fail (ui.failure);
    }
  };

const takeTurn = function () {
  if (gameOver === false) {
    if (!($(this).hasClass('active-tile-x')) &&
        !($(this).hasClass('active-tile-y'))){
          let tileId = this.id;
          let index = parseInt(tileId);
          turnCount += 1;
          if (player === 'x') {
            $(this).addClass('active-tile-x');
            gameBoard.splice(index, 1, 'x');
            onUpdateGame(index, "x");
            if (checkXWin()) {
              gameOver = true;
              scoreX +=1;
              $('#score-x').html(scoreX);
              celebrateXWin();
            }
          } else {
            $(this).addClass('active-tile-y');
            gameBoard.splice(index, 1, 'y');
            onUpdateGame(index, "y");
            if (checkYWin()) {
              gameOver = true;
              scoreY +=1;
              $('#score-y').html(scoreY);
              celebrateYWin();
            }
          }
          checkTie ();
          nextPlayer ();
        }
    }
};

const addHandlers = () => {
  $("#newGame").on('click', onNewGame);
  $("#get-games").on('click', onGetGame);
  $(".tile").on('click', takeTurn);
};

module.exports = {
  addHandlers,
};
