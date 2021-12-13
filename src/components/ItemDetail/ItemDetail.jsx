import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "../../context/CartContext.jsx";
import ItemCount from "../ItemCount/ItemCount";
import "./detail.css";

function ItemDetail({ item }) {
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  function onAdd(qtyToAdd) {
    const info = {
      ...item,
      qty: qtyToAdd,
    };

    const success = addItem(info);
    success && setAdded(true);
  }

  return (
    <div className="item2 card" key={item.id}>
      <img
        className="prod-img2 card-img-top"
        src={item.img}
        alt={item.nombre}
      />
      <div className="card-body body">
        <h5 className="card-title">{item.nombre}</h5>
        <p className="card-text text">{item.descripcion}</p>
        <span className="card-text price">${item.precio}</span>
      </div>

      {!added ? (
        <ItemCount initial={1} stock={5} onConfirm={{ onAdd: onAdd }} />
      ) : (
        <NavLink className="terminar" to="/cart">
          <button className="addBtn btn btn-info">Terminar Compra</button>
        </NavLink>
      )}
    </div>
  );
}

export default ItemDetail;
