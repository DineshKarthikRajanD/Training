const UseMemo = () => {
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
    </div>
  );
};

export default UseMemo;
