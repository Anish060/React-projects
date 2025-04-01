import React from 'react'
import Navbar from '../src/components/navbar'
import { Outlet } from 'react-router-dom'
import reac from '../src/assets/react.svg'

function RootLayout() {
  return (
    <div className="min-h-screen flex justify-center items-center">
        <img src={reac}></img>
    <div className="min-h-screen flex justify-center items-center">    
    <Navbar/>
    <Outlet/>
    </div>
    </div>
  )
}

export default RootLayout