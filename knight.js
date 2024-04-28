// empty 0 // visited 1 // knight 2

const board = Array(8)
  .fill(0)
  .map(() => Array(8).fill(0));

board[3][3] = 1;

function PossibleMoves(x, y) {
  const array = Array(8)
    .fill(0)
    .map(() => Array(8).fill(0));

  const possiblemoves = [];
  // upleft
  if (y + 2 < 8 && x + 1 < 8) {
    possiblemoves.push([[x + 1], [y + 2]]);
  }

  // upright
  if (y + 2 < 8 && x - 1 >= 0) {
    possiblemoves.push([[x - 1], [y + 2]]);
  }

  // downleft
  if (x + 1 < 8 && y - 2 >= 0) {
    possiblemoves.push([[x + 1], [y - 2]]);
  }

  // downright
  if (x - 1 >= 0 && y - 2 >= 0) {
    possiblemoves.push([[x - 1], [y - 2]]);
  }

  // rightup
  if (x + 2 < 8 && y + 1 < 8) {
    possiblemoves.push([[x + 2], [y + 1]]);
  }

  // rightdown
  if (x + 2 < 8 && y - 1 >= 0) {
    possiblemoves.push([[x + 2], [y - 1]]);
  }

  // leftup
  if (x - 2 >= 0 && y + 1 < 8) {
    possiblemoves.push([[x - 2], [y + 1]]);
  }

  // leftdown
  if (x - 2 >= 0 && y - 1 >= 0) {
    possiblemoves.push([[x - 2], [y - 1]]);
  }
  return possiblemoves;
}
console.log(PossibleMoves(1, 1));
