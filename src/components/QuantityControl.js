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
    if (quantity < 7) {
      setQuantity(quantity + 1);
    }
  };

  const handleInput = (event) => {
    let value = event.target.value;
    if (value) {
      setQuantity(parseInt(value));
    }
  };

  // const quantityValid = () => {
  //   if ([1, 2, 3, 4, 5, 6, 7].includes(quantity)) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };

  useEffect(() => {
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
        max="7"
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
