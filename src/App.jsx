import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'


import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Home from './pages/Home';
import Footer from './components/Footer';
function App() {
  const AppLayout=()=>{
    return(
      <>
      <Navbar/>
      <Outlet/>
      <Footer/>
      </>
    )
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout/> ,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/products",
          element:<Home/>
        },
        {
          path:"/products/:catId",
          element:<Home/>
        },
        {
          path:"/myProducts",
          element:<Home/>
        },
        {
          path:"/register",
          element:<Home/>
        },
        {
          path:"/signIn",
          element:<Home/>
        },
          {
          path: "/messages",
          element: <Home />,
        },
        {
          path: "/myOrders",
          element: <Home />,
        },
        {
          path: "/message/:id",
          element: <Home />,
        },
        {
          path: "/addProduct",
          element: <Home />,
        },
      ]
    },
  ]);

  return (
  <>
 <RouterProvider router={router} />
  </>
  )
}

export default App
