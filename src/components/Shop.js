import React, { useState, useEffect } from "react";
import "../styles/root.css";
import "../styles/shop.css";
import ProductCard from "./ProductCard";
import CartModal from "./CartModal";
import { products } from "../products";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import playstationLogo from "../images/playstation-logotype.png";

const Shop = () => {
  const [cart, setCart] = useState([]);
  const [numItemsInCart, setNumItemsInCart] = useState(0);
  const [lastInCart, setLastInCart] = useState({productId: 0, qty: 0 });
  const [displayCart, setDisplayCart] = useState(false);

  const findInCart = (product) => {
    return cart.find((entry) => entry.product.id === product.id);
  };

  const qtyCanAdd = (cartEntry) => {
    const limit = cartEntry.product.orderLimit;
    const current = cartEntry.quantity;
    const leftToAdd = limit - current;
    if (leftToAdd > 0) {
      return leftToAdd
    } else {
      return 0
    }
  }

  const addToCart = (product, quantity) => {
    const foundEntry = findInCart(product);
    if (foundEntry) {
      const canAdd = qtyCanAdd(foundEntry);
      if (canAdd >= quantity) {
        foundEntry.quantity = foundEntry.quantity + quantity;
        setNumItemsInCart(numItemsInCart + quantity);
        setLastInCart({productId: product.id, qty: quantity});
      } else {
        foundEntry.quantity = foundEntry.quantity + canAdd;
        setNumItemsInCart(numItemsInCart + canAdd);
        setLastInCart({productId: product.id, qty: canAdd});
      }
    } else {
      let entry = { product: product, quantity: quantity };
      setCart(cart.concat(entry));
      setLastInCart({productId: product.id, qty: quantity });
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
      <div className="sticky-banner">
        <img src={playstationLogo} alt="" />
        <h1>Shop</h1>
        <div className="cart-container">
          <button onClick={showModal}>Checkout</button>
          <div className="cart-icon">
            <div className="num-cart">{numItemsInCart}</div>
            <FontAwesomeIcon icon={faCartShopping} />
          </div>
          
        </div>
      </div>

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

      <div className="products-container">
        {products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
              hasViewedCart={displayCart}
              lastInCart={lastInCart}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
