
import './App.css'
import Heading from './components/heading'; // H msut be  capital
import Paragraph from './components/paragraph';
import Dynamic from './components/dynamic';
import Studentlist from './components/studentlist';
import RandomNumber from './components/randomnum';
import Title from './components/title'
import Button from './components/button';

function App() {
  const students = ['mansi','yuvraj','anuj','ram']
   const friends = ['muskan','palak','sejal','shivangi']
   const clickHandler =()=>{
    console.log('blue button clicked');
   };
   const deleteHandler =()=>{
    console.log('red  button clicked');
   };
   const saveHandler =()=>{
    console.log('save button clicked');
   };
  
 
  return ( // H musst be capital 
    <> 
    <Title  titleText=" Welocome to react props"/>
     <Title  titleText=" Resuable components"/>
     <Button btntype='success' btntext="save" handler={saveHandler }/>
    <Studentlist students= {students}/>
    <Studentlist />
     <Studentlist  students={friends}/>
     <Button btntype='danger' btntext="KILL"  handler={ deleteHandler}/>
    <Heading />
    <Paragraph /> <br></br>
    <Button  btntext="edit" handler={clickHandler}/>
    <RandomNumber />
    <Dynamic/>
    <Dynamic/> 
    <RandomNumber />
    </>
  )
}

export default App;
// import {Button, Greenbutton } from './components/button';method to import functional 
