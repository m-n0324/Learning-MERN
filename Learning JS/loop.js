// let i =0;
// while(i<5){
//   console.log(i);
//   i++;
// }
const heartsContainer = document.getElementById("hearts");
setInterval(() => {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 3 + 2 + "s";
  heart.innerText = "❤️";
  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}, 300);
// 1.to print multiplication table
/*let num= prompt("enter the number");
let i=1;//initilization
while(i<=10){//condition
  console.log( num +'X'+i+'='+(i*num));
  i++;// updation
}*/

// 2.to sum odd numbers to a specified num
/*let num=15;
let  i = 1;
let sum = 0;
while (i< num){
  sum = sum+i;
  i = i+2;
}
console.log(` The sum od odd numbers till ${num} is ${sum}.`);*/

/*3. factorial of a number.
let i = 1;
let result = 1;
function factorial(num) {
  while (i <= num) {
    result = i * result;
    i++;
  }
  return result;
}
console.log( `the factorial is ${factorial(5)}.`);*/

/*4.continuously reads integers from the user and prints their square use infinite loop amnd break the statement when the special character -1 is entered by the user.
let num = prompt("Enter a number (-1 to stop):");
while (num != -1) {
  let square = num * num;
  alert("Square of " + num + " is " + square);
  num = prompt("Enter a number (-1 to stop):");
}
let num = prompt("Enter a number (-1 to stop):");
for(; num != -1;){
  let square = num*num;
  alert("Square of " + num + " is " + square);
  num = prompt("Enter a number (-1 to stop):");
  
}*/
// 5. to enter numbers give sum of positive numbers and skip,negative ones
/*let sum = 0;

while (true) {
  let input = prompt("Enter a number (enter 0 to stop):");
  let num = Number(input); // convert to number

  if (num === 0) {
    break; // exit loop
  }
  if (num < 0) {
    continue; // skip negative numbers
  }

  sum += num; // add only positive numbers
}

alert("The sum of all positive numbers is: " + sum);*/

// print even  numbers and skip odd numbers
let num = 45;
while (true){
  
  if (num === 0){
    break;
  }
  if (num %2 != 0){
    continue;
  }
  console.log(num);
}