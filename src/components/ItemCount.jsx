import React, { useState } from "react";

import "./styles/itemCount.css";

const ItemCount = ({ stock, initial, onConfirmation }) => {
  const [count, setCount] = useState(initial);

  const increase = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrease = () => {
    if (count > initial) {
      setCount(count - 1);
    }
  };

  const confirmHandler = () => {
    if (onConfirmation.onAdd) {
      onConfirmation.onAdd(count);
    } else {
      onConfirmation.onEdit(count);
    }
  };

  return (
    <div className="contador">
      <h5>Cantidad:</h5>
      <div className="grid">
        <button
          className="btn btn-danger"
          onClick={decrease}
          disabled={count === initial}
        >
          -
        </button>
        <input onChange={() => {}} value={count} />
        <button
          className="btn btn-info"
          onClick={increase}
          disabled={count === stock}
        >
          +
        </button>
        <button
          type="button"
          className="btn btn-light"
          onClick={confirmHandler}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};
export default ItemCount;
