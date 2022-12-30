import React, { useState, useEffect } from "react";
import "../styles/shop.css";
import Navbar from "./Navbar";
import ProductCard from "./ProductCard";
import CartModal from "./CartModal";
import { products } from "../products";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Shop = () => {
  const [cart, setCart] = useState([]);
  const [numItemsInCart, setNumItemsInCart] = useState(0);
  const [displayCart, setDisplayCart] = useState(false);

  const addToCart = (product, quantity) => {
    const foundEntry = cart.find((entry) => entry.product.id === product.id);
    if (foundEntry) {
      const newQuantity = foundEntry.quantity + quantity;
      if (newQuantity <= product.orderLimit) {
        foundEntry.quantity = newQuantity;
      } else {
        foundEntry.quantity = product.orderLimit;
      }
    } else {
      let entry = { product: product, quantity: quantity };
      setCart(cart.concat(entry));
    }
  };

  const removeProductFromCart = (entryToDelete) => {
    const arr = cart.filter(
      (entry) => entry.product.id !== entryToDelete.product.id
    );
    setCart(arr);
  };

  const editQuantityOfProduct = (entryToEdit, newQuantity) => {
    const arr = cart.map((entry) => {
      if (entry.product.id === entryToEdit.product.id) {
        entry.quantity = newQuantity;
      }
      return entry;
    });
    setCart(arr);
  };

  const calcNumItemsInCart = () => {
    let num = 0;
    cart.forEach((obj) => {
      num = num + obj.quantity;
    });
    return num;
  };

  const showModal = () => {
    setDisplayCart(true);
    let body = document.querySelector("body");
    body.style.overflow = "hidden";
  };

  const closeModal = () => {
    let body = document.querySelector("body");
    body.style.overflow = "scroll";
    setDisplayCart(false);
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
      <button onClick={showModal}>Checkout</button>

      {displayCart === true && (
        <CartModal
          cart={cart}
          numItemsInCart={numItemsInCart}
          editQuantityOfProduct={editQuantityOfProduct}
          removeProductFromCart={removeProductFromCart}
          calcNumItemsInCart={calcNumItemsInCart}
          closeModal={closeModal}
        />
      )}
      {displayCart === true && <div className="backdrop"></div>}

      <h1>Shop</h1>
      <div className="products-container">
        {products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
              hasViewedCart={displayCart}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
