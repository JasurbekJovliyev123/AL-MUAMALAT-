import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Home from './pages/Home'
import Program from './pages/Program'
import Finance from './pages/Finance'
import Contact from './pages/Contact'
import SignIn from './pages/SignIn'
import Login from './pages/Login'
const App = () => {
  const routes=createBrowserRouter([
    {
      path:'/',
      element:<MainLayout/>,
      children:[
        {
          index:true,
          element:<Home/>
        },
        {
          path:'/programs',
          element:<Program/>
        },
        {
          path:'/finance',
          element:<Finance/>
        },
        {
          path:'/contact',
          element:<Contact/>
        },
        
      ]
    },
    {
      path:'/sign',
      element:<SignIn/>
    },
    {
      path:'/login',
      element:<Login/>
    }
  ])
  return <RouterProvider router={routes}/>
}

export default App