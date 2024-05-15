import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
//useSelector gets the current count of the store
//useDispatch sends actions to the store
import { increment, decrement } from "./Actions";

//asking for current count value
const Counter = () => {
  const count = useSelector((state) => state.count); // state is the whole state object, state.count is the piece of data we want which is current count value
  // useSelector gets the current count from the store
  // "state => state.count" this function tells what data exactly we want from store
  const dispatch = useDispatch();
  // gets the function to dispatch actions

  return (
    <div className="counter-container">
      <div className="counter-box">
        <h1 className="counter-display">Count: {count}</h1>
        {/* count is the current counter value */}
        <div className="button-group">
          <button onClick={() => dispatch(increment())}>Increment</button>
          {/* button when clicked sends increment action to the store to increase the counter */}
          <button onClick={() => dispatch(decrement())}>Decrement</button>
          {/* button when clicked sends decrement action to the store to decrease the counter */}
        </div>
      </div>
    </div>
  );
};

export default Counter;
