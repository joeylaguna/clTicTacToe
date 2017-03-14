var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/*
needed methods:
start game
prompt
way to switch player
*/


let Game = function() {
  this.board = [[1,2,3], [4,5,6], [7,8,9]];
  this.player = 'x';
};

Game.prototype.showBoard = function() {
  //show current board
  for(var i = 0; i < this.board.length; i++) {
  	console.log(this.board[i]);
  }
};

Game.prototype.parseBoard = function() {
  let optionString = ''
  for(var position in this.piecePlacment) {
  	if(this.piecePlacment[position] === 0) {
  	  optionString+=position + '\n';
  	}
  }
  return optionString;
};

Game.prototype.checkForWinner = function() {
  let winner = false;
  let count = {
  	X: 0,
  	O: 0
  };
  //check horiz
  for(var i = 0; i < this.board.length; i++ ) {
  	count['X'] = 0;
    count['O'] = 0;
  	for(var j = 0; j < this.board[i].length; j++) {
  	  if(this.board[i][j] !== 0) {
  	  	count[this.board[i][j]]++;
  	  }
  	}
  }

  if(count['X'] === 3) {
  	console.log('horiz X player wins!');
  } else if(count['Y'] === 3) {
  	console.log('horiz O player wins!');
  }

  count['X'] = 0;
  count['O'] = 0;

  //check vert
  for(var i = 0; i < this.board.length; i++) {
  	for(var j = 0; j < this.board.length; j++) {	
  	  if(this.board[j][i] !== 0) {
  	  	count[this.board[j][i]]++;
  	  }
  	}
  }

  if(count['X'] === 3) {
  	console.log('vert X player wins!');
  } else if(count['Y'] === 3) {
  	console.log('vert O player wins!');
  }

  count['X'] = 0;
  count['Y'] = 0;
  //check diag starting from index 0

  /*
   1, 0 ,0
   0, 1, 0
   0, 0, 1
  */
  

  if(count['X'] === 3) {
  	console.log('vert X player wins!');
  } else if(count['Y'] === 3) {
  	console.log('vert O player wins!');
  }
  count['X'] = 0;
  count['Y'] = 0;

  //check for diag starting from last index

}

Game.prototype.addPiece = function() {
	console.log('Add a piece to the board.  Here are your options: ');
	//method to get current options
	let options = this.parseBoard();
	console.log(options);
	let answer;
	this.checkForWinner();
	// rl.question('Select a spot from the list above', function(response) {
	//   //map response to board
	//   answer = response;
	//   rl.close();
	// });	

};

let newGame = new Game();
newGame.addPiece()
