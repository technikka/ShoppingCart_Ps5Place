import Navbar from "./Navbar";

const product = (title, cost, image, description) => {
  return { title, cost, image, description };
};

const products = [
  product()
];

const Shop = () => {
  return (
    <div className="shop-container">
      <Navbar />
      <h1>Shop</h1>
    </div>
  );
};

export default Shop;
