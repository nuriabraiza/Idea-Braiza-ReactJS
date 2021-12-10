import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "../../context/CartContext.jsx";
import ItemCount from "../ItemCount/ItemCount";

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
        <h3 className="card-title">{item.nombre}</h3>
        <h4 className="card-text text">{item.descripcion}</h4>
        <span className="card-text price">${item.precio}</span>
      </div>

      {!added ? (
        <ItemCount initial={1} stock={5} onConfirm={{ onAdd: onAdd }} />
      ) : (
        <NavLink to="/cart">
          <button className="addBtn">Terminar Compra</button>
        </NavLink>
      )}
    </div>
  );
}

export default ItemDetail;
