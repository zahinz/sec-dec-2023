import { useState, useEffect } from "react";

function App() {
  // change the value of count using useState
  // let count = 1;
  const [count, setCount] = useState(0);

  function handleIncrement() {
    // count++;
    setCount(count + 1);
    console.log(count);
  }
  function handleDecrement() {
    // count--;
    setCount(count - 1);
    console.log(count);
  }

  // useEffect is a hook to monitor the state of the component
  // useEffect(a, b) a is a function that will be executed when the component is mounted, b is an array of state that will be monitored
  // useEffect(function () {}, []);
  useEffect(
    function () {
      if (count === 5) {
        bomb();
      }
    },
    [count]
  );

  function bomb() {
    alert("Boom!");
  }

  return (
    <main>
      <div className="container">
        <h1>Counter</h1>
        <h1>{count}</h1>
        <div>
          <button onClick={handleIncrement}>+</button>
          <button onClick={handleDecrement}>-</button>
        </div>
        {count >= 10 ? <p>You reach 10</p> : null}
      </div>
    </main>
  );
}

export default App;
