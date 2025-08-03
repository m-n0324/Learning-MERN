import  style from"./App.module.css"
import Container from "./container"
 
function App() {
 
  return (
    <>
    <Container>
      <h1 className={style.heading}>hello</h1> 
    </Container>
   
    <Container>
      <p className={style.para}> this is a sample paragraph</p>
    
    </Container>
  
      {/* {`${style.heading} ${style.para}`} in order to use two styles at a time
*/}

    </>
  )
}


export default App
