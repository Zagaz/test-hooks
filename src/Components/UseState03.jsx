import React, { useState } from 'react';

/**
 * Exercise 03
 * 
 * Demonstrates how to pass parameters to a function
 * to update component state using useState, with dynamic buttons.
 */

const UseState03 = () => {
  // State to track the current count
  const [count, setCount] = useState(0);

  /**
   * Updates the count based on the provided value.
   * Resets to 0 if the value is "clear".
   * 
   * @param {number|string} value - Value to add or "clear" to reset
   */
  const updateCount = (value) => {
    if (value === 'clear') {
      setCount(0);
    } else {
      setCount(prevCount => prevCount + value);
    }
  };

  // Array of button values, including both numbers and the "clear" action
  const buttons = [1, 5, 10,50,100, 'clear'];

  return (
    <>
      <hr />
      <h3>useState Exercise 3</h3>
      <h4>Count: {count}</h4>

      {/* Render buttons dynamically from the array */}
      {buttons.map((val, index) => (
        <button key={index} onClick={() => updateCount(val)} >
          {val === 'clear' ? 'Clear' : `+${val}`}
        </button>
      ))}
    </>
  );
};

export default UseState03;
