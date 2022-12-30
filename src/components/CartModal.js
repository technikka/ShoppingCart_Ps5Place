import React, { useState, useEffect } from "react";
import "../styles/cart-modal.css";
import CartModalProduct from "./CartModalProduct";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark} from "@fortawesome/free-solid-svg-icons";

const CartModal = (props) => {
  const shippingFee = 6.99;
  const numItemsInCart = props.numItemsInCart;
  const cart = props.cart;

  const calculateItemsTotal = () => {
    let total = 0;
    cart.forEach((entry) => {
      total = total + (entry.product.price * entry.quantity)
    });
    return total.toFixed(2);
  }

  const [itemsTotal, setItemsTotal] = useState(() => {calculateItemsTotal()})

  const calculateTaxes = () => {
    // using an average instead of calculating per state
   return (itemsTotal * 0.07).toFixed(2);
  }

  const calculateOrderTotal = () => {
    return (parseFloat(itemsTotal) + parseFloat(calculateTaxes()) + shippingFee)
  }

  useEffect(() => {
    setItemsTotal(calculateItemsTotal())
  }, [props.cart])

  return (
    <div className="cart-modal">
      <div className="exit-icon" onClick={props.closeModal}><FontAwesomeIcon icon={faXmark} /></div>
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
          <div>item(s)</div>
          <div>${itemsTotal}</div>
        </div>
        <div>
          <div>est. taxes</div>
          <div>${calculateTaxes()}</div>
        </div>
        <div>
          <div>shipping</div>
          <div>{shippingFee}</div>
        </div>
        <div>
        <h3>EST. TOTAL</h3>
        <div>${calculateOrderTotal()}</div>
      </div>
      </div>
      
    </div>
  );
};

export default CartModal;
