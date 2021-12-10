import { NavLink } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import CartDetailContainer from "../CartDetailContainer/CartDetailContainer";

function Cart() {
  const { cart } = useCart();

  return (
    <div className="Cart">
      {cart.length === 0 ? (
        <section className="EmptyCart">
          <div className="emptMsg">
            <i className="fas fa-shopping-cart"></i>
            <article>
              Todavía no has agregado ningún producto a tu carrito
            </article>
          </div>
          <NavLink className="redirect" to="/category/items">
            Mira lo que tenemos para ofrecerte!
          </NavLink>
        </section>
      ) : (
        <CartDetailContainer cart={cart} />
      )}
    </div>
  );
}

export default Cart;
