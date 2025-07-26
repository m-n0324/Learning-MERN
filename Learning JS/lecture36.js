console.log("events"); // ussing event listener
let clickhandler = () =>{
  console.log('button clicked');
}// in this case we are writing onclick function in html file 
let button = document.getElementById('myButton');
//button.onclick= clickhandler;//  this way we dont need to write onlick in html

let  buttonClickhandler = () =>{
  for(let i = 0;i<5;i++){
    console.log(i);
  }
}
// button.onclick= clickhandler;
// button.onclick= buttonClickhandler; if i write this order then after events on clicking button  1 to 4 will print again and again
// button.onclick= buttonClickhandler;
// button.onclick= clickhandler; // in this order button clicked will be printed on clciking the button so if we use this way we can use only one ahndler at a time  this was Method 1
// so esse better ya dusra option hai event listner method 2
// button .addEventListener( 'click',clickhandler) // button clicked 
// button .addEventListener( 'click',buttonClickhandler) // when we are writing both statements using event listner both button clicked and 0 to 4 are printing as output
// button .removeEventListener( 'click',clickhandler);
// jb event call hote hai tb two typw ke process ho rhe hote hai bubbling and  stopping propagation
// bubbling em nested events hote hai 
// const outer = document.querySelector('.outer');
// const inner = document.querySelector('.inner');
// outer.addEventListener('click',()=>{
//   console.log("outer");
// });
// inner.addEventListener('click',()=>{
//   console.log("inner");}); // outside button div part par click karege toh outer print hoga jb button par click karege toh phele inner print hoga then uska parent outer 
// stopping propagation agr koi event child me defien ahi toh voh parent tk na jae usek liye hota hai ye 
const outer = document.querySelector('.outer');
const inner = document.querySelector('.inner');
// outer.addEventListener('click',(event)=>{
//   console.log("outer");
// });
// inner.addEventListener('click',(event)=>{
//   console.log("inner");
//   event.stopPropagation();
// }); // in this case button me click karege to bs inner hi print hoga bs aur div area par click karege toh bs outer print hoga yaha par event ki jagha bs ek jagha hi lekhege toh chalega event ki jagha kuch b leakh skte hai.
// event propagation ka order b change kar skte hai parent se child tk bhar se anadar ki taraf
// outer.addEventListener('click',(event)=>{console.log("outer");
// },true);
// inner.addEventListener('click',(event)=>{console.log("inner");
//   event.stopPropagation();
// });// in this case phlele outer then inner print hoga pass true for capturing
// javascript me constructor blueprint hota hai aur object are real values in memeory yaha par zaruri nhi hai ki object banaen ke liye constructor ho hi yaha par main advantage ye hai ki ek jaisi multiple cheeze banana ho  
// constructor ek type function hota hai joh ki captial letter se start hoga
let student1 = {
  name: 'ram' ,
  age: 16,
  course: 'cse',
  roll: 2,
}
let student2 = {
  name: 'ram' ,
  age: 16,
  course: 'cse',
  roll: 2,
}
// function Student( name,age,course,roll){
//   this.name=name;
//   this.age= age;
//   this.course=course;
//   this.roll= roll;
//   this.printname = function(){
//     console.log(this.name);
//   }

// }
// let student3= new Student( 'hari',14,'it',78);
// console.log(student3);
// student3.printname();
//according to ecmascript we can use class
class animals {
  pets(name,age){
    this.name=name;
    this.age=age;
  }
}
const janvar = new animals('cat',9 );
console.log(janvar.name);