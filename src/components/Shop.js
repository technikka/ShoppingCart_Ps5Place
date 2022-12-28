import React, { useState, useEffect } from "react";
import "../styles/shop.css";
import Navbar from "./Navbar";
import ProductCard from "./ProductCard";
import { products } from "../products";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Shop = () => {
  const [cart, setCart] = useState([]);
  const [numItemsInCart, setNumItemsInCart] = useState(0);

  const addToCart = (product, quantity) => {
    let obj = { product: product, quantity: quantity };
    setCart(cart.concat(obj));
  };

  const calcNumItemsInCart = () => {
    let num = 0;
    cart.forEach((obj) => {
      num = num + obj.quantity;
    });
    return num;
  };

  useEffect(() => {
    setNumItemsInCart(calcNumItemsInCart());
  }, [cart]);


  return (
    <div className="shop-container">
      <Navbar />
      <div className="cart-icon">
        <div>{numItemsInCart}</div>
        <FontAwesomeIcon icon={faCartShopping} />
      </div>
      <h1>Shop</h1>
      <div className="products-container">
        {products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
