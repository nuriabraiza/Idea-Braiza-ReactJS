import { NavLink } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import CartDetailContainer from "../CartDetailContainer/CartDetailContainer";
import logoxl from "../../images/logoxl.png";
import "./cart.css";

function Cart() {
  const { cart } = useCart();

  return (
    <div className="Cart">
      {cart.length === 0 ? (
        <section className="vacio">
          <img src={logoxl} alt="logo" />
          <div className="emptMsg">
            <article>
              Todavía no has agregado ningún producto a tu carrito
            </article>
          </div>
          <NavLink className="redirect" to="/category/items">
            <button className="btn btn-info">
              Mira lo que tenemos para ofrecerte!
            </button>
          </NavLink>
        </section>
      ) : (
        <CartDetailContainer cart={cart} />
      )}
    </div>
  );
}

export default Cart;
