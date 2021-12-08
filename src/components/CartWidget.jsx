import { NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";
import cart from "../img/cart.png";
import "./styles/cartWidget.css";

function CartWidget() {
  const { total } = useCart();

  return (
    <NavLink to="/cart">
      <div className="cartwidget">
        <img src={cart} alt="Carrito" />
        {total > 0 && <p className="cartQty">{total}</p>}
      </div>
    </NavLink>
  );
}

export default CartWidget;
