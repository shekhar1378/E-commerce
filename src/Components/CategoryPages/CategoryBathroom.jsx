import React from "react";
import { Link } from "react-router-dom";
import { data } from "../../fetchAPI";


function CategoryBathroom() {
  const filteredItems = data.filter((item) => item.type === "Bathroom");

  return (
    <>
    <div className="flex items-center justify-center m-40 text-xl">
 <h1>Product not found.</h1>
 </div>
    </>
  );
}

export default CategoryBathroom;
