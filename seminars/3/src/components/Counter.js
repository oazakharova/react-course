import { ButtonGroup, Button } from "@mui/material";
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const decrementCount = () => {
    setCount(count - 1);
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>
        Счетчик: <span>{count}</span>
      </h2>
      <ButtonGroup variant="contained" aria-label="Basic button group">
        <Button onClick={decrementCount}>-1</Button>
        <Button onClick={incrementCount}>+1</Button>
      </ButtonGroup>
    </div>
  );
}

export default Counter;
