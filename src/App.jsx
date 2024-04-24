import React, { useImperativeHandle } from 'react'
import './App.css'
import {data} from './fetchAPI'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import { Outlet, createBrowserRouter } from 'react-router-dom'
import ProductPage from './Components/ProductPage'
import RightSidebar from './Components/RightSidebar'
import LeftSidebar from './Components/LeftSidebar'
import Footer from './Components/Footer'
import Bedroom from "./Components/CategoryPages/Bedroom";
import ShopAll from "./Components/CategoryPages/ShopAll"
import Bathroom from "./Components/CategoryPages/Bathroom"
import Living from "./Components/CategoryPages/Living"
import KitchenTable from './Components/CategoryPages/KitchenTable'
import HouseKeeping from './Components/CategoryPages/HouseKeeping'
import Outdoors from './Components/CategoryPages/Outdoors'
import OfficePaper from './Components/CategoryPages/OfficePaper'
import Apparel from './Components/CategoryPages/Apparel'
import BabyChild from './Components/CategoryPages/BabyChild'

function App() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Optional: Add smooth scrolling behavior
    });
  };
  return (
    <>
    <Navbar />
    <Hero/>
    <Footer/>
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
  },
  {
    path:'/shopall',
    element:<ShopAll/>
  },
  {
    path:'/bedroom',
    element:<Bedroom/>
  },
  {
    path:'/bathroom',
    element:<Bathroom/>
  },
  {
    path:'/living',
    element:<Living/>
  },
  {
    path:'/kitchentable',
    element:<KitchenTable/>
  },
  {
    path:'/housekeeping',
    element:<HouseKeeping/>
  },
  {
    path:'/outdoors',
    element:<Outdoors/>
  },
  {
    path:'/OfficePaper',
    element:<OfficePaper/>
  },
  {
    path:'/Apparel',
    element:<Apparel/>
  },
  {
    path:'/BabyChild',
    element:<BabyChild/>
  },
])

export default router;
