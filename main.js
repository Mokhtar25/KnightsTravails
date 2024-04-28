import PossibleMoves from "./knight.js";

function Findshortest(from, to) {
  if (from === to) return true;
  console.log(from);
  const possibleMoves = PossibleMoves(from);

  console.log("=====po======\n", possibleMoves);
  // while (possibleMoves.length !== 0) {

  if (possibleMoves) {
    const cur = possibleMoves.shift();
    console.log(cur, "==================");
    return Findshortest(cur[0], to);
  }

  // }
}

console.log(Findshortest([1, 1], [3, 5]));
