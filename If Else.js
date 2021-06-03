  

// LEAP YEAR PROBLEM
const prompt = require('prompt-sync')({sigint: true});
let year = prompt("Enter the year");
year = Number(year);
if(year%400==0 || year%4==0){
    console.log("leap year");
}
else{
    console.log("Not leap year");
}
// TOSS SIMULATION
var tossResult = Math.floor(Math.random()*10)%2;
if(tossResult==0)
console.log("It is Heads ");
else
console.log("It is Tails ");

// FIND MAXIMUM NUMBER
let largestNumber=numArray[0];
let smallestNumber=numArray[0];
for (let i=0 ; i<5; i++)
{
if (numArray[i] > largestNumber) 
{
largestNumber = numArray[i];
}
if (numArray[i] < smallestNumber) 
{
smallestNumber= numArray[i];
}
}
console.log("Smallest number : "+smallestNumber);
console.log("Largest number : "+largestNumber);