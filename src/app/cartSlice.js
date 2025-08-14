import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
  finalAmount: 0,
};

if (localStorage.getItem("cartproducts") != null) {
  initialState = JSON.parse(localStorage.getItem("cartproducts"));
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let product = action.payload;
      let findProduct = state.product.find((item) => item.id === product.id);

      if (findProduct) {
        findProduct.quentity += 1;
        // console.log(findProduct.quentity);
      } else {
        state.product.push(action.payload);
      }
    },
    removeToCart: (state, action) => {
      // let productId = action.payload;
      // return state.filter((item) => item.id != productId);
      state.product = state.product.filter(
        (item) => item.id !== action.payload
      );
    },
    incrementQuantity: (state, action) => {
      let productId = action.payload;

      let findProduct = state.product.find((item) => item.id === productId);

      if (findProduct) {
        findProduct.quentity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      let productId = action.payload;

      let findProduct = state.product.find((item) => item.id === productId);

      if (findProduct && findProduct.quentity > 1) {
        findProduct.quentity -= 1;
      }
    },

    setTotalAmount: (state, action) => {
      state.finalAmount = action.payload;
    },
    setDiscountAmount: (state, action) => {
      // console.log(action.payload);.
      state.finalAmount = state.finalAmount -= action.payload;
      console.log(state.finalAmount);
    },
  },
});

export const {
  addToCart,
  removeToCart,
  incrementQuantity,
  decrementQuantity,
  setTotalAmount,
  setDiscountAmount,
} = cartSlice.actions;

export default cartSlice.reducer;
