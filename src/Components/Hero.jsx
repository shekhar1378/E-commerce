import React from "react";
import { data } from "../fetchAPI";

const Hero = ()=> {


  return (
    <div className="flex items-center justify-center">
    <div className=" w-[70%] gap-2 grid grid-cols-4 grid-row-auto bg-red-900">
    {data.map((items) => {
      return (
        <div key={items.id} className="relative  bg-slate-700">
          <a  href={`/product/${items.handle}`} className=" absolute top-[8%] left-[8%] flex items-start inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
            <div className="text-white text-[11px]">
              <h1>{items.vendor}</h1>
              <h1 className="mt-4 text-sm ">{items.title}</h1>
              {/* <p>{items.description}</p> */}
              <p className="mt-2 text-[11px]">${(items.price)/100}.00</p>
            </div>
          </a>
          <img className="block w-full h-full"  src={items.images} alt={items.title} />
        </div>
      );
    })}
</div>
</div>
  );
}

export default Hero;
