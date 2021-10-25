

// function App() {
//   return (
//     <div className="container-fluid">
//      <BrowserRouter>
//         <Navbar />
//         <Routes />
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
// import Chat from './components/Chat';
// import { auth } from './firebase.js'
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
      <div className="container-fluid">
        <BrowserRouter>
          <Navbar />
          {user ? <Routes /> : <Login />}
          {/* <Routes /> */}
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;