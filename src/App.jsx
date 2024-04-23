import React from 'react'
import './App.css'
import {data} from './fetchAPI'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import { createBrowserRouter } from 'react-router-dom'
import ProductPage from './Components/ProductPage'

function App() {

  return (
    <>
    <Navbar />
    <Hero/>
       
    </>
  )
}

const router =createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/product/:handle',
    element:<ProductPage/>
  }
])

export default router;
