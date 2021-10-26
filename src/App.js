import { auth } from './components/utils/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import Navbar from '../src/components/navbar/Navbar';
import Routes from '../src/components/routes/Routes';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Login from './components/login/Login';

function App() {

  const [user] = useAuthState(auth);
  return (
    <>
      <div className="container-fluid-home">
        <BrowserRouter>
          <Navbar />
          {user ? <Routes /> : <Login />}
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;