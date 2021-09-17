const HEAD = 1;
let coinFlip = Math.floor(Math.random() * 10) % 2;

if (coinFlip == HEAD) {
  console.log("head");
} else {
  console.log("tail");
}