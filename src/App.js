import './App.css';
import{ CartProvider } from './contexts/CartContext'
import TopMenu from './components/TopMenu'
import Home from './components/Home'
import Cart from './components/Cart'
import Product from './components/Product'
import Footer from './components/Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Container from '@material-ui/core/Container'
function App() {
  return (
    <CartProvider>
    <div className="App">
      <Router>
        <TopMenu />
        <Switch>
          <div className="container">
            <Route exact path="/">
              <Home />
            </Route>
            <Route extract path="/product">
              <Product />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            </div>
        </Switch>
        <Footer />
      </Router>
    </div>
    </CartProvider>
  );
}

export default App;
