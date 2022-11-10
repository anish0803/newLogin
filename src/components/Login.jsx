import React from 'react'
import "./Login.css"

const Login = () => {
  return (
    <div>
        <div className="container">
        <div className="username">
      <p>username</p>
      <input type="text" placeholder='enter user name' />
      </div>

      <div className="password">
        <p>password</p>
        <input type="text" placeholder='enter your password' />
      </div>
      
      <button className='loginbtn'>Login</button>
      </div>
    </div>
  )
}

export default Login
