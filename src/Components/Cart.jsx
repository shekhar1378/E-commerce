import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem, updateQuantity } from "./CartSlice";
import Footer from "./Footer";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleIncrementQuantity = (itemId) => {
    dispatch(updateQuantity({ itemId, quantity: 1 }));
  };

  const handleDecrementQuantity = (itemId) => {
    // Find the item in the cart
    const item = cartItems.find(item => item.id === itemId);
    if (item && item.quantity > 1) {
      // Dispatch the updateQuantity action only if quantity is greater than 0
      dispatch(updateQuantity({ itemId, quantity: -1 }));
    }
  };
  

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem({ itemId }));
  };

  // Calculate subtotal for each item
  const calculateItemSubtotal = (item) => {
    return item.price * item.quantity;
  };

  // Calculate total of all items
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + calculateItemSubtotal(item);
    }, 0);
  };

  return (
    <>
    <section className="w-full relative h-screen flex flex-col items-center justify-start px-4 py-8  text-[#424244] ">
      <h1 className="text-[14px] mb-4">Your Cart ({cartItems.length} Items)</h1>

      <div className="max-h-96  overflow-y-auto w-[60%]">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center border border-gray-800  shadow-md mb-4 m-4 ">
            <img 
              src={item.images}
              alt={item.name}
              className="w-36 h-auto object-cover   "
            />
            <div className="flex flex-col pl-6">
              <div >
                <h1 className="p-1 text-[12px] " >{item.vendor}</h1>
                <h1 className="p-1 text-[14px] font-semibold">{item.title}</h1>
              </div>
              <div className="">
                <h1 className="p-1 text-[12px] ">${calculateItemSubtotal(item)}</h1>
              </div>

              <div className="flex items-center text-[11px] pl-1 pt-1 ">
                <button
                  className="bg-gray-300 text-gray-700 py-1 px-2 "
                  onClick={() => handleDecrementQuantity(item.id)}
                >
                  -
                </button>
                <span className="px-2">{item.quantity}</span>
                <button
                  className="bg-gray-300 text-gray-700 py-1 px-2"
                  onClick={() => handleIncrementQuantity(item.id)}
                >
                  +
                </button>
              </div>
              <div className="pl-1 pt-1">
                <button
                  className="text-red-500 text-[11px] mt-2  hover:text-white hover:bg-red-400 py-1 px-3 border border-red-400"
                  onClick={() => handleRemoveItem(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Display Subtotal and Total */}
      <div className=" w-[60%] flex justify-between place-items-end  mt-8 pl-6">
        <div className="flex flex-col ">
          {cartItems.length > 0 && (

          
          
          <button
            className="border-[1px] py-2 px-4    bg-zinc-200 border-zinc-500 text-[#424244] hover:bg-red-600 hover:text-white "
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
          )}
        </div>
        <div className="flex flex-col ">
          {cartItems.length >0 && (
            <>
          <h2 className="font-bold text-xl ">Subtotal: ${calculateTotal()}</h2>
          <button className="border-[1px] bg-zinc-200 border-zinc-500 text-[#424244] py-2 px-4  mt-2 hover:bg-zinc-900 hover:text-white">
            Proceed to Checkout
          </button>
          </>
          )}
        </div>

      </div>
    </section>
   
    </>
  );
};

export default Cart;
