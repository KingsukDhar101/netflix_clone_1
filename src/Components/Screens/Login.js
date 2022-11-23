import React, { useEffect, useState } from 'react';
import "./Login.css";
import $ from 'jquery';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase';
import db from '../../firebase';
import { current, setUseProxies } from 'immer';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from '../../features/userSlice';


const Login = ({ loginEmail }) => {
  const initialState = {
    'email': '',
    'password': '',
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userState = useSelector(selectUser);
  const [signinData, setSigninData] = useState(initialState);
  const [user, setUser] = useState(null);
  // const usersCollectionRef = collection(db, "user");

  const register = async (e) => {
    e.preventDefault();
    try {
      const data = await createUserWithEmailAndPassword(auth, signinData.email, signinData.password);
      console.log("data: ", data);
      setSigninData(initialState);
      sessionStorage.setItem("userid", data.user.uid);
      window.location.reload();
    } catch (err) {
      alert(err.message);
    }
    setSigninData(initialState);
  };
  const signInFun = async (e) => {
    e.preventDefault();
    try {
      const data = await signInWithEmailAndPassword(auth, signinData.email, signinData.password);
      console.log("Signin Data: ", data);
      sessionStorage.setItem("userid", data.user.uid);
      window.location.reload();
    } catch (err) {
      alert(err.message);
    }
    setSigninData(initialState);
  };



  const onChange = (e) => {
    const { name, value } = e.target;

    setSigninData({ ...signinData, [name]: value });
  };

  // useEffect(() => {
  //   console.log("signin data : ", signinData);

  //   const getUsers = async () => {
  //     const data = await getDocs(usersCollectionRef);
  //     setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   };
  //   getUsers();
  // }, []);

  useEffect(() => {
    if (loginEmail) {
      setSigninData({ ...signinData, email: loginEmail });
    }
  }, []);





  return (
    <div className='login'>
      <form className='login_container'>
        <h1>Sign In</h1>
        <input className='input_box' placeholder='Email' type="email" name='email' autocomplete="off" value={signinData.email} onChange={onChange} />
        <input className='input_box' placeholder='Password' type="password" name='password' autocomplete="new-password" value={signinData.password} onChange={onChange} />
        <button type='submit' className='submit_btn' onClick={signInFun}>Sign In</button>

        <h4>
          <span className='login_gray'>New to Netflix? </span>
          <span className='register_link' onClick={register}>Sign Up now.</span>
        </h4>
      </form>
      <br />
      <div>

      </div>
    </div>
  )
}

export default Login;