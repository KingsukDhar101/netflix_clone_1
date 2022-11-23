import React, { useEffect, useState } from 'react'
import Nav from '../Nav';
import { avatar1, netflix_logo } from '../../assets';
import {useDispatch, useSelector} from "react-redux";
import "./ProfileScreen.css";
import { selectUser } from '../../features/userSlice';
import { auth } from '../../firebase';

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const userState = useSelector(selectUser);
  const [user, setUser] = useState(userState);
  useEffect(()=>{
    console.log("user", user);
    setUser(userState);
  });
  return (
    <div className='profile'>
      <Nav />
      <div className="profile_body">
        <h1>Edit Profile</h1>
        <div className="profile_info">
          <img src={`${avatar1}`} alt="" />
          <div className="profile_details">
            <h2>{user?.email}</h2>
            <div className="profile_plans">
              <h3>Plans </h3>

              <button className='profile_signOut' onClick={()=>{auth.signOut()}}>Sign Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen