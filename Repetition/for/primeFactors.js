readline = require("readline-sync");

let is_Prime = 1;

number = parseInt(readline.question("Enter a number: "));

for (let i = 2; i <= number; i++) {
  if (number % i == 0) {
    is_Prime = 1;
    for (let j = 2; j <= i / 2; j++) {
      if (i % j == 0) {
        is_Prime = 0;
        break;
      }
    }
    if (is_Prime == 1) {
      console.log(i);
    }
  }
}