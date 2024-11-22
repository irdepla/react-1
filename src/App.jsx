import "./index.css";
import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem("count");
    return savedCount ? parseInt(savedCount, 10) : 0;
  });

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  const handleReset = () => {
    setCount(0);
    localStorage.removeItem("count");
  };

  return (
    <div className="container">
    <h1 className="main__title">Tasbeh</h1>
      <h1 className="count">{count}</h1>

      <button className="plus__btn"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <button className="minus__btn"
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
