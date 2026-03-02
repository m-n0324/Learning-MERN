// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { useState } from "react";
import List from "./components/list"


function App() {
  // const studentarr =[ "mansi","mummy","papa","manas"]
  // const studentArrState = useState([ "mansi","mummy","papa","manas"]);
  // const studentarr = studentArrState[0];  
  //  const setStudentArr =studentArrState[1];
  const[studentarr,setStudentArr]=useState([ "mansi","mummy","papa","manas"]); // destructuring



  console.log("painting app component")
  console.log("state value is ", studentarr);
  // const studentarr =[ ]
  const onChangeHandler =(event)=>{
    if (event.key === "Enter"){
       console.log(event.target.value); 
       const newArr =[...studentarr,event.target.value];
       event.target.value='';
      //  studentarr.push(event.target.value);
       setStudentArr(newArr);
       console.log(newArr)
    }
    
    // console.log(event);
    

    // console.log(event.key);
  }
   //console.log(event); ahr ye karege toh pura event pshoe hoga onsole me kikyapress kiya key me code esse kuch hoge vaha par key pair value jisko acess kar skte hai 
  return (<>
  <List list={studentarr} />
  <input type="text" placeholder="new student name" onKeyDown={onChangeHandler}></input> 
  </>

  )
  // onChange={onChangeHandler}
    
  
}

export default App
