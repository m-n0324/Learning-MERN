import Heading from "./todo-list/heading";
import "./App.css";
import Addtodo from "./todo-list/addtodo";

import TodoItems from "./todo-list/todoitems";
import './todo-list/button';
function App() {
  
  return <>
  
 <center>  <Heading />
            <Addtodo /> 
            <TodoItems />
 
 </center>
 
  </>
  
   
}

export default App; // <AddItem todotext={'do skin care'} tododate={ '4-sept-2025'} />
