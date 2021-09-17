const MARCH = 3;
const JUNE = 6;
const DATE = 20;

let combined = 0;
let result = false;
readline = require("readline-sync");

let day = parseInt(readline.question("Enter date : "));
let month = parseInt(readline.question("Enter month : "));

if (month >= MARCH && month <= JUNE) {
  let lastDay = 30 + (month % 2);
  if (day >= 1 && day <= lastDay) {
    combined = (month * 100) + day;
    if (combined >= 320 && combined <= 620) {
      result = true;
    } else {
      result = false;
    }
  }
}
console.log(result);