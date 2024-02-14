import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);
  function insert(Num) {
    setNumber(String(number + Num));
  }
  return (
    <main>
      <div className="container">
        <h1
          style={{
            width: "100%",
            textAlign: "right",
            padding: "0.5rem",
            backgroundColor: "lightblue",
          }}
        >
          {number}
        </h1>

        <div>
          <button onClick={() => insert(7)}>7</button>
          <button
            onClick={function () {
              insert(8);
            }}
          >
            8
          </button>
          <button
            onClick={function () {
              insert(9);
            }}
          >
            9
          </button>
        </div>
        <div>
          <button
            onClick={function () {
              insert(4);
            }}
          >
            4
          </button>
          <button
            onClick={function () {
              insert(5);
            }}
          >
            5
          </button>
          <button
            onClick={function () {
              insert(6);
            }}
          >
            6
          </button>
        </div>
        <div>
          <button
            onClick={function () {
              insert(1);
            }}
          >
            1
          </button>
          <button
            onClick={function () {
              insert(2);
            }}
          >
            2
          </button>
          <button
            onClick={function () {
              insert(3);
            }}
          >
            3
          </button>
        </div>
        <div>
          <button>=</button>
          <button>+</button>
          <button>-</button>
          <button>*</button>
          <button>/</button>
        </div>
      </div>
    </main>
  );
}

export default App;
