import React, { useState } from 'react';
import { netflix_logo } from '../../assets';
import { isEmailValidate } from '../../base';
import Login from './Login';
import "./Signup.css";

const Signup = () => {

  const [signinView, setSigninView] = useState(false);
  const [email, setEmail] = useState("");
  const registerFunc = async (e) => {
    e.preventDefault();
    try{
      const emailValidate = isEmailValidate(email);
      if(emailValidate){
        setSigninView(true);
      }
    }catch(e){
      console.log(e.message);
    }
  };

  return (
    <div className='signup'>
      <div className="signup_background">
        <img className='signup_logo' src={`${netflix_logo}`} alt=""/>
        {signinView ?
          (<button className='signin_button' onClick={() => { setSigninView(false) }}>Sign Up</button>) :
          (<button className='signin_button' onClick={() => { setSigninView(true) }}>Sign In</button>)
        }
        <div className="signup_gradient" />
        <div className="signup_body">
          {signinView ? (
            <Login loginEmail={email} />
          ) : (
            <>
              <h1>Unlimited films, TV programmes and more.</h1>
              <h2>Watch anywhere. Cancel any time.</h2>
              <h3>Ready to watch? Enter your email to create or restart you membership.</h3>
              <div className="signup_input">
                <form>
                  <input type="email" placeholder="Email Address" value={email}
                    onChange={(e)=>{setEmail(e.target.value)}}
                   />
                    <button className='signup_getStarted' onClick={registerFunc}>GET STARTED</button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>

    </div>
  )
}

export default Signup