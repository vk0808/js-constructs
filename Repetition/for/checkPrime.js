readline = require("readline-sync");

const NOT_PRIME = 0;
let flag = 1;

number = parseInt(readline.question("Enter a number: "));

for (let index = 2; index <= number / 2; index++) {
  if (number % index == NOT_PRIME) {
    flag = 0;
  }
}

if (flag == 0) {
  console.log(number + " is not a prime");
} else {
  console.log(number + " is a prime");
}