import PossibleMoves from "./knight.js";

function Findshortest(from, to) {
  if (from[0] === to[0] && from[1] === to[1]) return true;

  const possibleMoves = PossibleMoves(from);

  while (possibleMoves.length !== 0) {
    const cur = possibleMoves.shift();
    console.log(cur);
    return Findshortest(cur, to);
  }
}

console.log(Findshortest([1, 1], [3, 5]));
