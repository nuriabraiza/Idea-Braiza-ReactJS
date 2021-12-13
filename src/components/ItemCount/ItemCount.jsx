import { useState } from "react";
import "./count.css";

function ItemCount({ stock, initial, onConfirm }) {
  const [counter, setCounter] = useState(initial || 1);

  const increase = () => {
    const limit = stock || 10;

    const newCounter = counter + 1 > limit ? counter : counter + 1;
    setCounter(newCounter);
  };
  const decrease = () => {
    const newCounter = counter === 1 ? counter : counter - 1;
    setCounter(newCounter);
  };
  const confirmHandler = () => {
    if (onConfirm.onAdd) {
      onConfirm.onAdd(counter);
    } else {
      onConfirm.onEdit(counter);
    }
  };

  return (
    <div className="ItemCount">
      <section className="countSection">
        <div className="countButtons">
          <td>
            <button className="btn btn-danger" onClick={decrease}>
              -
            </button>
            <input className="form-control" readOnly value={counter} />
            <button className="btn btn-info" onClick={increase}>
              +
            </button>
          </td>
        </div>

        <button className="addBtn btn btn-info" onClick={confirmHandler}>
          Confirmar
        </button>
      </section>
    </div>
  );
}

export default ItemCount;
