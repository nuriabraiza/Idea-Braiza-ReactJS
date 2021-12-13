import { NavLink } from "react-router-dom";
import { useCart } from "../../context/CartContext.jsx";
import "./widget.css";

function CartWidget() {
  const { totalItems } = useCart();

  return (
    <NavLink to="/cart">
      <div className="widget">
        <i className="fas fa-shopping-cart"></i>
        {totalItems > 0 && (
          <span className="badge bg-info text-dark">{totalItems}</span>
        )}
      </div>
    </NavLink>
  );
}

export default CartWidget;
