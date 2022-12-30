import React, { useState, useEffect } from "react";
import "../styles/cart-modal.css";
import CartModalProduct from "./CartModalProduct";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark} from "@fortawesome/free-solid-svg-icons";

const CartModal = (props) => {
  const numItemsInCart = props.numItemsInCart;
  const cart = props.cart;

  return (
    <div className="cart-modal">
      <div class="exit-icon" onClick={props.closeModal}><FontAwesomeIcon icon={faXmark} /></div>
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
      <button onClick={props.closeModal}>Continue Shopping</button>
      <div className="summary">
        <h2>Summary</h2>
        <div>

        </div>
      </div>
    </div>
  );
};

export default CartModal;
