var readlineSync = require('readline-sync');

/*
needed methods:
start game
prompt
way to switch player
*/


let Game = function() {
  this.board = [[1,2,3], [4,5,6], [7,8,9]];
  this.player = 'x';
  this.moves = 0
};

Game.prototype.showBoard = function() {
  //show current board
  console.log(`${this.board[0][0]} | ${this.board[0][1]} | ${this.board[0][2]}`)
  console.log(`${this.board[1][0]} | ${this.board[1][1]} | ${this.board[2][2]}`)
  console.log(`${this.board[2][0]} | ${this.board[2][1]} | ${this.board[2][2]}`)
};

Game.prototype.placePiece = function(row, col) {
  this.board[row][col] = this.player;
  this.moves++;
}

Game.prototype.isInvalidMove = function(move) {
  console.log('invalid move. Please choose 1-9');
}

Game.prototype.convertMove = function(move) {
  let row = Math.floor((move - 1) / 3);
  let col = (move - 1) % 3;
  return {row, col};
}

Game.prototype.promptPlayer = function() {
  let move;
  do{
  	move = readlineSync.question(`Player ${this.player}, place your piece by typing 1-9: `);
  } while(this.isInvalidMove(move));
  return this.convertMove(move);
}

Game.prototype.switchPlayer = function(){
  this.player === 'x' ? this.player = 'o' : this.player = 'x';
}

Game.prototype.areAllEqual = function(a, b, c) {
  return a === b && b === c;
}

Game.prototype.isWinner = function(row, col) {
  return this.isRowWinner(row) || this.isColWinner(col) || this.isDiagWinner(row, col);
}

Game.prototype.isDraw = function() {
  return this.moves === 9;
}
 
Game.prototype.isRowWinner = function(row) {
  return this.areAllEqual(this.board[row][0], this.board[row][1], this.board[row][2]);
}

Game.prototype.isColWinner = function(col) {
  return this.areAllEqual(this.board[0][col], this.board[1][col], this.board[2][col]);
}

Game.prototype.isDiagWinner = function(row, col) {
  return this.areAllEqual(this.board[0][0], this.board[1][1], this.board[2][2] || this.areAllEqual(this.board[0][2], this.board[1][1], this.board[2][0]));
}

Game.prototype.printWinner = function(){
  this.showBoard();
  console.log(`Player ${this.player} wins!`);
}

Game.prototype.play = function() {
  this.showBoard();
  let {row, col} = this.promptPlayer();
  this.placePiece(row, col);
  if(this.isWinner(row, col)) {
  	this.printWinner();
  } else if(this.isDraw()) {
  	this.printDraw();
  } else {
  	this.switchPlayer();
  	this.play();
  }
}

let newGame = new Game();
newGame.play();