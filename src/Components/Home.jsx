import React from 'react'
import LeftSidebar from './LeftSidebar'
import RightSidebar from './RightSidebar'

function Home() {
  return (
    <div className='flex h-[100%] bg-yellow-300'>
   <div className='w-[10%]  bg-red-500'>
   <LeftSidebar/>
   </div>
  <div className='w-[80%] bg-zinc-200'>  Home</div>
 <div className='w-[10%] bg-red-600'>
 <RightSidebar/>
 </div>
    </div>
  )
}

export default Home
