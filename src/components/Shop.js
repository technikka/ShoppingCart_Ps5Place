import Navbar from "./Navbar";
import ProductCard from "./ProductCard";
import { products } from "../products";

const Shop = () => {
  return (
    <div className="shop-container">
      <Navbar />
      <h1>Shop</h1>
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />
      })}
    </div>
  );
};

export default Shop;
