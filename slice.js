import toolkit from "@reduxjs/toolkit";

const { configureStore, createSlice } = toolkit;

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      state.push(action.payload);
    },
  },
});

const loginSlice = createSlice({
  name: "login",
  initialState: false,
  reducers: {
    login(state) {
      state = true;
    },
  },
});

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    login: loginSlice.reducer,
  },
});

console.log("on create store", store.getState());
//subscribe
store.subscribe(() => {
  console.log("ON CHANGE:", store.getState());
});

//dispatch
store.dispatch(cartSlice.actions.addToCart({ id: 1, qty: 20 }));
store.dispatch(loginSlice.actions.login());
