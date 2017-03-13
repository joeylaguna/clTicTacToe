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
};
