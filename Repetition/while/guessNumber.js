let guess = -1;
let low = 0;
let high = 100;
let num = 0;
const YES = 'yes';
const NO = 'no';

readline = require("readline-sync");


while (guess != low) {
  mid = Math.floor((high + low) / 2);
  query = readline.question("type yes/no: if number less than " + mid + ": ");
  if (query == YES) {
    high = mid;
  } else {
    low = mid;
  }
  if (low == high - 1) {
    guess = low;
  }
}

console.log(guess);