import React from 'react';
import { useState, useEffect, useRef } from 'react';

function App() {
  // State to store the input text
  const [text, setText] = useState(() => {
    return '';
  });

  // State to store the list of names
  const [names, setNames] = useState([]);

  // Reference to the input element, used to control focus
  const inputRef = useRef(null);

  // Function to handle insertion of a new name
  function insert() {
    const trimmed = text.trim(); // Remove whitespace from start and end

    // Validate input: do not allow empty or whitespace-only strings
    if (trimmed === '') {
      alert('Please enter a valid name.');
      inputRef.current?.focus(); // Focus the input again
      return;
    }

    // Add the new name to the list (immutably)
    setNames(prev => [...prev, trimmed]);

    // Clear the input field
    setText('');

    // Focus the input again for user convenience
    inputRef.current?.focus();
  }

  return (
    <>
      <h3>Inputs</h3>

      {/* Controlled input bound to the `text` state and referenced via `inputRef` */}
      <input
        ref={inputRef}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      {/* Click button that triggers the insert function (typo fixed from <btton> to <button>) */}
      <button onClick={insert}>Click</button>

      {/* Display the sorted list of names */}
      <ul>
        {names
          .slice() // Create a shallow copy of the array
          .sort((a, b) => a.localeCompare(b)) // Sort alphabetically, case-sensitive & locale-aware
          .map((name, index) => (
            // Render each name in a <li> with a unique key and id
            <li key={index} id={`id_${index}`}>{name}</li>
          ))}
      </ul>
    </>
  );
}

export default App;
