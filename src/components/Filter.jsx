import React from "react";
import "../components/Filter.scss";
import { useSelector, useDispatch } from "react-redux";
import { filteredItems, fetchProducts } from "../actions/index";

export const Filter = () => {
  const allProducts = useSelector(state => state.products);
  const dispatch = useDispatch();

  const handleSizeFilter = e => {
    let size = e.target.value;
    if (size === "") {
      let filter = [];
      dispatch(filteredItems(filter));
    } else {
      let filter = allProducts.filter(item =>
        item.availableSizes.includes(size)
      );
      dispatch(filteredItems(filter));
    }
  };
  return (
    <div className="filter">
      <span>Filter by size</span>

      <select
        onChange={e => {
          handleSizeFilter(e);
        }}
        name="size-filter"
        id=""
      >
        <option value="">All</option>
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
        <option value="X">X</option>
        <option value="XL">XL</option>
        <option value="XXL">XXL</option>
      </select>
    </div>
  );
};
