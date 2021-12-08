import { useState } from "react";
import { useCart } from "../context/CartContext";
import CartDetail from "./CartDetail";
import Checkout from "./Checkout";

function CartDetailContainer({ cart }) {
  const [remove, setRemove] = useState(false);
  const [checkout, setCheckout] = useState(false);

  const { clear } = useCart();

  const toggleCheckout = () => setCheckout(!checkout);

  return (
    <section className="CartDetailContainer">
      <button onClick={toggleCheckout}>Finalizar Compra</button>
      {checkout && <Checkout close={toggleCheckout} />}

      <header className="cartTop">
        <div className="cartCount">
          <span>Cantidad de Productos: </span>
          {cart.reduce((acum, item) => acum + item.qty, 0)}
        </div>
        <div className="cartPrice">
          <span>Precio Total: </span>${" "}
          {cart.reduce((acum, item) => acum + item.price * item.qty, 0)}
        </div>
        <button className="removeBtn" onClick={() => setRemove(true)}>
          Vaciar Carrito
        </button>
      </header>

      {cart.map((item, i) => (
        <CartDetail key={`${item.id}-${i}`} item={item} />
      ))}
    </section>
  );
}

export default CartDetailContainer;
