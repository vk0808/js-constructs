readline = require("readline-sync");
let number = readline.question("Enter the number: ");
let position;

if (number == "1") {
  position = "Unit";
} else if (number == "10") {
  position = "Ten";
} else if (number == "100") {
  position = "Hundred";
} else if (number == "1000") {
  position = "Thousand";
} else if (number == "10000") {
  position = "Ten Thousand";
} else if (number == "100000") {
  position = "Hundred Thousand";
} else if (number == "1000000") {
  position = "Million";
} else if (number == "10000000") {
  position = "Ten Million";
} else if (number == "100000000") {
  position = "Hundred Million";
} else if (number == "1000000000") {
  position = "Billion";
} else if (number == "10000000000") {
  position = "Ten Billion";
} else if (number == "100000000000") {
  position = "Hundred Billion";
} else {
  position = "Number exceeded";
}

console.log(position);