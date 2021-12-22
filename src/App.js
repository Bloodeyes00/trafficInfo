import { auth } from './components/utils/firebase'
import firebase from './components/utils/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import Navbar from '../src/components/navbar/Navbar';
import Routes from '../src/components/routes/Routes';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { useEffect, useState } from 'react';
import SignwithPohone from './components/SignwithPohone';
import Logopage from './components/Logopage/Logopage';
import Registration from './components/registration/Registration';
import Login from './components/login/Login';
import { ToastContainer } from 'react-toastify';
import Footer from './components/footer/Footer';
function App() {
  // const [loggedIn, setLoggedIn] = useState(false);
  const [user] = useAuthState(auth);
  const [oldUserState, setOlduserState] = useState(false);
  let oldUser = localStorage.getItem("oldUser");
  useEffect(() => {
    let oldUser = localStorage.getItem("oldUser");
    console.log("old user in app js ", oldUser);
    if (user) {
      console.log("user :", user);
      firebase.auth().onAuthStateChanged((user) => {
        console.log("user 2 :", user);
      })
    }
  }, [user, oldUser, oldUserState])
  return (
    <>
      <div className="container-fluid-home px-0">
      <ToastContainer 
      position='top-center'
     />
        <BrowserRouter>

          <Navbar />
          {/* <Logopage /> */}
          {/* {user ? <Routes /> : <Login setLoggedIn={setLoggedIn} />} */}
          {/* <Routes /> */}
          {/* <NotificationContainer leaveTimeout={60000}/> */}
          {!oldUser && <Logopage setOlduserState={setOlduserState} />}
          {user ? <Routes /> : oldUser && <Login/> }
          {/* <Footer /> */}
          
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;