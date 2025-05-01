import React from 'react'
import{useState} from 'react'




const UseState06Child = () => {

    const [count, setCount] = useState(0)

    function clickHandler(){

        
    }

  return (
    <>
    <button onClick={clickHandler}>Child</button>
    </>
  )
}

export default UseState06Child