import logoxl from "../../images/logoxl.png";
import { NavLink } from "react-router-dom";
import "./home.css";

const Home = () => (
  <div className="intro">
    <img src={logoxl} alt="logo" />
    <h4>Nuestra misión es acompañar a medianas y grandes empresas a que</h4>
    <h4>
      disfruten del desarrollo y crecimiento de sus proyectos a través de la
      imagen.
    </h4>
    <h4>
      Diseñaremos el universo visual y virtual de tu marca para que logre
      transmitir
    </h4>
    <h4>
      y comunicar su esencia y valores, logrando así destacarla en el mundo
      digital.
    </h4>
    <NavLink to={`/category/servicios`} className="Item">
      <button className="btn btn-info">Ir a Servicios</button>
    </NavLink>
  </div>
);

export default Home;
