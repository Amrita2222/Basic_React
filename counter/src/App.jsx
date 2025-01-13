import React, { useState } from 'react';


function App() {
let [counter,  setCounter] = useState(15);

let addValue = () =>{
  setCounter(counter + 1);
  console.log('value added', counter);
};

let removeValue = () => {
  setCounter(counter - 1);
  console.log('value remove', counter);
};
  return (
 <>
    <h1>Chai or React</h1>
    <h2>Counter Value: {counter}</h2>
    <button onClick={addValue}>Add Value</button>
    <br />
    <button onClick={removeValue}>Remove Value</button>
    <p>Footer:  {counter}</p>
  </>
  );
}

export default App;
