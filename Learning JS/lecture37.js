console.log(" this keyword inheritance");
let container=document.getElementById('container');
let button1=document.getElementById('button1');
let button2=document.getElementById('button2');
let button3=document.getElementById('button3');
// container.addEventListener('click',function(){
//   console.log(this.id)
// })
// button1.addEventListener('click',function(){
//   console.log(this.id);// button1
// }) // button1 ANd container ka ek sth event listener hoga output button1 container
function clickhandel(){
  console.log(this.id);
  this.style.color='white';
  this.style.backgroundColor ='red';
}
container.addEventListener('click',clickhandel)
button1.addEventListener('click',clickhandel) // output button1 container this espar depend kar rhi hai ki call kaha se ho rah hai 
button2.addEventListener('click',clickhandel) // button2 container
button3.addEventListener('click',clickhandel)// button3 container
// inheritance

class Cat{
  constructor(name){
    this.name1= name;
    this.legs = 4;
  }
  move(){
    console.log(`The cat is moving on ${this.legs} legs`);
  }
  speak(){
    console.log(` ${this.name1} makes a noise.`);
  }
} 
let billu = new Cat ("billu");
// billu.move();
// billu.speak();
class Lion extends Cat{ // lion calss will inherit all the properties of cat class and futher u can define more properties for lion specifically 
  eat(){
    console.log(`${this.name1} loves to eat meat.`)
  }
  speak(){
    console.log(` ${this.name1} roars.`); // speak hai already cat me laion mujhey wahi speak se kuch aur karan hai to u have to redefine it in lion 
  }
  

}
let simba = new Lion("Simba");
// simba.move();
// simba.speak();
// simba.eat();

// now we are learning static methods
class AccountHolder{
  constructor (firstName, LastName){
    this.first=firstName;
    this.last=LastName;
    this.accountBalance=0;

  }
  static rateOfIntreset = 8;
  // behavior
  credit(amount){
    this.accountBalance+=amount;
  }
  debit(amount){
    this.accountBalance-=amount;
  }
  getAccountbalance(){// property 
    console.log(`${this.first}  your current account balance is ${this.accountBalance}`)
  }
  static getInterest(){ // method
    console.log(`Rate of intrest is 4 %`)
  }
  static getrate(){
    console.log(` rate of intrest is ${this.rateOfIntreset}`)
  }

}
let mansi = new AccountHolder("Mansi");
// mansi.getAccountbalance();
// mansi.credit(1000);
// mansi.debit(200);
// mansi.getAccountbalance();
// AccountHolder.getrate();
//AccountHolder.getAccountbalance(); ye aapka function nhi hai objectka function hai so object banan hoga es function ko call karne ke liye therefore this will give error. eske liye static method banega  satic keyword use
// AccountHolder.getInterest();
// mansi.getInterest(); this will give error here getintreset bs class ke upar call hoga object mansi pa nhi 

// error handling 
let parseStringToJson = (jsonString)=>{
  try{
  return JSON.parse(jsonString);
  }catch(error){
  console.log('Error Occuured');
  console.log(error.message);
  return{};
}
  
}
let obj = {
  a:1,
  b:1,
  c:1,
}
let objString = JSON.stringify(obj);
// console.log(objString); //{"a":1,"b":1,"c":1}
let newobj = parseStringToJson(objString);
// console.log(newobj);//{a: 1, b: 1, c: 1}a: 1b: 1c: 1[[Prototype]]: Object

// let newobj2 = parseStringToJson('{ "A":;1}');
// try{
//   newobj2 = parseStringToJson('{ A:1}');
// }catch(error){
//   console.log('Error Occuured');
//   console.log(error.message);
// }
// console.log(newobj2);
// console.log('this is end');
// throw error

function divide (a,b){
  if (b===0){
    throw new Error('divide by zero is invalid');// Error msut be wrritenlike this only 
  }
    return a/b;
}
console.log(divide(6,3));
// console.log(divide(6,0));//Infinity // error through karega aage ki cheze execute nhi hogi 
try {
  console.log(divide(6,3));
}catch (error){
  console.log("error occured")
  console.log(error.message);
}

console.log(  divide(4,9));
// apart from try cath finally always print hota hai finally ki priority sab se zada hoti hai return se b zada aur agr finaly me kuch return kara diya roh bki return kaam nhi karege 

function jsonstringtoJson(str){
  try{
    return JSON.parse(str);
  }catch(error){
    console.log('error occured');
    console.log(error.message);
    return{};
  }finally {
    console.log('finally');
  }
}
let objs=jsonstringtoJson('{"A":1}');
console.log('objs',objs);// finally objs {}
