readline = require("readline-sync");

let number = parseInt(readline.question("Enter a single digit number (1-7): "));
let weekDay;

if (number == 1) {
  weekDay = "Sunday";
} else if (number == 2) {
  weekDay = "Monday";
} else if (number == 3) {
  weekDay = "Tuesday";
} else if (number == 4) {
  weekDay = "Wednesday";
} else if (number == 5) {
  weekDay = "Thursday";
} else if (number == 6) {
  weekDay = "Friday";
} else if (number == 7) {
  weekDay = "Saturday";
} else {
  weekDay = "wrong input";
}

console.log(weekDay);