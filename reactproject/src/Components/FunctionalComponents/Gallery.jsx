import { useState } from "react";

const Gallery = () => {
  var [count, setCount] = useState(0);
  function increment() {
    count = count + 1;
    setCount(count);
  } 

  return (
    <div>
      <h1>This is Gallery Page</h1>
      <h2 style={{ textAlign: "center" }}>Learning State Concept</h2>
      <h3>The state of my variable count is {count}</h3>
      <button onClick={increment}>Increment</button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Gallery;
