import React, { useState, useEffect } from "react";
import "../styles/cart-modal.css";
import CartModalProduct from "./CartModalProduct";

const CartModal = (props) => {
  const numItemsInCart = props.numItemsInCart;
  const cart = props.cart;

  return (
    <div className="cart-modal">
      <h1>Shopping Cart ({numItemsInCart} items)</h1>
      {cart.map((entry) => {
        return (
          <CartModalProduct
            productEntry={entry}
            key={entry.product.id}
            editQuantityOfProduct={props.editQuantityOfProduct}
            removeProductFromCart={props.removeProductFromCart}
          />
        );
      })}
      <div className="summary">
        <h2></h2>
      </div>
    </div>
  );
};

export default CartModal;
