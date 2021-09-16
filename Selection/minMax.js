let num1 = Math.floor(Math.random() * 1000);
let num2 = Math.floor(Math.random() * 1000);
let num3 = Math.floor(Math.random() * 1000);
let num4 = Math.floor(Math.random() * 1000);
let num5 = Math.floor(Math.random() * 1000);
console.log(num1, num2, num3, num4, num5);

let max;
let min;

if (num2 > num1) {
  max = num2;
  min = num1;
} else {
  max = num1;
  min = num2;
}

if (num3 > num4) {
  if (num3 > max) {
    max = num3;
  }
  if (num4 < min) {
    min = num4;
  }
} else {
  if (num4 > max) {
    max = num4;
  }
  if (num3 < min) {
    min = num3;
  }
}

if (num5 > max) {
  max = num5;
} else if (num5 < min) {
  min = num5;
}

console.log("Max value: " + max);
console.log("Min value: " + min);