import './App.css';
import Navbar from '../src/components/navbar/Navbar';
import Routes from '../src/components/routes/Routes';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Navbar />
         <Home/>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
