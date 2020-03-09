import React, { useState, useEffect } from "react";
import { Products } from "../Custom-hooks/Products";
import OutsideClickHandler from "react-outside-click-handler";
import "../components/Content.scss";
import { fetchProducts, addCartItem } from "../actions/index";
import { useSelector, useDispatch } from "react-redux";
import { Order } from "../components/Order";
import { Filter } from "../components/Filter";

export const Content = () => {
  //const { products } = Products();

  const allProducts = useSelector(state => state.products);
  const filteredProducts = useSelector(state => state.filter);
  const cartItems = useSelector(state => state.cart);
  const dispatch = useDispatch();
  let viewsProducts = [];
  const [bigImage, setBigImage] = useState(false);
  const [item, setItem] = useState({});

  const imgFun = () => {
    if (bigImage) {
      return <img src={require(`../imgs/${item.sku}_1.jpg`)} alt="" />;
    }
  };

  if (filteredProducts.length <= 0) {
    viewsProducts = allProducts;
  } else {
    viewsProducts = filteredProducts;
  }

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="content">
      <div className="filter-bar">
        <Order />
        <Filter />
      </div>
      <div className="products">
        {viewsProducts.map(item => (
          <div className="single-item" key={item.sku}>
            <div className="img">
              <img
                onClick={() => {
                  setItem(item);
                  setBigImage(!bigImage);
                }}
                src={require(`../imgs/${item.sku}_2.jpg`)}
                alt=""
              />
            </div>
            <div className="title">{item.title}</div>
            <div className="price">$ {item.price}</div>
            <div className="add-to-cart">
              <button
                onClick={e => {
                  dispatch(addCartItem(item, cartItems));
                }}
              >
                add to cart
              </button>
            </div>
          </div>
        ))}

        <div className={`overlay ${bigImage ? "show" : ""}`}>
          {}
          <div className={`popup ${bigImage ? "show" : ""}`}>
            <OutsideClickHandler onOutsideClick={() => setBigImage(false)}>
              {imgFun()}
            </OutsideClickHandler>
          </div>
        </div>
      </div>
    </div>
  );
};
