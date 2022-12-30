import "../styles/product-card.css";
import React, { useState, useRef, useEffect } from "react";
import QuantityControl from "./QuantityControl";

const ProductCard = (props) => {
  const [quantity, setQuantity] = useState(1);
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);
  const [showErrorMsg, setShowErrorMsg] = useState(false);

  const quantityRef = useRef(quantity);

  const quantityValid = () => {
    if ([1, 2, 3, 4, 5, 6, 7].includes(quantity)) {
      return true;
    } else {
      return false;
    }
  };

  const quantityChange = (newQuantity) => {
    setShowErrorMsg(false);
    setShowSuccessMsg(false);
    setQuantity(newQuantity);
  };

  const handleAddToCart = () => {
    if (!quantityValid()) {
      setShowErrorMsg(true);
      return;
    }
    quantityRef.current = quantity;
    setShowSuccessMsg(true);
    props.addToCart(props.product, quantity);
  };

  const addToCartSuccessMsg = () => {
    let message;
    if (quantityRef.current === 1) {
      message = "1 item was added to your cart.";
    } else {
      message = `${quantityRef.current} items were added to your cart `;
    }
    return <div className="cart-success-msg">{message}</div>;
  };

  const quantityErrorMsg = () => {
    let message;
    if (quantity < 1) {
      message = "You must select at least 1 to add to your cart.";
    } else if (quantity > 7) {
      message = "I'm sorry, we limit 7 copies per customer.";
    }
    return <div className="cart-error-msg">{message}</div>;
  };

  useEffect(() => {
    setShowSuccessMsg(false);
  }, [props.hasViewedCart])

  return (
    <div className="product-card">
      <img src={props.product.image} alt="packaging for game with cover art" />
      <div className="title">{props.product.title}</div>
      <div className="price">${props.product.price}</div>
      <div className="quantity-container">
        <div>Quantity:</div>
        <div>Limit 7</div>
        <QuantityControl quantity={quantity} quantityChange={quantityChange} />
      </div>

      {showSuccessMsg === true && addToCartSuccessMsg()}
      {showErrorMsg === true && quantityErrorMsg()}

      <button onClick={handleAddToCart}>Add To Cart</button>
      <div className="description">{props.product.description}</div>
    </div>
  );
};

export default ProductCard;
