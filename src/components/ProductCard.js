import "../styles/product-card.css";
import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

const ProductCard = (props) => {
  const [quantity, setQuantity] = useState(1);
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);
  const [showErrorMsg, setShowErrorMsg] = useState(false);

  const quantityRef = useRef(quantity);

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const incrementQuantity = () => {
    if (quantity < 7) {
      setQuantity(quantity + 1);
    }
  };

  const handleInput = (event) => {
    setShowErrorMsg(false);
    let value = event.target.value;
    if (value) {
      setQuantity(parseInt(value));
    }
  };

  const quantityValid = () => {
    if ([1, 2, 3, 4, 5, 6, 7].includes(quantity)) {
      return true;
    } else {
      return false;
    }
  };

  const handleAddToCart = () => {
    if (!quantityValid()) {
      setShowSuccessMsg(false);
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

  return (
    <div className="product-card">
      <img src={props.product.image} alt="packaging for game with cover art" />
      <div className="title">{props.product.title}</div>
      <div className="cost">${props.product.cost}</div>
      <div className="quantity-container">
        <span>Quantity: </span>
        <button onClick={decrementQuantity} className="decrement">
          <FontAwesomeIcon icon={faAngleDown} />
        </button>

        <input
          id="quantity"
          onChange={handleInput}
          type="number"
          required
          min="1"
          max="7"
          value={quantity}
          size="1"
        />

        <button onClick={incrementQuantity} className="increment">
          <FontAwesomeIcon icon={faAngleUp} />
        </button>
      </div>

      {showSuccessMsg === true && addToCartSuccessMsg()}
      {showErrorMsg === true && quantityErrorMsg()}

      <button onClick={handleAddToCart}>Add To Cart</button>
      <div className="description">{props.product.description}</div>
    </div>
  );
};

export default ProductCard;
