readline = require("readline-sync");

let rem;
let rev = 0;

num1 = parseInt(readline.question("Enter a number: "));
num2 = parseInt(readline.question("Enter a number: "));

function checkPalindrome(temp) {
  i = temp;
  while (i > 0) {
    rem = i % 10;
    rev = (rev * 10) + rem;
    i = Math.floor(i / 10);
  }
  if (rev == num2) {
    return 1;
  } else {
    return 0;
  }
}

pal = checkPalindrome(num1);

if (pal == 1) {
  console.log(num1 + " " + num2 + " are palindromes")
} else {
  console.log(num1 + " " + num2 + " are not palindromes")
}