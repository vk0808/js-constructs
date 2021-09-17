readline = require("readline-sync");

let a = parseInt(readline.question("Enter a: "));
let b = parseInt(readline.question("Enter b: "));
let c = parseInt(readline.question("Enter c: "));

let m1 = a + b * c;
let m2 = a % b + c;
let m3 = c + a / b;
let m4 = a * b + c;

console.log(m1, m2, m3, m4)

let max = 0;
let min = 0;

if (m1 > m2) {
  if (m1 > m3) {
    if (m1 > m4) {
      max = m1;
    } else {
      max = m4;
    }
  } else if (m3 > m4) {
    max = m3;
  } else {
    max = m4;
  }
} else if (m2 > m3) {
  if (m2 > m4) {
    max = m2;
  } else {
    max = m4;
  }
} else if (m3 > m4) {
  max = m3;
} else {
  max = m4;
}

if (m1 < m2) {
  if (m1 < m3) {
    if (m1 < m4) {
      min = m1;
    } else {
      min = m4;
    }
  } else if (m3 < m4) {
    min = m3;
  } else {
    min = m4;
  }
} else if (m2 < m3) {
  if (m2 < m4) {
    min = m2;
  } else {
    min = m4;
  }
} else if (m3 < m4) {
  min = m3;
} else {
  min = m4;
}

console.log("Max: " + max);
console.log("Min: " + min);