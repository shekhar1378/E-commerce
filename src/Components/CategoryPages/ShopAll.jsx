import React from "react";
import { Link, Outlet } from "react-router-dom";
import { data } from "../../fetchAPI";
import Hero from "../Hero";
import ProductPage from "../ProductPage";
import Navbar from "../Navbar";
import Footer from "../Footer";

function Bedroom() {
  
  return (
    <>
    <Navbar/>
    <Hero/>
   <Footer/>
    </>
  )
}

export default Bedroom;
