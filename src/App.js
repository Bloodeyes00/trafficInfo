

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
import './App.css';
// import Chat from './components/Chat';
// import SignIn from './components/SignIn';
// import { auth } from './firebase.js'
// import { useAuthState } from 'react-firebase-hooks/auth'
import Navbar from '../src/components/navbar/Navbar';
import Routes from '../src/components/routes/Routes';
import { BrowserRouter } from 'react-router-dom';

function App() {

  // const [user] = useAuthState(auth)
  return (
    <>
    <div className="container-fluid">
//      <BrowserRouter>
//         <Navbar />
//         <Routes />
//       </BrowserRouter>
//     </div>
      {/* {user ? <Chat /> : <SignIn />} */}
    </>
  );
}

export default App;
