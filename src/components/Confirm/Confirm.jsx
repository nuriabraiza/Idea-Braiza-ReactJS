import "./confirm.css";

function Confirm({ children, actionBtn, box }) {
  const actionHandler = (e) => {
    e.stopPropagation();
    e.preventDefault();
    actionBtn();
  };

  const returnHandler = (e) => {
    e.stopPropagation();
    e.preventDefault();
    box.setRemoveBox(false);
  };

  return (
    <div className="finalizar" onClick={() => box.setRemoveBox(false)}>
      <div className="confirmMsg" onClick={(e) => e.stopPropagation()}>
        {children}
        <button className="deleteBtn btn btn-info" onClick={actionHandler}>
          Confirmar
        </button>
        <button className="returnBtn btn btn-danger" onClick={returnHandler}>
          Regresar
        </button>
      </div>
    </div>
  );
}

export default Confirm;
