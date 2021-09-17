readline = require("readline-sync");
let harmonic = 1;

number = parseInt(readline.question("Enter a number: "));

for (let index = 2; index <= number; index++) {
  harmonic += 1 / index;
}

console.log("Harmonic mean of " + "number: " + harmonic)