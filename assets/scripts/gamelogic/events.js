'use strict';

const api = require('./api');
const ui = require('./ui');

let gameBoard = ['','','','','','','','','',];
let player = 'x';


const onNewGame = function () {
    player = 'x';
    gameBoard = [];
    $(".game-board>.row>div").removeClass("active-tile-x active-tile-y");
};

const nextPlayer = function () {
    if (player === 'x') {
      player = 'y';
    } else if (player === 'y') {
      player = 'x';
    }
};

const makeMove = function () {

  if (!($(this).hasClass('active-tile-x')) && !($(this).hasClass('active-tile-y'))){

    let tileId = this.id;

    let arrIndex = parseInt(tileId);

    if (player === 'x'){
      $(this).addClass('active-tile-x');
      gameBoard.splice(arrIndex, 1, 'x');
      nextPlayer ();
    }
    else {
      $(this).addClass('active-tile-y');
      gameBoard.splice(arrIndex, 1, 'y');
      nextPlayer ();
    }
  }
};

// const checkHorizontalWin = function () {
//   if (gameBoard[0],[2],[3] === 'x') ||
//      (gameBoard[4],[5],[6] === 'x') ||
//      (gameBoard[7],[8],[9] === 'x') ||
//
//
//   }
// }

const addHandlers = () => {
  $("#newGame").on('click', onNewGame);
  $(".tile").on('click', makeMove);
};

module.exports = {
  addHandlers,
};
