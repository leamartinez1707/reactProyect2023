import './App.css';
import BarraNav from './components/navbar/BarraNav';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
// import Cards from './components/cards/Cards'


function App() {
  return (
    <div className="App">
        <BarraNav/>
        <ItemListContainer greeting={'Shop now'}/>
    </div>
  );
}

export default App;
