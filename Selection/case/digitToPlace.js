readline = require("readline-sync");
let number = readline.question("Enter the number: ");
let position;

switch (number) {
  case "1":
    position = "Unit";
    break;
  case "10":
    position = "Ten";
    break;
  case "100":
    position = "Hundred";
    break;
  case "1000":
    position = "Thousand";
    break;
  case "10000":
    position = "Ten Thousand";
    break;
  case "100000":
    position = "Hundred Thousand";
    break;
  case "1000000":
    position = "Million";
    break;
  case "10000000":
    position = "Ten Million";
    break;
  case "100000000":
    position = "Hundred Million";
    break;
  case "1000000000":
    position = "Billion";
    break;
  case "10000000000":
    position = "Ten Billion";
    break;
  case "100000000000":
    position = "Hundred Billion";
    break;
  default:
    position = "Number exceeded";
    break;
}

console.log(position);