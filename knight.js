// empty 0 // visited 1 // knight 2

export default function PossibleMoves(x, y) {
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
