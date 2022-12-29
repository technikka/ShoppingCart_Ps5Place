import "../styles/cart-modal.css";
import CartModalProduct from "./CartModalProduct";
// import QuantityControl from "./QuantityControl";

const CartModal = (props) => {

  return (
    <div className="cart-modal">
      {props.cart.map((entry) => {
        return (
          <CartModalProduct productEntry ={entry} key={entry.product.id}/>
        )
      })}
    </div>
  )
}

export default CartModal;
