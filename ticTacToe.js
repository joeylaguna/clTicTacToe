var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = `
  ______________
 |    |    |    |
 |____|____|____|
 |    |    |    |
 |____|____|____|
 |    |    |    |
 |____|____|____|
`
let Game = function() {
  this.board = board;
  this.winner = false;
  this.piecePlacment = [[0,0,0],[0,0,0],[0,0,0]];
};

Game.prototype.showBoard = function() {
  //show current board
  console.log(this.board);
}

let newGame = new Game();
newGame.showBoard();