import { NavLink } from "react-router-dom";

function Item({ item }) {
  return (
    <NavLink to={`/items/${item.id}`} className="Item">
      <h4>{item.nombre}</h4>

      <img className="ItemImg" src={item.img} alt={item.nombre} />

      <button className="btn btn-info"> Ver más</button>
    </NavLink>
  );
}

export default Item;
