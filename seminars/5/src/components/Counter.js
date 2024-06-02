import React from "react";
import {useSelector, useDispatch} from 'react-redux';

function Counter() {
  const counter = useSelector(state => state);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({type: 'INCREMENT'});
  };
  const decrement = () => {
    dispatch({type: 'DECREMENT'});
  };

  return (
  <div>
    <h4>Счетчик: {counter}</h4>
    <button onClick={decrement}>-1</button>
    <button onClick={increment}>+1</button>
  </div> );
}

export default Counter;