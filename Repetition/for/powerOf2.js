readline = require("readline-sync");
let power = 1;
const ZERO_INDEX = 0;

number = parseInt(readline.question("Enter a number: "));

for (let index = 0; index <= number; index++) {
  if (index == ZERO_INDEX) {
    console.log(index + ": " + power);
  } else {
    power *= 2;
    console.log(index + ": " + power);
  }
}