import "../styles/product-card.css";

const ProductCard = (props) => {
  return (
    <div className="product-card">
      <img src={props.product.image} alt="packaging for game with cover art"/>
      <div className="title">{props.product.title}</div>
      <div className="cost">${props.product.cost}</div>
      <div className="description">{props.product.description}</div>
    </div>
  );
};

export default ProductCard;
