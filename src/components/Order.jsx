import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { order } from "../actions/index";

export const Order = () => {
  const allProducts = useSelector(state => state.products);
  const dispatch = useDispatch();

  const handleOrder = e => {
    const value = e.target.value;
    if (value === "lowest") {
      let orderedItems = allProducts.sort(
        (a, b) => parseFloat(a.price) - parseFloat(b.price)
      );
      dispatch(order(orderedItems));
    } else if (value === "heighest") {
      let orderedItems = allProducts.sort(
        (a, b) => parseFloat(b.price) - parseFloat(a.price)
      );
      dispatch(order(orderedItems));
    }
  };

  return (
    <div className="order">
      <span>Order</span>
      <select
        onChange={e => {
          handleOrder(e);
        }}
        name="price-order"
        id=""
      >
        <option value="" disabled selected hidden>
          Choose
        </option>
        <option value="lowest">Lowest to Heighest</option>
        <option value="heighest">Heighest to Lowest </option>
      </select>
    </div>
  );
};
