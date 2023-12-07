import { legacy_createStore as createStore } from "redux";
const incR = "incr";
const decR = "decr";
export const incr = {
  type: incR,
};
export const decr = {
  type: decR,
};

const reducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case incR:
      return {
        counter: state.counter + 1,
      };
    case decR:
      return {
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);
export default store;
