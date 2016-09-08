'use strict';

const api = require('./api');
const ui = require('./ui');

let gameBoard = ['','','','','','','','',''];
let player = 'x';
let gameOver = false;
let scoreX = 0;
let scoreY = 0;

const onNewGame = function () {
    player = 'x';
    gameBoard = ['','','','','','','','',''];
    gameOver = false;
    $(".game-board>.row>div").removeClass("active-tile-x active-tile-y");
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

        return true;
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

      return true;
  }
};

const makeMove = function () {
  if (gameOver === false) {
    if (!($(this).hasClass('active-tile-x')) &&
        !($(this).hasClass('active-tile-y'))){
          let tileId = this.id;
          let arrIndex = parseInt(tileId);
          if (player === 'x') {
            $(this).addClass('active-tile-x');
            gameBoard.splice(arrIndex, 1, 'x');
            if (checkXWin()) {
              gameOver = true;
              scoreX +=1;
              $('#score-x').html(scoreX);
            }
          } else {
            $(this).addClass('active-tile-y');
            gameBoard.splice(arrIndex, 1, 'y');
            if (checkYWin()) {
              gameOver = true;
              scoreY +=1;
              $('#score-y').html(scoreY);
            }
          }
          nextPlayer ();
          }
    }
};

const addHandlers = () => {
  $("#newGame").on('click', onNewGame);
  $(".tile").on('click', makeMove);
};

module.exports = {
  addHandlers,
};
