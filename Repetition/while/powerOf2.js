readline = require("readline-sync");

number = parseInt(readline.question("Enter a number: "));

let index = 0;
let power = 1;
const ZERO_INDEX = 0;
const MAX_PW = 256;

while (index <= number && power <= MAX_PW) {
  if (index == ZERO_INDEX) {
    console.log(power);
  } else {
    power *= 2;
    console.log(power);
  }
  index++;
}