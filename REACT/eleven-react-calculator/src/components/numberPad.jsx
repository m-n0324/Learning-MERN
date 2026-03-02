import Button from "./button";

 const NumberPad = ({ displayval, setdisplayval})=>{
  const buttons =[ "1","2","3","4","5","6","7","8","9","0"] ;
  const operations =[ "+","-","*","/"];
  const  addTodisplay =(text) => {
   setdisplayval(displayval + text);

  } 
   return(
    <>
    <Button text="C"  onClickHandler={() => setdisplayval("")}/>
    <br />
    {buttons.map (text => <Button text={text} key={text}   onClickHandler={()=> addTodisplay (text) }/>)}  <br />
    <Button text="." onClickHandler={() => addTodisplay(".")} />
    {operations.map (text => <Button text={text}  key={text}    onClickHandler={()=> addTodisplay (text) }/>)} <br />
    <Button text="=" onClickHandler={() => setdisplayval(eval(displayval))} />

    
    </>
   )

 }
 export default NumberPad;