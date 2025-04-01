import React from 'react'
import Navbar from "../components/navbar.jsx"
import { Link } from 'react-router-dom'

function login() {
  return (
    <main className="container max-w-6xl mx-auto px-4 py-8 mt-0 justify-center">
           <Link to="/Disp"> 
           <h1 className="text-3xl font-bold text-gray-800">Home Page</h1>
           </Link> 
        </main>

  )
}

export default login