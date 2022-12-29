import "../styles/cart-modal.css";
import QuantityControl from "./QuantityControl";

const CartModal = (props) => {
  return (
    <div className="cart-modal">
      {props.cart.map((entry) => {
        return (
          <div key={entry.product.id} className="product"> 
            <img src={entry.product.image} alt="" />
            <div className="title">{entry.product.title}</div>
            <div>
              <div>Qty</div>
              <QuantityControl quantity={entry.quantity}/>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default CartModal;
