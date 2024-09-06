import { useState } from "react";
import "./counter.css";

function Counter() {
  const [counter, setCounter] = useState(0);

  const decrement = () => {
    setCounter(counter - 1);
  };

  const resetCounter = () => {
    setCounter(0);
  };

  const increment = () => {
    setCounter(counter + 1);
  };
  return (
    <>
      <div className="container">
        <h1>Counter</h1>
        <h3>{counter}</h3>

        <button className="btn-decrement" onClick={decrement}>
          Decrement
        </button>
        <button className="btn-reset" onClick={resetCounter}>
          Reset
        </button>
        <button className="btn-increment" onClick={increment}>
          Increment
        </button>
      </div>
    </>
  );
}

export default Counter;
