import React from 'react'

function Navbar() {
  return (
    <nav className="w-full bg-red-200 flex items-center justify-start px-10 py-8 font-thin text-xs text-[#424244] tracking-wide gap-8 bg-">

        <div className="w-[10%] bg-slate-600 flex flex-col">
            <ul >
                <li>Shop All</li>
                <li>New</li>  
                <li>Back in Stock</li>
            </ul>
            </div>
        <div className='w-[70%] flex gap-6'>
            <ul>
              <li>Bedroom</li>
              <li>Bathroom</li>
              <li>Living</li>
            </ul>
            <ul>
              <li>Kitchen & Table</li>
              <li>Housekeeping</li>
              <li>Outdoors</li>
            </ul>
            <ul>
              <li>Office & Paper</li>
              <li>Apparel</li>
              <li>Baby & Child</li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
