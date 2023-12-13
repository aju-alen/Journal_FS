import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

import { createBrowserRouter,Outlet,RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import Register from './pages/Register'
import Login from './pages/Login'
import Journal from './pages/Journal'
import Proceedings from './pages/Proceedings'



function App() {

  const Layout = () => {
    return (
      <div className="">
          <Navbar />
          <Outlet />
          <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([{
    path: "/",
    element:<Layout/>,
    children:[
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/journal",
        element: <Journal />,
      },,
      {
        path: "/proceedings",
        element: <Proceedings />,
      },
    ]
  }]);
  return <RouterProvider router={router} />;
 
}


export default App
