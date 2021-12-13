import { useState } from "react";
import { useCart } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import "./cartD.css";

function CartDetail({ item }) {
  const [removeBox, setRemoveBox] = useState(false);
  const { editItem, removeItem } = useCart();

  function addToCartHandler(qtyToAdd) {
    const info = {
      ...item,
      qty: qtyToAdd,
    };

    editItem(info);
  }
  return (
    <article className="CartDetail">
      <img src={item.img} alt={item.nombre} />

      <div className="cartInfo">
        <h3 className="cartInfo-title">{item.nombre}</h3>
        <br />
        <p className="cartInfo-detail">
          <span>Cantidad Elegida:</span> {item.qty}
        </p>
        <p className="cartInfo-detail">
          <span>Precio Unitario:</span> ${item.precio}
        </p>
      </div>

      <div className="cart-buttons">
        <ItemCount
          initial={item.qty}
          stock={item.stock}
          onConfirm={{ onEdit: addToCartHandler }}
        />
        <button
          className="removeBtn btn btn-danger"
          style={{ marginTop: "5px" }}
          onClick={() => setRemoveBox(true)}
          box={{ removeBox, setRemoveBox }}
          actionBtn={() => removeItem(item.id)}
        >
          Eliminar
        </button>
      </div>
    </article>
  );
}

export default CartDetail;
