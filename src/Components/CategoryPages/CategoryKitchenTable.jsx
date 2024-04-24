import React from "react";
import { Link } from "react-router-dom";
import { data } from "../../fetchAPI";
import Hero from "../Hero";

function CategoryKitchenTable() {
  const filteredItems = data.filter((item) => item.type === "Kitchen & Table");
  

  if (filteredItems.length === 0) {
    return <div>No items found.</div>; // Provide a fallback UI when no items are found
  }

  return (
    <>
      {/* If you want to include Hero component, you can render it here */}
      <div className="flex flex-col items-center justify-center mt-20">
        {/* Hero component goes here */}
      </div>
      <div className="flex flex-col items-center justify-center ">
        <div className=" w-[70%] gap-2 grid grid-cols-4 grid-row-auto ">
          {filteredItems.map((item) => (
            <div key={item.id} className="product normal">
              <Link to={`/KitchenTable/${item.id}`}>
                <div className="relative bg-slate-700">
                  <Link
                    to={`/product/${item.handle}`}
                    className="absolute top-[8%] left-[8%] flex items-start inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                  >
                    <div className="text-white text-[11px]">
                      <h1>{item.vendor}</h1>
                      <h1 className="mt-4 text-sm ">{item.title}</h1>
                      {/* <p>{item.description}</p> */}
                      <p className="mt-2 text-[11px]">
                        ${item.price / 100}.00
                      </p>
                    </div>
                  </Link>
                  <img
                    className="block w-full h-full"
                    src={item.images}
                    alt={item.title}
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CategoryKitchenTable;
