// 1. Print powers of a 2 until a given index
const prompt = require('prompt-sync')();
let index = Number(prompt('Enter a number : '));
for(i=1;i<=index;i++)
{
    console.log(Math.pow(2,i));
}
// 2. Print the nth harmonic number.
{
const prompt = require('prompt-sync')();
let number = Number(prompt('Enter the number: '));
let harmonicNumber=0;
for(i=1;i<=number;i++)
{
    harmonicNumber+=1/i;
}
console.log(number+"Nth Harmonic number= "+harmonicNumber);
}
// 3. Find if number is prime or not.
{
const prompt = require('prompt-sync')();
let number = Number(prompt('Enter a number: '));
let flag=true;
if (number <= 1)
flag=false;
else 
{
    for (let i = 2; i < number; i++) 
    {
        if (number % i == 0)
            flag = false;        
    }
}
if(flag==false)
console.log("It is not a prime number");
if(flag==true)
console.log("It is a prime number");
}
// 4. Print prime factors of a number n.
{
const prompt = require('prompt-sync')();
let number = Number(prompt('Enter a number: '));
// Print the number of 2s that divide n
while (number % 2 == 0) 
{
    console.log("2");
    number = number / 2;
}  
// n must be odd at this point. So we can skip  
// one element (Note i = i+2)  
for (let i = 3; i * i <= number; i = i + 2) 
{
    // While i divides n, print i and divide n  
    while (number % i == 0) 
    {
        console.log(i);
        number = number / i;
    }
}
// This condition is to handle the case when after division by 2 n  
// is a prime number greater than 2  
if (number > 2)
    console.log(number);  
}
// 5.Factorial of a number n
{
const prompt = require('prompt-sync')();
let number = Number(prompt('Enter the number n: '));
let fact = 1;
if (number < 0)
    console.log("Enter a positive number : ");
else 
{
    if (number == 0)
        fact = 1;
    for (let i = 2; i <= number; i++) 
    {
        fact *= i;
    }
    console.log(number + "!=" + fact);
}
}
// 6. Take range of numbers as input and print the prime numbers
{
const prompt = require('prompt-sync')();
var numArray= new Array(5);
var primeNumberArr =[];
for(let i=0;i<numArray.length;i++)
{
    numArray[i]=Number(prompt('Enter the number: '));
}
for(let i=0;i<numArray.length;i++)
{
    let flag = true;
    if (numArray[i] <= 1)
        flag = false;
    else 
    {
        for (let j = 2; j < numArray[i]; j++) 
        {
            if (numArray[i]%j==0)
                flag = false;
        }
    }
    if(flag==true)
    primeNumberArr[i]=numArray[i];
}
console.log("Prime numbers:")
primeNumberArr.forEach(element=>console.log(element));
}