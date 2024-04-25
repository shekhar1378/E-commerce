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
    dispatch(updateQuantity({ itemId, quantity: -1 }));
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
    <section className="w-full flex flex-col items-center px-4 py-8 bg-[#899387] text-[#424244]">
      <h1 className="text-[11px] mb-4">Your Cart ({cartItems.length} Items)</h1>

      <div className="max-h-96 overflow-y-auto w-full">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center border border-gray-200 rounded-lg shadow-md mb-4">
            <img
              src={item.images}
              alt={item.name}
              className="w-32 h-auto rounded-l-lg"
            />
            <div className="flex flex-col p-4">
              <div className="mt-4 text-[12px]">
                <h1>{item.vendor}</h1>
                <h1>{item.title}</h1>
              </div>
              <div>
                <h1 className="font-bold">${calculateItemSubtotal(item)}</h1>
              </div>

              <div className="flex items-center">
                <button
                  className="bg-gray-200 text-gray-700 py-1 px-2 rounded-l"
                  onClick={() => handleDecrementQuantity(item.id)}
                >
                  -
                </button>
                <span className="px-4">{item.quantity}</span>
                <button
                  className="bg-gray-200 text-gray-700 py-1 px-2 rounded-r"
                  onClick={() => handleIncrementQuantity(item.id)}
                >
                  +
                </button>
              </div>
              <div>
                <button
                  className="text-red-500 hover:text-red-700 py-2 px-4 rounded-r-lg"
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
      <div className="flex justify-between items-center mt-8">
        <div>
          {" "}
          <button
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300 ease-in-out"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        </div>
        <div>
          <h2 className="font-bold text-xl">Subtotal: ${calculateTotal()}</h2>
          <button className="bg-zinc-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300 ease-in-out">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default Cart;
