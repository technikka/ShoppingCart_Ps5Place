import React, { useState, useEffect } from "react";
import QuantityControl from "./QuantityControl";

const CartModalProduct = (props) => {
  const {productEntry} = props;

  const [quantity, setQuantity] = useState(productEntry.quantity)

  const quantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  const calculateProductTotal = () => {
    return (productEntry.product.price * quantity).toFixed(2);
  }

  const [totalPrice, setTotalPrice] = useState(calculateProductTotal())

  useEffect(() => {
  setTotalPrice(calculateProductTotal());
  }, [quantity]);

  return (
    <div key={productEntry.product.id} className="product"> 
            <img src={productEntry.product.image} alt="" />
            <div className="title">{productEntry.product.title}</div>
            <div>
              <div>Qty</div>
              <QuantityControl quantity={quantity} quantityChange={quantityChange}/>
              <div>Limit 7</div>
            </div>
            <div>{totalPrice}</div>
          </div>
  )
}

export default CartModalProduct;