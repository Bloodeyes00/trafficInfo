import { auth } from './components/utils/firebase'
import firebase from './components/utils/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import Navbar from '../src/components/navbar/Navbar';
import Routes from '../src/components/routes/Routes';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import ImageUpload from './components/ImageUpload';
import Login from './components/login/Login';
import { NotificationContainer } from 'react-notifications';
import { ToastContainer } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import Mainpage from './components/main';
import SignwithPohone from './components/SignwithPohone';
function App() {
  // const [loggedIn, setLoggedIn] = useState(false);
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      console.log("user :", user);
      firebase.auth().onAuthStateChanged((user) => {
        console.log("user 2 :", user);
      })
    }
  }, [user])

  return (
    <>
      <div className="container-fluid-home">
        <BrowserRouter>
          <Navbar />
          {/* {user ? <Routes /> : <Login setLoggedIn={setLoggedIn} />} */}
          {/* <Routes /> */}
          {/* <NotificationContainer leaveTimeout={60000}/> */}

          {user ? <Routes /> : <SignwithPohone />}
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;