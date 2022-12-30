import React, { useState, useEffect, useRef } from "react";
import QuantityControl from "./QuantityControl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const CartModalProduct = (props) => {
  const { productEntry } = props;

  const [quantity, setQuantity] = useState(productEntry.quantity);

  const quantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  const calculateProductTotal = () => {
    return (productEntry.product.price * quantity).toFixed(2);
  };

  const [totalPrice, setTotalPrice] = useState(calculateProductTotal());

  const isInitialMount = useRef(true);

  useEffect(() => {
    setTotalPrice(calculateProductTotal());
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      props.editQuantityOfProduct(productEntry, quantity);
    }
  }, [quantity]);

  return (
    <div key={productEntry.product.id} className="product">
      <img src={productEntry.product.image} alt="" />
      <div className="title">{productEntry.product.title}</div>
      <div>
        <div>Qty</div>
        <QuantityControl quantity={quantity} quantityChange={quantityChange} orderLimit={productEntry.product.orderLimit}/>
        <div>Limit {productEntry.product.orderLimit}</div>
      </div>
      <div>
        <div>{totalPrice}</div>
        {quantity > 1 && <div>({productEntry.product.price} each)</div>}
      </div>
      <div>
        <button onClick={() => {props.removeProductFromCart(productEntry)}}>
          <FontAwesomeIcon icon={faTrash} /> Remove
        </button>
      </div>
    </div>
  );
};

export default CartModalProduct;
