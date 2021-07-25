import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Pages
import HomePage from "./pages/Home/HomePage";
import ProductPage from "./pages/ProductPage/ProductPage";
import CartPage from "./pages/Cart/CartPage";

//Components
import Navbar from './components/Navbar/Navbar';
import Backdrop from './components/Backdrop/Backdrop';
import SideDrawer from './components/SideDrawer/SideDrawer';

function App() {

  const [sideToggle, setSideToggle] = useState(false);
 
  return (
    <Router>
      <Navbar click={ () => setSideToggle(true) } />
      <SideDrawer show={ sideToggle } click={ () => setSideToggle(false) } />
      <Backdrop show={ sideToggle } click={ () => setSideToggle(false) } />
      
      <main>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/product/:id" component={ProductPage} />
          <Route exact path="/cart" component={CartPage} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
