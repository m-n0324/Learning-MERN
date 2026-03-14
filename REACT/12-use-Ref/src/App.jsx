import Heading from "./todo-list/heading";
import "./App.css";



import "./todo-list/button";
import React from "react";
import TestForm from "./todo-list/TestForm";
import StateVsRef from "./todo-list/StateVsRef";
function App() {
  return (
    <React.Fragment>
      <center>
        <h1>Testing</h1>
        <Heading />
        <StateVsRef />
        <h1>Testing</h1>
        <TestForm />
      </center>
    </React.Fragment>
  );
}

export default App; // <AddItem todotext={'do skin care'} tododate={ '4-sept-2025'} />
