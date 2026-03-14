
const Button =({btntype,btntext,handler}) =>{
  if(btntype === 'success'){
    return  <button className="button9 btn btn-success  "   onClick={handler}> {btntext}</button>
  }else if (btntype === 'danger'){
    return  <button className="button9 btn btn-danger  "  onClick={handler}> {btntext}</button>
  } else {
    return  <button className="button9 btn btn-primary  "  onClick={handler}> {btntext}</button>
  }

};
export default Button;






// const  Button = ()=>{
//   return   <button className="mybutton"> click me</button>
// }
// export default Button;
// ab pura function export kar rhe hai 
// export function Button(){
//   return <button className='mybutton'> Delete</button>
// }
// export function Greenbutton(){
//   return <button className='savebutton'> Save</button>
// }