import { NavLink } from "react-router-dom";
import { useCart } from "../../context/CartContext.jsx";

function CartWidget() {
  const { totalItems } = useCart();

  return (
    <NavLink to="/cart">
      <div className="widget">
        <i className="fas fa-shopping-cart"></i>
        {totalItems > 0 && <p className="cartQty">{totalItems}</p>}
      </div>
    </NavLink>
  );
}

export default CartWidget;
