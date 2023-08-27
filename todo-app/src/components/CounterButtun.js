import React, { useState } from "react";

export default function CounterButtun(props) {
  const [count, setCount] = useState(0);

  const IncrementFunction = () => {
    console.log("IncrementFunction clicked");
    setCount(count + props.by); //method inside direct call
  };
  const DecrementFunction = () => {
    console.log("DecrementFunction clicked");
    if (count <= 0) return 0;
    setCount(count - props.by);
  };
  return (
    <div>
      <h1>
        <span>{count}</span>
      </h1>
      <div>
        <button className="btn btn-primary" onClick={IncrementFunction}>
          +{props.by}
        </button>

        <button className="btn btn-dark" onClick={DecrementFunction}>
          -{props.by}
        </button>
      </div>
    </div>
  );
}
