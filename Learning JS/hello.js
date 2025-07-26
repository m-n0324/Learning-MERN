// alert(`your final bill is ${100+20+30}`);

let a = 79990;
let b = 24990;
let c = a+b;
let sum1 =  a*18/100;
let sum2 =  2*(b*18/100);
let amount = (sum1+sum2);
alert(`your order summary after 18% GST ${amount+c}`)
console.log(`your order summary after 18% GST ${amount+c}`);
let greet = '56';
let name = ' Mansi';
console.log(greet+ name);
let itemsInBag = 0;
document.querySelector("#items").innerHTML= `Your Bag has ${itemsInBag} items.`;
function addTOBag(){
  itemsInBag = itemsInBag+1;
  document.querySelector("#items").innerHTML= `Your Bag has ${itemsInBag} items.`;
}
function addTOWishlist(){
  itemsInBag = itemsInBag-1;
  document.querySelector("#items").innerHTML= `Your Bag has ${itemsInBag} items.`;
}
function addTOsale(){
  itemsInBag = itemsInBag+2;
  document.querySelector("#items").innerHTML= `Your Bag has ${itemsInBag} items.`;
}