import React from "react";
import logo from "../../images/logo.png";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="nav">
        <div className="container">
          <NavLink className="nav-link" to="/">
            <img src={logo} alt="inicio" className="logo" />
          </NavLink>
        </div>
        <NavLink className="m-2 nav-link" to="/">
          Inicio
        </NavLink>
        <NavLink className="m-2 nav-link" to="/category/servicios">
          Servicios
        </NavLink>

        <CartWidget />
      </nav>
    </>
  );
};

export default NavBar;
