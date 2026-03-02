import { useState } from "react";
import Display from "./components/display";
import NumberPad from "./components/numberPad";

function App() {
  // keep it as string
  const [displayval, setdisplayval] = useState(0);

  return (
    <> <h1> CALCULATOR</h1>
      <Display text={displayval} />
      <NumberPad displayval={displayval} setdisplayval={setdisplayval} />
    </>
  );
}

export default App;
