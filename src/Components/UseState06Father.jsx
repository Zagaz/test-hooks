import React from 'react'
import { useState } from 'react'
import UseState06Child from './UseState06Child'

const UseState06Father = () => {
  const [form, setForm] = useState({
    name: 'a',
    email: 'a',
  });




function clickHandler(a){
  
  setForm({
    name: a.name,
    email: a.email,
  });
  
    
}

  return (
    <>
      <hr />
      <h3>useState Exercise 6</h3>
      <div>Value:</div>
      <UseState06Child action ={clickHandler} />
      <h3>{form.name}</h3>
      <h3>{form.email}</h3>
      
    </>
  )
}

export default UseState06Father