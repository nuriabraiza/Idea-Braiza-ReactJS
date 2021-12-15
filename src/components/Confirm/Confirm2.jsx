import "./confirm.css";

function Confirm({ children, actionBtn, box }) {
  const actionHandler = (e) => {
    e.stopPropagation();
    e.preventDefault();
    actionBtn();
  };

  return (
    <div className="clear" onClick={() => box.setRemoveBox(false)}>
      <div className="cleanMsg" onClick={(e) => e.stopPropagation()}>
        {children}
        <button className="confirmBtn btn btn-danger" onClick={actionHandler}>
          Vaciar Carrito
        </button>
      </div>
    </div>
  );
}

export default Confirm;
