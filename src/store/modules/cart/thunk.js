import { addToCart } from "./actions";

export const addToCartThunk = (product) => (dispatch) => {
  const list = JSON.parse(localStorage.getItem("cart")) || [];
  list.push(product);
  console.log("thunk");
  localStorage.setItem("cart", JSON.stringify(list));
  dispatch(addToCart(product));
};
