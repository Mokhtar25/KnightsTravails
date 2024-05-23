import PossibleMoves from "./knight.js";

console.log(find([1, 1], [7, 7]));

function find(po1, po2) {
  if (cmp(po1, po2)) return po1;

  const stack = [];
  const moves = PossibleMoves(po1);
  moves.map((e) => stack.push(e));
  let visited = [];

  let path = [];

  debugger;
  while (stack.length !== 1) {
    let cur = stack.shift();
    if (!isIn(visited, cur)) {
      path.push(cur);
      if (cmp(cur, po2)) {
        return path;
      } else {
        visited.push(cur);
      }
      let newmoves = PossibleMoves(cur);
      newmoves.map((e) => stack.push(e));
    }
  }
}

function cmp(po1, po2) {
  if (po1[0] === po2[0] && po1[1] === po2[1]) return true;
  return false;
}

function isIn(arr, po) {
  for (let i = 0; i < arr.length; i++) {
    let cur = arr[i];
    if (cur[0] === po[0] && cur[1] === po[1]) return true;
  }
  return false;
}
