// normal function 
function add1( a, b){
  return a+b;
}
console.log(add1(45,5));//50
// anonymous function 
const add2= function (a,b){
  return a+b;
}
console.log(add2(4,5));//9

// arrow function is only for anonymous function as here we place arrow in flace of function keyword
const add3= (a,b)=>{
   return a+b;
}
console.log(add3(4,35));//39
// for concise arrow function in case of single argument you can skip round brackets statement
const square = num =>{
  return num*num;
}
console.log(square(4));// 16
// in case of single statement insode the function thatn you want ot execute you can also skip the {}  brackets 
const double = a => a*2;
console.log(double(4)); // 8

// application in array 
const  numbers = [1,2,3,4,5,6,7];
const cube = numbers.map((num)=>  num*num*num); // here map is accepting a call back therefore map is a higher order function
console.log(cube); //[1, 8, 27, 64, 125, 216, 343]
// higher order function : koi b function joh function ko as a argument leta ho ya as a result function return karta ho  above application in array is a example who is taking argumnet as a function 
// now function that return a function
 const  createdouble = ()=>{ // createdouble function hai uske andar twotimes karke ek aur function hai 
  function  twotimes (num){
    return num*2;
  }
  return twotimes;
 }
 const result = createdouble();
 console.log(result(100));// 200
 console.log(createdouble()(5)); // 10 one more way of calling a function
 const createtriple = () => {
  return num => num*3;//  returning a function
 }
 console.log(createtriple()(1000)); // 3000
// closures scoping 
 let first = 56
 let outer = (outerarg) =>{
  const outerconst= 3.14;
  let inner = (innerarg)=>{
    const innerconst = 2.71;
    console.log(` first: ${first}`);
    console.log(` outerarg: ${outerarg}`);
    console.log(` outerConst: ${outerconst}`);
    console.log(` innserArg: ${innerarg}`);
    console.log(` innerConst: ${innerconst}`);
  };
  console.log(` first: ${first}`);
    console.log(` outerarg: ${outerarg}`);
    console.log(` outerConst: ${outerconst}`);
    return inner;

 }
//  outer (78)(98);
let createCounter = () =>{
let count = 0;
return ()=> count++; // count ++; therefore result 012 if ++count; 123
}
let  counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());
// set timeout and set timeinterval
(()=>{
let count =0;
let increment = ( head )=>console.log( head , ++count);
console.log('start');
increment('first');
 let timerId = setTimeout(() => increment('timer'),5000);
 console.log('timerId',timerId);
 setTimeout(()=> {clearTimeout(timerId)},1000);
 let intervalId= setInterval(() => increment('interval'),1000);
setTimeout(() => {clearInterval(intervalId),10000});
console.log('end');
}) ();// start 1 end 2
