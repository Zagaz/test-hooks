import React from 'react'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
    <header>
<p>The header</p>

    </header>
    <Outlet />    
    <footer>
<p>The footer</p>
    </footer>
    </>

  )
}

export default MainLayout