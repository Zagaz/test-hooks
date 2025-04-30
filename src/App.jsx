import React from 'react'
import './App.css'
import UseState02 from './Components/UseState02'
import UseState03 from './Components/UseState03'
import UseState04 from './Components/UseState04'
import NumberComponent from './Components/NumberComponent'


function App() {
  return(
    <>
    {/* <UseState02/> */}
    {/* <UseState03/>  */}
    {/* <UseState04 /> */}
    <NumberComponent value={1}/>
    <NumberComponent value={5}/>
    <NumberComponent value={10}/>
    </>

  )


}

export default App
