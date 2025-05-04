import React from 'react'
import './App.css'
import UseState02 from './Components/UseState02'
import UseState03 from './Components/UseState03'
import UseState04 from './Components/UseState04'
// Functional component that receives `value` as a prop
import UseState05 from './Components/UseState05'

// Lift The State UP => Pass the data from child to father - ex003
//https://youtu.be/dX_ww7J06Wk?si=O3nvqsohG1y-pk3r
import UseState06Father  from './Components/UseState06Father'



function App() {
  return(
    <>
    <h1>React exercises</h1>
    <hr />
    {/* <UseState02/> */}
    {/* <UseState03/>  */}
    {/* <UseState04 /> */}

    {/* <UseState05 value={-7}/>
    <UseState05 value={5}/>
    <UseState05 value={10}/>
    <UseState05 value={10}/> */}
  
   {/* <UseState06Father /> */}

<hr />
    </>

  )


}

export default App
