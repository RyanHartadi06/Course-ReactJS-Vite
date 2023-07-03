import { createStore } from "redux";

//reducer
const cartReducer = (
  state = {
    cart: [{ id: 2, qty: 5 }],
    isLogged: false,
  },
  action
) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "LOG_IN":
      return {
        ...state,
        isLogged: true,
      };
    default:
      return state;
  }
};

//store

const store = createStore(cartReducer);
console.log("on create store:", store.getState());

//subscribe
store.subscribe(() => {
  console.log("ON SUBSCRIBE:", store.getState());
});

//dispatch
const action1 = { type: "ADD_TO_CART", payload: { id: 1, qty: 20 } };
store.dispatch(action1);

const actionLogin = { type: "LOG_IN", payload: { isLogged: true } };
store.dispatch(actionLogin);
