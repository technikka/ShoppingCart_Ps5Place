import "../styles/product-card.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

const ProductCard = (props) => {
  const [quantity, setQuantity] = useState(1);

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
    setQuantity(parseInt(event.target.value));
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
        <input onChange={handleInput} type="text" value={quantity} size="1" />
        <button onClick={incrementQuantity} className="increment">
          <FontAwesomeIcon icon={faAngleUp} />
        </button>
      </div>

      <button>Add To Cart</button>
      <div className="description">{props.product.description}</div>
    </div>
  );
};

export default ProductCard;
