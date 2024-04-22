import React from "react";
import { data } from "../fetchAPI";

function Hero() {
  return (
    <>
    <div className=" w-[60%] p-6 grid grid-cols-4">
    {/* <div className="p-6 grid grid-cols-4 bg-red-400 "> */}
    {data.map((items) => {
      return (
        <div key={items.id} className="relative w-[160px] h-[250px] ">
          <div className=" absolute top-[2%] flex items-start opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
            <div className="text-white text-xs">
              <h1>{items.vendor}</h1>
              <h1>{items.title}</h1>
              {/* <p>{items.description}</p> */}
              <p>{items.price}</p>
            </div>
          </div>
          <img className="block w-full"  src={items.images} alt={items.title} />
        </div>
      );
    })}
{/*   </div> */}
</div>
</>
  );
}

export default Hero;
