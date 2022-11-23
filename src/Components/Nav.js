import React, { useEffect, useState } from 'react';
import "./Nav.css";
import { avatar1, netflix_logo } from '../assets';
import {useNavigate} from "react-router-dom";

const Nav = () => {
  const [show, handleShow] = useState(true);
  const navigate = useNavigate();
  
  const transitionNavBar = ()=>{
    if(window.scrollY > 50){
      handleShow(false);
    }else{
      handleShow(true);
    }
  }
  useEffect(()=>{
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar)
  },[]);
  return (
    <div className={`nav ${show && 'nav_black'}`}>
      <div className="nav_contents">
        <img className='nav_logo' src={`${netflix_logo}`} alt='' onClick={() => { navigate("/") }} />
        <img className='nav_avatar' src={`${avatar1}`} alt="" onClick={() => { navigate("/profile") }} />
      </div>
      
    </div>
  )
}

export default Nav