import React, { useState } from 'react';

const NumberComponent = ({ value }) => {
  const [number, setNumber] = useState(0);

  function clickHandler(n, action) {
    if (action === 'sub') {
      setNumber(prev => Math.max(0, prev - n)); // garante R+
    } else if (action === 'add') {
      setNumber(prev => prev + n);
    }
  }

  return (
    <>
      <hr />
      <button onClick={() => clickHandler(value, 'sub')}> -{value} </button>
      <span> {number} </span>
      <button onClick={() => clickHandler(value, 'add')}> +{value} </button>
    </>
  );
};

export default NumberComponent;
