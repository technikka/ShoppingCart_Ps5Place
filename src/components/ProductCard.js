const ProductCard = (props) => {
  return (
    <div className="product-card">
      <p>{props.product.title}</p>
      <p>{props.product.cost}</p>
      <p>{props.product.description}</p>
      <img src={props.product.image} alt="" />
    </div>
  );
};

export default ProductCard;
