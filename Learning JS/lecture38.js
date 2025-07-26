console.log('promises');// imp topic
function getDataFromInternet( successCallBack){
  console.log('getting data from internet');
  setTimeout(()=>{
    successCallBack('Google');
  },3000);
}
function setDataToDb( successCallBack){
  console.log('sending data to db');
  setTimeout(()=>{
    successCallBack('db_row_25');
  },2000);
}
function setResponseToUser( successCallBack){
  console.log('sending reponse to user');
  setTimeout(()=>{
    successCallBack();
  },5000);
}

// getDataFromInternet((data)=>{
//   console.log(`data is fetched ${data}` )
//   setDataToDb((id)=>{
//     console.log(`data is saved in db withuser id ${id}`);
//     setResponseToUser(( )=>{
//       console.log(('response sent to user'));
// // yaha par ek ke andar ek call back hai it is called callback hell
//     });
//   });
// }); //promises//getting data from internet//getting data from internet//finee//got data from internet//data is fetched
// creating promise
// function getdata(successCallBack){
//   console.log('getting data from internet');
//   successCallBack('google');
// }
// getdata((data)=>{
//   console.log(`data is fetched ${data}`);
// });

function getdataPromise(){
  let promsie = new Promise((resolve,reject)=>{
    console.log('getting data from internet using promise');
    for (let i = 0;i<1000;i++)//console.log(i);
   // resolve('google');
    reject(' error internet time out')

  });
  return promsie;
}
// getdataPromise().then((data)=>{
//   console.log(`data is fetcheed ${data}`);
// })
// .catch((error)=>{
//   console.log(`error ${error}` );
// })
// .finally(()=>{
//   console.log('finally block');
// })

 //promise use fetch  me hotahai 
 
fetch('https://jsonplaceholder.typicode.com/users')
.then(response =>response.json())
.then(json =>console.log(json))
.catch(error=>console.log(error));

// .then function (reponse){
// return response.json}