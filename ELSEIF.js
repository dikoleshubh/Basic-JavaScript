const prompt=require('prompt-sync')();
// 1. Read a number and print in words

let num=prompt('Enter a single digit number: ');
if(num==1)
console.log("One");
else if(num==2)
console.log("Two");
else if(num==3)
console.log("Three");
else if(num==4)
console.log("Four");
else if(num==5)
console.log("Five");
else if(num==6)
console.log("Six");
else if(num==7)
console.log("Seven");
else if(num==8)
console.log("Eight");
else if(num==9)
console.log("Nine");
else
console.log("Zero");


// 2. Read a number and print the day

num = prompt('Enter the number: ');
if(num==1)
console.log("Monday");
else if(num==2)
console.log("Tuesday");
else if(num==3)
console.log("Wednesday");
else if(num==4)
console.log("Thursday");
else if(num==5)
console.log("Friday");
else if(num==6)
console.log("Saturday");
else if(num==7)
console.log("Sunday");


// 3. Display ones, tens, hundreds,... digits in a number
num=Number(prompt('Enter the number: '));
let arr =[];
i=0;
while(num!=0)
{
    remainder=Math.floor(num%10);
    arr[i]=remainder;
    i++;
    num=num/10;
}
for(i=0;i<arr.length;i++)
{
    if(i==0)
    console.log("Value at ones place: "+arr[i]);
    else if(i==1)
    console.log("Value at tens place: "+arr[i]);
    else if(i==2)
    console.log("Value at hundreds place: "+arr[i]);
    else if(i==3)
    console.log("Value at thousand place: "+arr[i]);
}


// 4. Enter three nos and find max and min after operations

let a=Number(prompt("Enter first number:a= "));
let b=Number(prompt("Enter second number:b= "));
let c=Number(prompt("Enter third number:c= "));

arr =[];
arr[0]=a+b*c;
arr[1]=c+a/b;
arr[2]=a%b+c;
arr[3]=a*b+c;
let largestNumber=arr[0];
let smallestNumber=arr[0];
for (let i=0 ; i<4; i++)
{
    console.log(arr[i]);
    if (arr[i] > largestNumber) 
    {
        largestNumber = arr[i];
    }
    if (arr[i] < smallestNumber) 
    {
        smallestNumber = arr[i];
    }
}
console.log("Smallest number : "+smallestNumber);
console.log("Largest number : "+largestNumber);
© 2021 GitHub, Inc.