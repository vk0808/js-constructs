readline = require("readline-sync")

let year = parseInt(readline.question("Enter year : "));

let condition1 = year % 4;
let condition2 = year % 100;
let condition3 = year % 400;

if (condition1 == 0 && condition2 != 0 || condition3 == 0) {
  console.log(year + " is a leap year");
} else {
  console.log(year + " is not a leap year");
}