import Rutas from './routes/Rutas';
import './App.css';
import './components/styles.css'
import Footer from './components/footer/Footer'
import { BrowserRouter } from 'react-router-dom';

function App() {

  return (

    <div className="App">
      <Rutas />
      <BrowserRouter>
      <Footer />
      </BrowserRouter>
    </div>

  );
}

export default App;
