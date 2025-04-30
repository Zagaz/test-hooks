import React from 'react'
import { useState } from 'react'

const UseState04 = () => {
  const [value1,setValue1] = useState(1)
  const [value2,setValue2] = useState(2)

  function sub1(){
    setValue1(old=>old-1)
  }

  function add1(){
    setValue1(old=>old+1)
  }

  function sub2(){
    setValue2(old=>old-1)
  }
  function add2(){
    setValue2(old=>old+1)
  }

  return (
   <>
        <hr />
        <h3>useState Exercise 4</h3>
        <h4>Value1: {value1}</h4>
        <button onClick={sub1}>-1</button>
        <button onClick={add1}>+1</button>
        <h4>Value2: {value2}</h4>
        <button onClick={sub2}>-1</button>
        <button onClick={add2}>+1</button>
        <hr />
   
        <h4> (Value 1) x (Value 2) = {value1 * value2}</h4>
   </>
  )
}

export default UseState04