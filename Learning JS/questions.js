
// conditional statements practice
// 1.eligilble for voting check=> if else
function knowVote(age){
if (age<18){
  console.log('you are kid not eligible for voting.')
} else {
  console.log('you are adult eligible for voting.')
}
}
// above code using ternary operator
let age =35;
let result =(age>=18)? 'adult': 'minor';

// 2. to check grade => if else if 
function knowGrade(marks){ 
 if (marks>=90){
  console.log('Grade A');
 } else if(marks>=80 && marks<90){
  console.log('Grade B ');
 } else if(marks>=70 && marks<80){
  console.log('Grade C ');
 }else if(marks>=60 && marks<70){
  console.log('Grade D ');
 }else{
  console.log('Grade F')
 }
}
// 3. to know about the number => nested if 

 function knowNumber(number){
 if(number >0){
  if(number %2==0){
    console.log('number is positive and even.');
  } else {
     console.log('number is positive and odd.');
  }
 } else if(number<0) {
  if(number %2==0){
     console.log('number is negative and even.')
  }else{
     console.log('number is negative and odd.')
  }
 }else{
   console.log('number is zero.')
 }

 }
 // 4. to check ticket price of the movie
 
 function checkPrice(age , day){
  
  if(age<13){
    console.log('Ticket is free');
  }else if(age>=13 && age<=60){
    if(day.toLowerCase() === 'sunday'){
      console.log('Ticket prize is ₹500');
    }else{
      console.log('Ticket prize is ₹300');
    }
  }else{
    console.log('Ticket prize is ₹250');
  }

 }
 /*checkPrice(36,'Sunday');
 knowNumber(10);
 knowGrade(98);
 evenOdd(5);
 console.log(result);
console.log(day);
console.log(getsum(15,10));
largerOne(8,45);
celciusTOfahrenheit(100);
avg(1,2,3,4,5);
square(25);
concatString('hii','mansi');
swap(2,3);
swap1(2,3);
 knowVote(2);*/
 //5. switch case
 let day = "sunday";
 switch(day.toLowerCase()){
  case ("monday"):
    day = "Happy Monday!";
    break;
  case ("tuesday"):
    day = "Terrific Tuesday!";
    break;
  case ("wednesday"):
    day = "Wonderful Wednesday!";
    break;
  case ("thursday"):
    day = "Thriving Thursday!";
    break;M
  case ("friday"):
    day = "Fun Friday!";
    break;
  case ("saturday"):
    day = "Super Saturday!";
    break;  
  case ("sunday"):
    day = " Serene Sunday!";
    break;  
  default : 
  day = " Invalid day";

 }
 
 // 6. get sum=> return and parameter
 function getsum(a,b){
  let sum = a+b;
  return sum;
  // console.log(sum);
 }
 
 // to check number is even or odd
 function evenOdd(num){
 if(num%2 == 0){
  console.log('even');
 }else {
  console.log(' odd');
 }
 }
 // to check greater number
 function largerOne(a,b){
  if(a>b){
    console.log(`${a} is greater.`);
  }else{
    console.log(`${b} is greater.`);
  }
 }
 // celcius to fahrenheit conversion
function celciusTOfahrenheit(C){
  let fahren = (9/5)*C+32;
  console.log(`In fahrenheit it is ${fahren} F`);
}
// to get square of any number.
function square(num){
  let sq=num*num;
  console.log(sq);
}
// get average of five numbers 
function avg(a,b,c,d,e){
  let average=(a+b+c+d+e)/5;
  console.log(`Average of numbers is ${average}`)
}
// returns concatination of two strings
function concatString(s1,s2){
  let concat = (`concatination of strings ${s1 + s2}`);
  console.log(concat);
}
 /* to  increment  a number that does not change before and after function call =>When you pass a number to a function in JavaScript, the function does not get the original number. Instead, it gets a copy of that number. This means whatever changes you make inside the function only happen to the copy — not the original value.
 So, even if you increase the number inside the function, the original number outside the function stays the same.This happens because numbers (and other simple values like strings or booleans) are primitive data types, and JavaScript always passes primitive values by value — which means it gives the function a copy, not the real thing.In contrast, when you pass an object or array, JavaScript passes it by reference. That means the function can directly access and change the original object or array.*/
function increment(num){
  num+=1;
  console.log(num);
}
// let originalnum = 10;
// console.log(` original number before function call ${originalnum}`);
// increment(originalnum);
// console.log(` original number after function call ${originalnum}`);

// function to swap to numbers logic one
function swap(a,b){
  console.log(`before swapping ${a} ${b} `);
  let temp=a;
  a=b;
  b=temp;
  console.log(`after swapping ${a} ${b} `);
}
 
function swap1(a,b){
  console.log(`before swapping ${a} ${b} `);
  a=a+b;
  b=a-b;
  a=a-b;
  console.log(`after swapping ${a} ${b} `);
}
// completed till swapping
