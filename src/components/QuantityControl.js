import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

const QuantityControl = (props) => {
  const [quantity, setQuantity] = useState(props.quantity);

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const incrementQuantity = () => {
    if (quantity < props.orderLimit) {
      setQuantity(quantity + 1);
    }
  };

  const handleInput = (event) => {
    let value = parseInt(event.target.value);
    if (value && (value > 0) && (value <= props.orderLimit)) {
      setQuantity(value);
    }
  };

  useEffect(() => {
    // for use with ProductCard's implementation of this component
    if (props.quantityChange) {
      props.quantityChange(quantity);
    }
  }, [quantity]);

  return (
    <div>
      <button onClick={decrementQuantity} className="decrement">
        <FontAwesomeIcon icon={faAngleDown} />
      </button>

      <input
        id="quantity"
        onChange={handleInput}
        type="number"
        required
        min="1"
        max={props.orderLimit}
        value={quantity}
        size="1"
      />

      <button onClick={incrementQuantity} className="increment">
        <FontAwesomeIcon icon={faAngleUp} />
      </button>
    </div>
  );
};

export default QuantityControl;
