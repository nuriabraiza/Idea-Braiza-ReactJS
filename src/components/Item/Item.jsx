import { NavLink } from "react-router-dom";
import "./item.css";

function Item({ item }) {
  return (
    <>
      <div className="card" key={item.id}>
        <img src={item.img} className="card-img-top" alt={item.nombre}></img>
        <div className="card-body">
          <h5 className="card-title">{item.nombre}</h5>
          <p className="card-text">${item.precio}</p>

          <NavLink className="btn btn-info" to={`/items/${item.id}`}>
            {" "}
            Ver más
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Item;
