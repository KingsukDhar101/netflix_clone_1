import React, { useEffect, useState } from 'react';
import './App.css';
import HomeScreen from './Components/Screens/HomeScreen';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import About from './Components/About';
import Login from './Components/Screens/Login';
import Signup from './Components/Screens/Signup';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { auth } from './firebase';
import { login, logout } from './features/userSlice';
import ProfileScreen from './Components/Screens/ProfileScreen';

function App() {
  const dispatch = useDispatch();
  const [userid, setUserid] = useState(null);
  useEffect(()=>{
    setUserid(sessionStorage.getItem("userid") ? sessionStorage.getItem("userid") : null);
    // console.log("userId: ",userid);
  },[dispatch]);

  useEffect(()=>{
    console.log("userID : ",userid);
  });

  useEffect(() => {
    try {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        // setUser(currentUser);
        if (currentUser) {
          //login
          console.log("login dispatch");
          dispatch(login({
            uid: currentUser.uid,
            email: currentUser.email
          }));
          

        } else {
          //logout
          console.log("logout dispatch");
          sessionStorage.removeItem("userid");
          setUserid(null);
          dispatch(logout());
        }
      });
      return unsubscribe;
    } catch (err) {
      console.log("error: ", err)
    }
  },[dispatch]);

  return (
    <div className="app">

      {/* <HomeScreen /> */}
      <Router>
        {(!userid ?
          (<Signup />)
          :
          (<Routes>
            <Route path="/" exact element={<HomeScreen />} />
            <Route path="profile" element={<ProfileScreen />} />
          </Routes>))}
      </Router>
    </div>
  );
}

export default App;
