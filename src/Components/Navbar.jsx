import React from "react";
import { Link } from "react-router-dom";

function Navbar() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Optional: Add smooth scrolling behavior
    });
  };

  return (
    <nav className="w-full bg-white sticky top-0 z-10 flex  items-center  px-10 py-4  text-xs   bg-">
      <div className=" inline text-3xl font-bold">
        <div className="flex">
          <h1 className="border-y-2  border-black">e</h1> <h1>veryday</h1>
        </div>
        <div className="flex">
          <h1 className="border-b-2  border-black">n</h1> <h1>eeds</h1>
        </div>
      </div>

      <div className="w-[90%] flex  justify-between  px-6 ">
      <div className="inline-flex  gap-20">
        <ul className="nav-links">
        <Link to='/shopall' onClick={scrollToTop}> <li className="inline border-b-[1px] border-black">Shop All</li></Link>
          <li>New</li>
          <li>Back in Stock</li>
        </ul>

        <ul className="nav-links">
          <Link to='/Bedroom' onClick={scrollToTop}><li>Bedroom</li></Link>
          <Link to='/bathroom' onClick={scrollToTop}><li>Bathroom</li></Link>
          <Link to='/living' onClick={scrollToTop}><li>Living</li></Link>
        </ul>
        <ul className="nav-links">
        <Link to='/kitchentable' onClick={scrollToTop}> <li>Kitchen & Table</li></Link>
        <Link to='/housekeeping' onClick={scrollToTop}> <li>Housekeeping</li></Link>
        <Link to='/outdoors' onClick={scrollToTop}> <li>Outdoors</li></Link>
        </ul>
        <ul className="nav-links">
        <Link to='/OfficePaper' onClick={scrollToTop}> <li>Office & Paper</li></Link>
        <Link to='/Apparel' onClick={scrollToTop}> <li>Apparel</li></Link>
        <Link to='/BabyChild' onClick={scrollToTop}> <li>Baby & Child</li></Link>
        </ul>
        </div>
      <div className="flex  ">
        <ul>
        <Link to='/cart' onClick={scrollToTop}> <li>cart(0)</li></Link>
          <li>SignUp/SignIn</li>
        </ul>
      </div>
      </div>

    </nav>
  );
}

export default Navbar;
