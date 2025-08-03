import Heading from "./todo-list/heading";
import "./App.css";
import Addtodo from "./todo-list/addtodo";

import TodoItems from "./todo-list/todoitems";
import './todo-list/button';
import React from "react";
function App() {
  
  return(
    <React.Fragment>
      <center><Heading />
            <Addtodo /> 
            <TodoItems />
 </center>
    </React.Fragment>
  ); 
   
}

export default App; // <AddItem todotext={'do skin care'} tododate={ '4-sept-2025'} />
