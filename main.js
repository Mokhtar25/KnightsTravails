// create a tree and add every possible node to it in matter of six times and then search the tree for the
// given square and the square wanted. 6 maximum times for the knight to move to any square. or try a linked list
// and save the nodes in a hash map and find the shortest possible moves. make puckets and put all the possible moves and
// try to get every possible move in a hasmap and a linkde list and try to save the stuff into the hash map
// removing everything and make a new tree with the possible moves and then depth first searsch it.
// sort the array first this way it can be easier to fin the move you want to take. and to check weather the next mov
// is possible you can add all the moves first and check if the cordients of the move are out of sope with a filter scope
// no need to alot of if statments
//
// rethink the entire problem, you are making it way too complicaited. take a step back and rethink it. the solution can
// than a couple of 80 lines complete. and use the bored to make the solution happen. currently it is under utlize.

import PossibleMoves from "./knight.js";

function Findshortest(from, to) {
  if (compare(from, to)) return from;

  const moves = PossibleMoves(from);
  const tree = Tree(moves);
  while (moves.length !== 0) {
    const cur = moves.shift();
    const newmoves = PossibleMoves(cur);
    newmoves.forEach((e) => {
      tree.insert(tree.getroot(), e);
      const other = PossibleMoves(e);
      other.forEach((s) => {
        tree.insert(tree.getroot(), s);
      });
    });
  }

  // console.log(tree.getarry());
}
// let path = []
//
// let times = 0;
// function find(item, to) {
//   if (compare(item, to)) return to;
//   const moves = PossibleMoves(item);
//
//   while (moves.length !== 0) {
//     const cur = moves.shift();
//     const newmoves = PossibleMoves(cur);
//
//     path.push(cur);
//     newmoves.forEach((e) => {
//       path.push(e);
//       times++;
//       if (times > 8) {
//       } else {
//         find(e, to);
//
//         times = 0;
//         path = [];
//       }
//     });
//   }
// }
//
function compare(from, to) {
  if (from[0] === to[0] && from[1] === to[1]) {
    return true;
  } else {
    return false;
  }
}

Findshortest([1, 1], [3, 2]);
// find([1, 1], [5, 1]);
