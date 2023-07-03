import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: [{ id: 1, qty: 20 }],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.data.find(
        (item) => item.id === action.payload.id
      );

      if (itemInCart) {
        itemInCart.qty++;
      } else {
        state.data.push(action.payload);
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
