import './App.css';
import Navbar from '../src/components/navbar/Navbar';
import Routes from '../src/components/routes/Routes';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="container-fluid">
     <BrowserRouter>
        <Navbar />
         
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
