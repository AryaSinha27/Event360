import React, { useState } from 'react'
import './Login.css'
import {Link, useHistory} from 'react-router-dom'
import { auth } from './firebase';

function Login() {
  const history = useHistory();
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  
  const signIn = e => {
     e.preventDefault();
    
     auth
     .signInWithEmailAndPassword(email, password)
     .then(auth => {
       history.push('/')
     })
     .catch(error => alert(error.message))
    //  some fancy login
  }

  const register = e => {
    e.preventDefault();

   

    auth
         .createUserWithEmailAndPassword(email, password)
         .then((auth) => {
          // created the a new user with email and password
          console.log(auth);
          if (auth){
            history.push('/')
          }
         })
         .catch(error => alert(error.message))

    // some fancy register
  }
  return (
    <div className='login' >
        <Link to='/' >
       <img 
       className='login_logo'
       src='https://www.freepnglogos.com/uploads/amazon-png-logo-vector/amazon-png-logo-vector-1.png' 
       alt=''
       />
       </Link>

       <div className='login_container'>
        <h1>Sign in</h1>

        <form>
          <h5>E-mail</h5>
          <input type='text' value={email} onChange=
          {e => setEmail(e.target.value)}
          />

          <h5>password</h5>
          <input type='password' value={password} onChange=
          {e => setPassword(e.target.value)}
          />

          <button type='submit' onClick={signIn}
          className='login_signInButton' >
            Sign In
          </button>
        </form>

        <p>
        By continuing, you agree to SHOPPING APP
         Conditions of Use & Privacy Notice.
        </p>

        <button onClick={register}
           className='login_registerButton'>
           Create your Shopping Account
        </button>

       </div>
    </div>
  )
}

export default Login