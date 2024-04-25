import { useState } from 'react';
import './App.css'

function App() {

  let [counter, setCounter] = useState(15);

  const addvalue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
      console.log("clicked  " + counter);
    } else {
      return;
    }
  }

  function removeValue() {
    if (counter > 0) {
      setCounter(counter - 1)
      console.log("clicked  " + counter);
    } else {
      alert("Value under loaded")
    }
  }

  return (
    <>
      <h1>Counter value {counter}</h1>
      <button onClick={() => {
        if (counter < 20) {
          setCounter(counter + 1);
          console.log("clicked  " + counter);
        } else {
          alert('value over loaded')
        }
      }}
      >Add value</button>
      <br />
      <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
