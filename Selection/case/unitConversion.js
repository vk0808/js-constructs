readline = require("readline-sync");

console.log("1. Feet to Inch");
console.log("2. Feet to Meter");
console.log("3. Inch to Feet");
console.log("4. Meter to Feet");

choice = readline.question("Choose a conversion type: ");
let num = parseInt(readline.question("Enter number: "));
let conversion;

switch (choice) {
  case "1":
    conversion = num * 12;
    break;

  case "2":
    conversion = num / 3.2808;
    break;

  case "3":
    conversion = num / 12;
    break;

  case "4":
    conversion = num * 3.2808;
    break;

  default:
    conversion = "Invalid choice";
    break;
}

console.log(conversion);