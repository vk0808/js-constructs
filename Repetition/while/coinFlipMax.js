let headCount = 0;
let tailCount = 0;
let count = 0;
let winner;

const WIN_COUNT = 11;
const HEAD = 1;

while (count < WIN_COUNT) {
  coinFlip = Math.floor(Math.random() * 10) % 2;
  if (coinFlip == HEAD) {
    headCount++;
  } else {
    tailCount++;
  }

  if (headCount > tailCount) {
    count = headCount;
    winner = "head";
  } else {
    count = tailCount;
    winner = "tail";
  }
}
console.log("Head: " + headCount + " Tail: " + tailCount);
console.log("Winner: " + winner)