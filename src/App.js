import './App.css';
import{ CartProvider } from './contexts/CartContext'
import TopMenu from './components/TopMenu'
import Home from './components/Home'
import Cart from './components/Cart'
import Product from './components/Product'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <CartProvider>
    <div className="App">
      <Router>
        <TopMenu />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route extract path="/product">
            <Product />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </Router>
    </div>
    </CartProvider>
  );
}

export default App;
