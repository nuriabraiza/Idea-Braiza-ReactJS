import { useState } from "react";
import logoxl from "../../images/logoxl.png";
import { useCart } from "../../context/CartContext";
import { getFirestore } from "../../firebase";
import Confirm from "../Confirm/Confirm";
import "./checkout.css";
import {
  collection,
  addDoc,
  doc,
  updateDoc,
  increment,
} from "firebase/firestore";

function Checkout({ close }) {
  const { cart, clearCart } = useCart();

  const [formFields, setFormFields] = useState({});

  const [newOrder, setNewOrder] = useState(null);
  const [popUpBox, setPopUpBox] = useState(false);

  const inputHandler = (e) => {
    setFormFields({ ...formFields, [e.target.name]: e.target.value });
  };
  const confirmHandler = (e) => {
    e.preventDefault();
    setPopUpBox(true);
  };
  const closeHandler = () => {
    if (newOrder) {
      clearCart();
      close();
    } else {
      close();
    }
  };

  const buy = () => {
    const items = cart.map((i) => {
      return {
        id: i.id,
        qty: i.qty,
        price: i.price,
        title: i.title,
        category: i.category,
      };
    });

    const order = {
      buyer: {
        name: formFields.name,
        phone: formFields.tel,
        email: formFields.mail,
      },
      items: cart,
      total: cart.reduce((acum, item) => acum + item.price * item.qty, 0),
    };

    const db = getFirestore();

    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, order).then(({ id }) => setNewOrder(id));

    cart.forEach((i) => {
      const productInBase = doc(db, "items", i.id);

      updateDoc(productInBase, { stock: increment(-i.qty) });
    });
  };

  return (
    <div className="bkg-Checkout">
      <form className="checkout">
        <i onClick={closeHandler} className="exitIcn far fa-times-circle"></i>
        {!newOrder && (
          <>
            <h3>Confirma tus datos</h3>

            <div className="inputContainer1">
              <label>Nombre y Apellido</label>
              <input
                name="name"
                type="text"
                value={formFields.name}
                onChange={inputHandler}
              />
            </div>
            <div className="inputContainer2">
              <label>Teléfono</label>
              <input
                name="tel"
                type="text"
                value={formFields.tel}
                onChange={inputHandler}
              />
            </div>
            <div className="inputContainer3">
              <label>Email</label>
              <input
                name="mail"
                type="email"
                value={formFields.mail}
                onChange={inputHandler}
              />
            </div>

            <Confirm
              actionBtn={buy}
              box={{ removeBox: popUpBox, setRemoveBox: setPopUpBox }}
            ></Confirm>
          </>
        )}
        {newOrder && (
          <>
            <div className="compra">
              <img src={logoxl} alt="logo" />
              <h3>Gracias por tu compra {formFields.name}!</h3>

              <div className="inputContainer">
                <p>
                  Ya hemos procesado tu pedido bajo el numero de orden{" "}
                  <span>{newOrder}</span>
                </p>
              </div>
            </div>
          </>
        )}
      </form>
    </div>
  );
}

export default Checkout;
