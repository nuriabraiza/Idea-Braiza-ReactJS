import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Servicios from "./components/Servicios/Servicios";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/category/servicios">
            <Servicios />
          </Route>
          <Route path="/items/:id">
            <ItemDetailContainer />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
        </Switch>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
