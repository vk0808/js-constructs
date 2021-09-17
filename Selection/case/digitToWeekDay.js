readline = require("readline-sync");

let number = parseInt(readline.question("Enter a single digit number (1-7): "));
let weekDay;

switch (number) {
  case 1:
    weekDay = "Sunday";
    break;
  case 2:
    weekDay = "Monday";
    break;
  case 3:
    weekDay = "Tuesday";
    break;
  case 4:
    weekDay = "Wednesday";
    break;
  case 5:
    weekDay = "Thursday";
    break;
  case 6:
    weekDay = "Friday";
    break;
  case 7:
    weekDay = "Saturday";
    break;
  default:
    weekDay = "wrong input";
    break;
}

console.log(weekDay);