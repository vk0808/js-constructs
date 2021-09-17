readline = require("readline-sync");

let factorial = 1;
number = parseInt(readline.question("Enter a number: "));

for (let index = 2; index <= number; index++) {
  factorial *= index;
}
console.log(factorial);