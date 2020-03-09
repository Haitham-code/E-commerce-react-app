import { firebase } from "../firebase";

export const fetchProducts = () => {
  return dispatch => {
    firebase
      .database()
      .ref()
      .child("products")
      .on("value", snap => {
        dispatch({ type: "FETCH-PRODUCTS", payLoad: snap.val() });
      });
  };
};

export const addCartItem = (item, cartItems) => {
  let itemInCart = false;

  cartItems.forEach(product => {
    if (item.id === product.id) {
      itemInCart = true;
      product.count++;
    }
  });

  if (!itemInCart) {
    cartItems.push({ ...item, count: 1 });
  }

  return dispatch => {
    dispatch({
      type: "ADD-ITEM",
      payLoad: cartItems
    });
  };
};

export const removeCartItem = (item, cartItems) => {
  const a = cartItems.slice().filter(elm => elm.id !== item.id);

  return dispatch => {
    dispatch({
      type: "REMOVE-ITEM",
      payLoad: a
    });
  };
};

export const filteredItems = allProducts => {
  return dispatch => {
    dispatch({
      type: "FILTER",
      payLoad: allProducts
    });
  };
};

export const order = allProducts => {
  return dispatch => {
    dispatch({
      type: "ORDER",
      payLoad: allProducts
    });
  };
};
