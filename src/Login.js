import React from 'react'
import './Login.css'
import {Link} from 'react-router-dom'

function Login() {
  return (
    <div className='login'>
        <Link to='/'>
       <img 
       className='login_logo'
       src='https://www.freepnglogos.com/uploads/amazon-png-logo-vector/amazon-png-logo-vector-1.png' 
       alt=''
       />
       </Link>
    </div>
  )
}

export default Login