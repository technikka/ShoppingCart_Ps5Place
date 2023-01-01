import "../styles/product-card.css";
import React, { useState, useRef, useEffect } from "react";
import QuantityControl from "./QuantityControl";

const ProductCard = (props) => {
  const [quantity, setQuantity] = useState(1);
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const quantityRef = useRef(quantity);

  const quantityValid = () => {
    if (quantity > 0 && quantity <= props.product.orderLimit) {
      return true;
    } else {
      return false;
    }
  };

  const quantityChange = (newQuantity) => {
    setShowSuccessMsg(false);
    setQuantity(newQuantity);
  };

  const handleAddToCart = () => {
    if (!quantityValid()) {
      return;
    }
    quantityRef.current = quantity;
    setShowSuccessMsg(true);
    props.addToCart(props.product, quantity);
  };

  const addToCartSuccessMsg = () => {
    let message;
    if (quantityRef.current > props.lastInCart.qty) {
      message = `${props.lastInCart.qty} item(s) were added to your cart. Limit is ${props.product.orderLimit}.`
    } else {
      message = `${quantityRef.current} item(s) were added to your cart.`
    }
    return <div className="cart-success-msg">{message}</div>;
  };

  useEffect(() => {
    setShowSuccessMsg(false);
  }, [props.hasViewedCart])

  const modalView = () => {
    return (
      <div className="product-card-modal">
      <img src={props.product.image} alt="packaging for game with cover art" />
      <div className="title">{props.product.title}</div>
      <div className="price">${props.product.price}</div>
      <div className="quantity-container">
        <div>Quantity:</div>
        <div>Limit {props.product.orderLimit}</div>
        <QuantityControl quantity={quantity} quantityChange={quantityChange} orderLimit={props.product.orderLimit} />
      </div>
      {showSuccessMsg === true && addToCartSuccessMsg()}
      <button onClick={handleAddToCart}>Add To Cart</button>
      <div className="description-modal">{props.product.description}</div>
    </div>
    )
  }

  return (
    <div onClick={() => {setShowModal(true)}} className="product-card">
      <img src={props.product.image} alt="packaging for game with cover art" />
      <div className="title">{props.product.title}</div>
      <div className="price">${props.product.price}</div>
      { showModal === true && modalView() }
    </div>
  );
};

export default ProductCard;
