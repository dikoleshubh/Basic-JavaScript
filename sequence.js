// 1.Random function to get a single digit number.
let number = Math.floor(Math.random()*10);
console.log(number);
// 2.Using Random to get Dice Number between 1 to 6.
let diceNumber = (Math.floor((Math.random()*10)%6))+1;
console.log(diceNumber);
// 3. Adding two Random Dice number and print the result.
let diceNumber1 = (Math.floor((Math.random()*10)%6))+1;
console.log(diceNumber1);
let diceNumber2 = (Math.floor((Math.random()*10)%6))+1;
console.log(diceNumber2);
console.log("Sum : "+(diceNumber1+diceNumber2));
// 4.Writting a program that reads 5 Random 2 Digit values.
numberArray =[];
sum =0;
for(let i =0;i<5;i++)
{
    numberArray[i] = Math.floor(Math.random()*100);
    console.log(numberArray[i]);
    sum+=numberArray[i];
}
//finding their sum and  average.
console.log("Sum : "+sum);
avg = sum/5;
console.log("Average : "+avg);
// 5.Unit Conversion.
//5.a Conversion inch to feet.
const FEET_IN_INCH=12;
let numberOfInch=42;
let conversionRatio = 1/FEET_IN_INCH;
let numberOfFeet= numberOfInch*conversionRatio;
console.log("Number of feet : "+numberOfFeet);
//5.b Rectangular Plot of 60 feet x 40 feet in meters.
let areaInFeet =2400;
const FEETSQ_TO_METERSQ = 0.3048*0.3048;
let areaInMeters = parseInt(areaInFeet*FEETSQ_TO_METERSQ);
console.log("Area in meters : " + areaInMeters);
//5.c Calculating area of 25 such plots.
let area = areaInMeters*25;
console.log("Area in meters  for 25 plots : "+area);