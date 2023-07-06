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
       src='data:image/png;base64,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' 
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
        By continuing, you agree to Event APP
         Conditions of Use & Privacy Notice.
        </p>

        <button onClick={register}
           className='login_registerButton'>
           Create your Event Account
        </button>

       </div>
    </div>
  )
}

export default Login