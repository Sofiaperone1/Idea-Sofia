
import './App.css';
import {NavBar} from "./components/Navbar/nav-bar";
import ItemListContainer from "./components/ItemListContainer/index";
import ItemDetailContainer from "./components/ItemDetailContainer";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import { CartContext, CartProvider } from './context/CartContext';
import { Cart } from './components/Cart';

function App() {
  return (
   
<BrowserRouter>
   <CartProvider>
 

 <div className="App">
     
     <CartContext.Consumer>
        {
          ({cart}) => JSON.stringify(cart)
        }

     </CartContext.Consumer>
     
      <NavBar/> 


        <Switch>

            <Route exact path="/">    <ItemListContainer/>  </Route>
            <Route path="/item/:itemId">   <ItemDetailContainer/>     </Route>
            <Route path="/category/:categoryId">    <ItemListContainer/>   </Route>
            <Route path="/cart"> Estoy en el cart <Cart></Cart>  </Route>

            <Route path="*">  404  </Route>
          
        </Switch>

        

      </div>
       </CartProvider> </BrowserRouter>
     
  );
}

export default App;


