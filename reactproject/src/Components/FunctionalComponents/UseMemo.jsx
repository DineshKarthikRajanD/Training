import { useState, useMemo } from "react";

var slowFunction = (number) => {
  for (let i = 0; i < 1000000000; i++) {}
  return number * 2;
};

var UseMemo = () => {
  var [theme, setTheme] = useState(true);
  var [num, setNum] = useState(0);

  // const computedValue = useMemo(() => slowFunction(num), [num]);

  var darkLight = {
    backgroundColor: theme ? "black" : "white",
    color: theme ? "white" : "black",
  };
  var doublingANumber = useMemo(() => {
    return slowFunction(num);
  }, [num]);
  return (
    <div>
      <h1>This is useMemo Example</h1>
      <p>
        useMemo is a React hook used for performance optimization. It allows you
        to memoize a computed value so that it is only recomputed when its
        dependencies change. This helps avoid unnecessary calculations during
        renders, especially when dealing with expensive computations.
      </p>
      <h1>
        &quot;const memoizedValue = useMemo(() =&gt; computeExpensiveValue(a,
        b), [a, b]);&quot;
      </h1>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(Number(e.target.value))}
      />
      <button type="" onClick={() => setTheme((theme = !theme))}>
        Toggle Theme
      </button>
      <h2 style={darkLight}>Dinesh</h2>
      <h3>{doublingANumber}</h3>
    </div>
  );
};

export default UseMemo;
