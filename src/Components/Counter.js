import React, { useState, useEffect } from "react";

document.title = `Counter App`;
const Counter = () => {
  const [count, setCount] = useState(0);

  const addFunction = () => {
    setCount(count + 1);
  };

  const decFuntion = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    if (count > 0) {
      document.title = `Head count: (${count})`;
    } else {
      document.title = `Counter App`;
    }
  }, [count]);

  return (
    <>
      <h1>Counter :</h1>
      <h2>{count}</h2>
      <button onClick={() => addFunction()}>Increase</button>
      <button onClick={() => decFuntion()}>Decrease</button>
    </>
  );
};

export default Counter;
