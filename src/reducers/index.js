import { combineReducers } from "redux";
import { fetchData } from "../reducers/fetchProducts";
import { cartProduct } from "../reducers/cartProducts";
import { filteredProducts } from "../reducers/filteredProducts";

export const allReducers = combineReducers({
  products: fetchData,
  cart: cartProduct,
  filter: filteredProducts
});
