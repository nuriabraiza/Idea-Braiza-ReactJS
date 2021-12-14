import { useState } from "react";
import { useCart } from "../../context/CartContext";
import CartDetail from "../CartDetail/CartDetail";
import Checkout from "../Checkout/Checkout";
import Confirm from "../Confirm/Confirm";
import "./cDetailC.css";

function CartDetailContainer({ cart }) {
  const [removeBox, setRemoveBox] = useState(false);
  const [checkout, setCheckout] = useState(false);

  const { clearCart } = useCart();

  const toggleCheckout = () => setCheckout(!checkout);

  return (
    <section className="CartDetailContainer">
      <header className="cartTop">
        <div className="cartCount">
          <span>Cantidad de Productos: </span>
          {cart.reduce((acum, item) => acum + item.qty, 0)}
        </div>
        <div className="cartPrice">
          <span>Precio Total: </span>${" "}
          {cart.reduce((acum, item) => acum + item.precio * item.qty, 0)}
        </div>
        <button
          className="removeBtn btn btn-danger"
          onClick={() => setRemoveBox(true)}
        >
          Vaciar Carrito
        </button>

        <Confirm box={{ removeBox, setRemoveBox }} actionBtn={clearCart}>
          <p>
            Desea eliminar los items de su
            <span>tu carrito</span>
          </p>
        </Confirm>
      </header>

      {cart.map((item, i) => (
        <CartDetail key={`${item.id}-${i}`} item={item} />
      ))}

      <button className="btn btn-info end" onClick={toggleCheckout}>
        Finalizar Compra
      </button>
      {checkout && <Checkout close={toggleCheckout} />}
    </section>
  );
}

export default CartDetailContainer;
