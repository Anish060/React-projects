import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/Login'
import RootLayout from '../Layout/RootLayout'
import Userr from './pages/user'
import Admi from './pages/administrator'
import Ussnt from './pages/usersent'
import Ussntvi from './pages/usersentview'
import Ur from './pages/mai'
export default function App() {
  const rout=createBrowserRouter([{
    path:'/',
    element:<RootLayout/>,
    children:[{path:'',element:<Ur/>},
      {path:'login',element:<Login/>}
      ,{path:'user', element:<Userr/>}
      ,{path:'administrator',element:<Admi />}
      ,{path:'usersent',element: <Ussnt /> }
      ,{path:'ussent',element:<Ussntvi/>}
    ]
  }])
  return (
    <RouterProvider router={rout} />
  )
}
