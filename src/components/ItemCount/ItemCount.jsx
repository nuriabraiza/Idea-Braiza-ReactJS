import { useState } from "react";

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
          <button onClick={decrease}>-</button>
          <input readOnly value={counter} />
          <button onClick={increase}>+</button>
        </div>

        <button className="addBtn" onClick={confirmHandler}>
          Confirmar
        </button>
      </section>
    </div>
  );
}

export default ItemCount;
