// create a tree and add every possible node to it in matter of six times and then search the tree for the
// given square and the square wanted. 6 maximum times for the knight to move to any square. or try a linked list
// and save the nodes in a hash map and find the shortest possible moves. make puckets and put all the possible moves and
// try to get every possible move in a hasmap and a linkde list and try to save the stuff into the hash map

import PossibleMoves from "./knight.js";
import HashMap from "./hashmap.js";
import LinkedList from "./linkedlists.js";

function Findshortest(from, to) {
  if (compare(from, to)) return from;

  const moves = PossibleMoves(from);

  while (moves.length !== 0) {
    const cur = moves.shift();
    console.log(find(cur));
    // let cur = moves.shift();
    //
    // console.log(cur);
    // const hmap = HashMap();
    // const possible = PossibleMoves(cur);
    // const linked = LinkedList();
    // linked.make(possible);
    // linked.print();
    //
    // console.log(linked.findSquare(to));
  }
}
let path = [];

let times = 0;
function find(item, to) {
  if (compare(item, to)) return to;
  const moves = PossibleMoves(item);

  while (moves.length !== 0) {
    const cur = moves.shift();
    const newmoves = PossibleMoves(cur);

    path.push(cur);
    newmoves.forEach((e) => {
      path.push(e);
      times++;
      if (times > 8) {
      } else {
        find(e, to);

        times = 0;
        path = [];
      }
    });
  }
}

function compare(from, to) {
  if (from[0] === to[0] && from[1] === to[1]) {
    return true;
  } else {
    return false;
  }
}

// Findshortest([1, 1], [5, 1]);
find([1, 1], [5, 1]);
console.log(path, times);
