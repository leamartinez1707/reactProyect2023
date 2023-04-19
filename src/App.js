import './App.css';
import NavBar from './components/navbar/NavBar';
import CartWidget from './components/cartWidget/CartWidget';
import ItemListContainer from './components/itemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <ItemListContainer/>
    </div>
  );
}

export default App;
