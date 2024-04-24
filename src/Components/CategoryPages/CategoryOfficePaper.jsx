import React from "react";
import { Link } from "react-router-dom";
import { data } from "../../fetchAPI";
import Hero from "../Hero";

function CategoryOfficePaper() {
  const filteredItems = data.filter((item) => item.type === "Office & Paper");



  return (
    <>
      <div className="proud-container">
        <div className="container">
        <div className="flex flex-col items-center justify-center mt-20">
            <div className=" w-[70%] gap-2 grid grid-cols-4 grid-row-auto ">
            {filteredItems.map((items) => (
              <div key={items.id} className="product normal">
                <Link to={`/OfficePaper/${items.id}`} >
                    <div key={items.id} className="relative  bg-slate-700">
                      <Link
                        to={`/product/${items.handle}`}
                        className=" absolute top-[8%] left-[8%] flex items-start inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                      >
                        <div className="text-white text-[11px]">
                          <h1>{items.vendor}</h1>
                          <h1 className="mt-4 text-sm ">{items.title}</h1>
                          {/* <p>{items.description}</p> */}
                          <p className="mt-2 text-[11px]">
                            ${items.price / 100}.00
                          </p>
                        </div>
                      </Link>
                      <img
                        className="block w-full h-full"
                        src={items.images}
                        alt={items.title}
                      />
                    </div>
                </Link>
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoryOfficePaper;
