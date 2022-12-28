import React, { useState } from "react";
import "../styles/shop.css";
import Navbar from "./Navbar";
import ProductCard from "./ProductCard";
import { products } from "../products";

const Shop = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(cart.push(product));
  };

  return (
    <div className="shop-container">
      <Navbar />
      <h1>Shop</h1>
      <div className="products-container">
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} addToCart={addToCart} />;
        })}
      </div>
    </div>
  );
};

export default Shop;
