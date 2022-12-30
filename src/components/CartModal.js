import React, { useState, useEffect } from "react";
import "../styles/cart-modal.css";
import CartModalProduct from "./CartModalProduct";

const CartModal = (props) => {
  const [numItemsInCart, setNumItemsInCart] = useState(props.numItemsInCart);
  const [cart, setCart] = useState(props.cart);

  // put these in shop then call them from props?
  // I don't need separate track of cart here, just need to change it in shop and pass it in here, it'll stay updated.

  const removeProductFromCart = (product) => {
    console.log('here')
  };

  const editQuantityOfProduct = (entryToEdit, newQuantity) => {
    const arr = cart.map((entry) => {
      if (entry.product.id === entryToEdit.product.id) {
        entry.quantity = newQuantity;
      }
      return entry;
    });
    setCart(arr);
  };

  useEffect(() => {
    setNumItemsInCart(props.calcNumItemsInCart())
  }, [cart]);

  return (
    <div className="cart-modal">
      <h1>Shopping Cart ({numItemsInCart} items)</h1>
      {props.cart.map((entry) => {
        return (
          <CartModalProduct
            productEntry={entry}
            key={entry.product.id}
            editQuantityOfProduct={editQuantityOfProduct}
            removeProductFromCart={removeProductFromCart}
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
