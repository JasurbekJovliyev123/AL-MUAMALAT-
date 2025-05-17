import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import {Contact,Finance,Home,International,Login,Payments,Profile,SignIn,Program} from './pages/index'
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
          path:'/programs',
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