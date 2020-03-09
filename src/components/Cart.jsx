import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeCartItem } from "../actions/index";
import "../components/Cart.scss";

export const Cart = () => {
  const cartItems = useSelector(state => state.cart);
  const dispatch = useDispatch();

  let totalCartPrice = 0;

  // render functions

  const totalPrice = () => {
    cartItems.map(item => {
      totalCartPrice += item.count * item.price;
    });
    return totalCartPrice.toFixed(2);
  };

  const emptyCart = () => {
    if (cartItems.length < 1) {
      return <div className="empty">The cart is empty</div>;
    } else {
      return cartItems.map(item => (
        <div className="single-item" key={item.sku}>
          <span className="price">
            {item.count} x $ {item.price}
          </span>

          <span className="title">{item.title}</span>

          <span
            className="remove"
            onClick={() => dispatch(removeCartItem(item, cartItems))}
          >
            Remove
          </span>
        </div>
      ));
    }
  };

  return (
    <div className="cart">
      <div className="inner-cart">
        <div className="cart-items">{emptyCart()}</div>
        {cartItems.length > 0 ? (
          <div className="total-price">Total price is $ {totalPrice()}</div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
