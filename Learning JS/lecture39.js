console.log("lets start async await  ");
// async kisi function le aage laga dege toh voh promise return karega
function hello(){
  return 'hello duniya';
}
let str = hello()
console.log(str);//hello duniya

console.log(typeof(str));//string
   // this is the noraml way 

// now doing same thing with async esse promise ka creation easy ho jata hai 
async function greet(){
  return ' have a good day';
}
let str1=greet();
console.log(str1);//Promise {<fulfilled>: ' have a good day'}
console.log(typeof(str1));//object

// this was the shortcut same this in detail without async
function namste(){
  return new Promise((resolve,reject)=>{
    resolve('namaste ji')
  })
}
let str2= namste();
console.log(str2);//Promise {<fulfilled>: 'namaste ji'}
console.log(typeof(str2));//object
// await esse promise ka calling easy ho jata hai 

 // ye hum normally fetch kar rahe hai esko function me dalna hoga 
 function fetchUser(){
fetch('https://jsonplaceholder.typicode.com/users')
.then(response =>response.json())
.then(json =>console.log(json))
.catch(error => console.log(error));
 }
 // ab esko asyn and await se karege
 async function getUsers(){
  console.log('inside getusers');
  try{
   let response= await fetch('https://jsonplaceholder.typicode.com/users') // jph object aap neeche axpect kar rhe hai direcly usko yhi le skte hai mtlb ki response joh har baar .then lagate the anadr ek callback function pass karte the tb jake  response milta tha 
   let json = await response.json();
   console.log(json);
  }catch(error){
    console.log(error);    
  }
 }
 getUsers();
 // modules chunks of code

  export function add(a,b){
  return a+b;
 }
  export function subtract(){
  return a-b;
 }
  export function multiply(){
  return a*b;
 }
 export function divide(){
  return a/b;
}