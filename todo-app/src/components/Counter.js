import React from "react";
import CounterButtun from "./CounterButtun";

export default function Counter() {
  return (
    <div>
      <CounterButtun by={1} />
      <CounterButtun by={5} />
      <CounterButtun by={3} />
    </div>
  );
}

Counter.defaultProps = {
  by: 3,
};
