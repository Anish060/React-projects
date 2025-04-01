import React from 'react'
import Navbar from './components/navbar'
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom'
import Login from './Pages/login'
import Disp from './Pages/Disp'
import RootLayout from '../Layout/RootLayout'
export const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        { index: true, element: <Login /> },
        { path: 'disp', element: <Disp /> },
      ],
    },
  ]);
  return (
    
     <RouterProvider router={router}/>

    
  )
}
export default App
