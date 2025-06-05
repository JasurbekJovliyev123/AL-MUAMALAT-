import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Home from './pages/Home'
import Program from './pages/Program'
import Finance from './pages/Finance'
import Contact from './pages/Contact'
import SignIn from './pages/SignIn'
import Profile from './pages/Profile'
import Login from './pages/Login'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
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
          path:'/programs/:id',
          element:<Program/>,
        },
        {
          path:'/finance',
          element:<Finance/>
        },
        {
          path:'/contact',
          element:<Contact/>
        },
        {
          path:'/profile',
          element:<Profile/>
        }
      ]
    },
    {
      path:'/sign',
      element:<SignIn/>
    },
    {
      path:'/signup',
      element:<Login/>
    }
  ])
  return <>
             <RouterProvider router={routes}/>
           <ToastContainer position="top-right" autoClose={3000} />
   </>
}

export default App