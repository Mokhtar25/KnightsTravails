import PossibleMoves from "./knight.js";
// create a tree and add every possible node to it in matter of six times and then search the tree for the
// given square and the square wanted. 6 maximum times for the knight to move to any square. or try a linked list
// and save the nodes in a hash map and find the shortest possible moves. make puckets and put all the possible moves and
// try to get every possible move in a hasmap and a linkde list and try to save the stuff into the hash map

function Findshortest(from, to) {
  if (from[0] === to[0] && from[1] === to[1]) return true;

  const possibleMoves = PossibleMoves(from);

  while (possibleMoves.length !== 0) {
    const cur = possibleMoves.shift();
    console.log(cur);
    return Findshortest(cur, to);
  }
}

console.log(Findshortest([0, 0], [3, 3]));
