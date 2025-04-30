import React from 'react'
import { useState } from 'react'

/**
 * Exercice 03
 * 
 * Learns how to passa parameters on a function
 * 
 */

const UseState03 = () => {

  const [number, setNumber] = useState(() => { return 0 })

  function nameNumber(n) {
    if (n === "clear") {
      setNumber(0)

    } else {
      setNumber(prev => prev + n)
    }
  }
  return (
    <>
      <hr />
      <h3>Use Statate Exercise 3</h3>
      <h4>Number: {number}</h4>

      <button onClick={() => { nameNumber(1) }}>+1</button>
      <button onClick={() => { nameNumber(5) }}>+5</button>
      <button onClick={() => { nameNumber(10) }}>+10</button>
      <button onClick={() => { nameNumber('clear') }}>Clear</button>
    </>

  )
}

export default UseState03