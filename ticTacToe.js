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
  this.piecePlacment = {
  	topLeft: 0,
  	topMiddle: 0,
  	topRight: 0,
  	middleLeft: 0,
  	middleMiddle: 0,
  	middleRight: 0,
  	bottomLeft: 0,
  	bottomMiddle: 0,
  	bottomRight: 0
  }
};

Game.prototype.showBoard = function() {
  //show current board
  console.log(this.board);
};

Game.prototype.parseBoard = function() {
  let optionString = ''
  for(var position in this.piecePlacment) {
  	if(this.piecePlacment[position] === 0) {
  	  optionString+= ' ' + position;
  	}
  }
  console.log('this is optionSTring: ' + optionString);
};

Game.prototype.addPiece = function() {
  console.log('Add a piece to the board: ');
  //method to get current options
  this.parseBoard();
};

let newGame = new Game();
newGame.addPiece();

