readline = require("readline-sync");
range = parseInt(readline.question("Enter a number: "));

const NOT_PRIME = 0;
const PRIME = 1;
let check;

for (let num = 2; num < range; num++) {
  check = PRIME;
  for (let index = 2; index < num; index++) {
    if (num % index == NOT_PRIME) {
      check = NOT_PRIME;
      break;
    }
  }
  if (check == PRIME) {
    console.log(num);
  }
}
