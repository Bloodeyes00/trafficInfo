import { auth } from './components/utils/firebase'
import firebase from './components/utils/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import Navbar from '../src/components/navbar/Navbar';
import Routes from '../src/components/routes/Routes';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import './App.css';
import { useEffect, useState } from 'react';
import SignwithPohone from './components/SignwithPohone';
import Logopage from './components/Logopage/Logopage';
import Registration from './components/registration/Registration';
import Login from './components/login/Login';
import { ToastContainer } from 'react-toastify';
import Footer from './components/footer/Footer';
const authentication = {
  isLoggedin: false,
  onAuthentication() {
    this.isLoggedin = true

  },
  getLoginStatus(user) {
    console.log("test currentUserDetails 2 ", user);
    return user?.admin;
  },
};
export function SecuredRoute(props) {
  let { user } = props;

  return (
    <Route path={props.path} render={data => authentication.getLoginStatus(user) ? (
      <props.component {...data}></props.component>) :
      (<Redirect to={{ pathname: "/admin" }}></Redirect>)}></Route>
  )

}


function App() {
  const [user] = useAuthState(auth);
  const [oldUserState, setOlduserState] = useState(false);
  const [currentUserDetails, setCurrentUserDetails] = useState(null);
  const [loading, setLoading] = useState(null);

  let oldUser = localStorage.getItem("oldUser");
  useEffect(() => {
    let oldUser = localStorage.getItem("oldUser");
    if (user) {
      firebase.auth().onAuthStateChanged((user) => {
        loadProfile()
      })
    }
    loadProfile();
  }, [user, oldUser, oldUserState])

  const loadProfile = () => {
    setLoading(true)
    const firestore = firebase.database().ref("/UserProfile");
    firestore.on('value', (snapshot) => {
      if (snapshot.val()) {
        let data = { ...snapshot?.val() };
        data = Object?.values(data);
        let keys = Object?.keys(snapshot?.val());
        data.map((item, index) => {
          item["key"] = keys[index]
        })
        if (auth?.currentUser?.uid) {
          let currentUserDetails = data.find(item => item?.uid == auth?.currentUser?.uid);
          console.log("currentUserDetails in profile : ", currentUserDetails);
          setCurrentUserDetails(currentUserDetails);
          setLoading(false)
        }
      }
      else {
        setLoading(false);
        alert("no data found");

      }
    });
  }
  return (
    <>
      <div className="container-app px-0">
        <ToastContainer
          position='top-center'
        />
        <BrowserRouter>

          <Navbar />

          {!oldUser && <Logopage setOlduserState={setOlduserState} />}
          {user ? <Routes user={currentUserDetails} /> : oldUser && <Login />}



        </BrowserRouter>

      </div>
    </>
  );
}

export default App;