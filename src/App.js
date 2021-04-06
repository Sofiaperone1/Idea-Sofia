
import './App.css';
import {NavBar} from "./components/Navbar/nav-bar";
import ItemListContainer from "./components/ItemListContainer/index"
import ItemDetailContainer from "./components/ItemDetailContainer"


function App() {
  return (
    <div className="App">
      <NavBar/> 
      <h5> item detail   </h5>
      <ItemDetailContainer/>
 
      <ItemListContainer/>
    </div>
  );
}

export default App;
