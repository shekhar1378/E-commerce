import { createSlice } from "@reduxjs/toolkit";

const CART_STORAGE_KEY = "cartItems";

const loadCartItemsFromStorage = () => {
  const cartItems = localStorage.getItem(CART_STORAGE_KEY);
  return cartItems ? JSON.parse(cartItems) : [];
};

const saveCartItemsToStorage = (items) => {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: loadCartItemsFromStorage(), // Load cart items from local storage
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItemIndex = state.items.findIndex((item) => item.id === newItem.id);

      if (existingItemIndex !== -1) {
        state.items[existingItemIndex].quantity += newItem.quantity || 1;
      } else {
        state.items.push({ ...newItem, quantity: newItem.quantity || 1 });
      }

      saveCartItemsToStorage(state.items); // Save updated cart items to local storage
    },
    removeItem: (state, action) => {
      const { itemId } = action.payload;
      const itemIndex = state.items.findIndex((item) => item.id === itemId);
      if (itemIndex !== -1) {
        state.items.splice(itemIndex, 1);
        saveCartItemsToStorage(state.items); // Save updated cart items to local storage
      }
    },
    clearCart: (state) => {
      state.items = [];
      saveCartItemsToStorage(state.items); // Save updated cart items to local storage
    },
    updateQuantity: (state, action) => {
      const { itemId, quantity } = action.payload;
      const itemIndex = state.items.findIndex((item) => item.id === itemId);
      if (itemIndex !== -1) {
        if (state.items[itemIndex].quantity === undefined) {
          state.items[itemIndex].quantity = 0;
        }
        state.items[itemIndex].quantity += quantity;
        saveCartItemsToStorage(state.items); // Save updated cart items to local storage
      }
    },
  },
});

export const { addItem, removeItem, clearCart, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
