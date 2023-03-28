import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {

    addToCart: (state: any, action) => {
      const itemInCart = state.cart.find(
        (item: any) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },

    quantityIncrease: (state: any, action) => {
      state.cart.map((el: any) => {
        if (el.id === action.payload) {
          el.quantity++
        }
      })
    },

    quantityDecrease: (state: any, action) => {
      state.cart.map((el: any) => {
        if (el.id === action.payload && el.quantity > 1) {
          el.quantity--
        } else if (el.quantity === 1) {
          el.quantity = 1
        }
      })
    },

    removeFromCart: (state: any, action) => {
      state.cart = state.cart.filter((el: any) => el.id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart, quantityIncrease, quantityDecrease } =
  cartSlice.actions;
export default cartSlice;
