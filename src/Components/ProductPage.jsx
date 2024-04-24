// ProductPage.js
import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../fetchAPI";
import Navbar from "./Navbar";
import Footer from "./Footer";


const ProductPage = () => {
  

  // Extract the product handle from the URL parameter
  const { handle } = useParams();

  // Find the product with the matching handle from the data array
  const product = data.find((item) => item.handle === handle);

  // If product is not found, display a message
  if (!product) {
    return <p>Product not found.</p>;
  }

  const sections = product.description.split("<!-- split -->").map((section) => section.split("<p>").filter(Boolean));


  // Render the product details
  return (
    <>
      <Navbar />
    <div className=" flex items-center justify-center">
      <div className="w-[70%] flex justify-between mt-10  b">
        <div className="w-[70%] ">
          <h2 className="text-xs">{product.vendor}</h2>
          <h1 className="block mt-4">{product.title}</h1>
          <img className="mt-10" width={500} src={product.images[0]} alt="" />
        </div>

        <div className="w-[30%] ml-6 mr-6 px-4 ">
          <div>  
            <h4 className="text-xs">price</h4>
            <h4 className="mt-4">${product.price / 100}.00</h4>
            <button className="mt-10 bg-zinc-600 text-white text-xs px-16 py-4 hover:text-black hover:bg-white border hover:border-black">Add to Cart</button>
          </div>
          <div className="text-[11px] text-wrap mt-16">
            <h4 className="font-semibold">Description</h4>
            {sections[0].map((paragraph, index) => (
              <p className="mt-4" key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))}
            <div className="mt-4 ">
              <h4 className="font-semibold">Dimensions</h4>
              {sections[1].map((paragraph, index) => (
                <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ProductPage;
