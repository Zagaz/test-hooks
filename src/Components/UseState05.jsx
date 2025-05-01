import React, { useState } from 'react'; // Import React and the useState hook

// Functional component that receives `value` as a prop
const UseState05 = ({ value = 1 }) => {
    // If `value` is negative, make it positive for consistent behavior
    if (value < 0){
        value = -value
    }
  // Declare a state variable `number`, initialized to 0
  const [number, setNumber] = useState(0);

  // Handler function for button clicks
  function clickHandler(n, action) {
    if (action === 'sub') {
      // If the action is subtract, reduce the number but don't allow it to go below 0
      setNumber(prev => Math.max(0, prev - n));
    } else if (action === 'add') {
      // If the action is add, increase the number by n
      setNumber(prev => prev + n);
    }
  }

  return (
    <>
      <hr /> {/* Horizontal line for visual separation */}

      {/* Button to subtract `value` from the current number */}
      <button onClick={() => clickHandler(value, 'sub')}>
        -{value}
      </button>

      {/* Display the current number */}
      <span> {number} </span>

      {/* Button to add `value` to the current number */}
      <button onClick={() => clickHandler(value, 'add')}>
        +{value}
      </button>
    </>
  );
};

export default UseState05 ; // Export the component for use elsewhere
