  
// 1. Temperature conversion

const prompt = require('prompt-sync')({sigint: true});
let number = prompt("Enter 1.Celsius 2.Fahreinheit ");
number = Number(number);
if(number==1){
let celsius = prompt("Enter in the range(0-100)C");
celsius=Number(celsius);
let fahreinheit = toFahreinheit(celsius);
console.log(fahreinheit+"F");
}
else if(number==2){
    let fahreinheit = prompt("Enter in the range(32-212)F");
    fahreinheit= Number(fahreinheit);
    let celsius = toCelsius(fahreinheit);
console.log(celsius+"C");
}
else{
    console.log("Invalid choice");
}
function toFahreinheit(input){
    let result=(input*1.8)+32;
    return result;
}
function toCelsius(input){
let result = (input-32)*0.556;
return result;
}

//2.Palindromes Number Problem.
{
function palindromeCheck(num1,num2){
    let palindromeNum1=0;
    while(num1>0){
        let rem = num1%10;
        palindromeNum1 = palindromeNum1*10 +rem;
        num1=Math.floor(num1/10);
    }
    if(palindromeNum1 == num2)
        return true;
    else 
        return false;
}

let num1 = 156;
let num2 = 651;
let isPalindrome = palindromeCheck(num1,num2);
console.log("Numbers are: "+num1+" & "+num2);
console.log("Is number 2 a palindrome of number 1: "+isPalindrome);
}