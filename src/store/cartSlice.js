import { createSlice } from "@reduxjs/toolkit";
import { uiSliceActions } from "./ui-slice";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemList: [],
    totalQuantity: 0,
    showCart: false,
    totalPriceAll: 0,
    changed: false,
  },
  reducers: {
    replaceData(state, action) {
      state.itemList = action.payload.itemList;
      state.totalPriceAll = action.payload.totalPriceAll;
      state.totalQuantity = action.payload.totalQuantity;
    },

    addToCart(state, action) {
      state.changed = true;
      const newItem = action.payload;

      const existingItem = state.itemList.find(
        (item) => item.id === newItem.id
      );

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += existingItem.price;
      } else {
        state.itemList.push({
          id: newItem.id,
          name: newItem.name,
          quantity: 1,
          price: newItem.price,
          totalPrice: newItem.price,
        });
        state.totalQuantity++;
      }
    },
    removeFromCart(state, action) {
      state.changed = true;
      const id = action.payload;

      const existingItem = state.itemList.find((item) => item.id === id);

      if (existingItem.quantity === 1) {
        state.itemList = state.itemList.filter((item) => item.id !== id);
        state.totalQuantity--;
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
    },
    setShowCart(state) {
      state.showCart = !state.showCart;
    },
    setTotalPrice(state, action) {
      const totalPriceAll = action.payload;

      state.totalPriceAll = totalPriceAll;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
