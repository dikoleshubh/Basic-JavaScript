// 1. Print powers of a 2 until a given index
const prompt = require('prompt-sync')();
let index = Number(prompt('Enter the index: '));
let i=1;
let power=0;
while(i<=index && power<256)
{
    power=Math.pow(2, i);
    console.log(power);
    i++;
}
// 2. Find Magic Number.
{
const prompt = require('prompt-sync')();
let number = Math.floor(Math.random()*100); 
console.log("Number is : "+number);
let n=number;
let start =0;
//let end = 100;
while(number>0){
if(n>number||n<number){
while(number<n){
    end = n;
    n=((start+end)/2);
}
while(number>n){
    start = n;
    n=((start+end)/2);
}
}
else if(number==n)
{
    console.log("Found the number "+n+" !!");
    break;
}
}
}
// 3. Flip coin till either heads or tails win 11 times
{
const prompt = require('prompt-sync')();
let countHeads=0;
let countTails=0;
while(countHeads<11 && countTails<11)
{
    var tossResult = Math.floor(Math.random()*10)%2;
    if (tossResult == 0)
        countHeads++;
    else
        countTails++;
}
if(countTails==11)
console.log("Tails won");
if(countHeads==11)
console.log("Heads won");
}