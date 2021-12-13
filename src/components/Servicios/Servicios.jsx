import logoxl from "../../images/logoxl.png";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import "./servicios.css";

const Servicios = () => (
  <div className="intro">
    <img src={logoxl} alt="logo" />
    <h3>¡Llevemos tu proyecto a otro nivel!</h3>

    <ItemListContainer />
  </div>
);

export default Servicios;
