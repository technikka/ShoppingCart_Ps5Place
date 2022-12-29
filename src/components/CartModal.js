import "../styles/cart-modal.css";

const CartModal = (props) => {
  return (
    <div className="cart-modal">
      {props.cart.map((entry) => {
        return (
          <div key={entry.product.id} className="product"> 
            <img src={entry.product.image} alt="" />
            <div className="title">{entry.product.title}</div>
            
          </div>
        )
      })}
    </div>
  )
}

export default CartModal;
