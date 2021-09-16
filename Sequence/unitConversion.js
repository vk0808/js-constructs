// a. 1ft = 12in, then 42in = ?ft
let inches = 42;
let feet = inches / 12;
console.log("42 in = ", feet, "ft")

// b. Rectangular plot of 60 feet x 40 feet in meters
let lengthInFt = 60;
let widthInFt = 40;
let lengthInMeter = lengthInFt * 0.3048;
let widthInMeter = widthInFt * 0.3048;
console.log("Rectangular plot dimension in meter: ", lengthInMeter, " X ", widthInMeter);

// c. Calculate area of 25 such plots in acres
let areaInAcre = (lengthInMeter * widthInMeter) * 0.000247;
let areaOfTotalPlots = areaInAcre * 25;
console.log("Area of 25 plots of", lengthInMeter, "m X ", widthInMeter, "m in acres is ", areaOfTotalPlots);