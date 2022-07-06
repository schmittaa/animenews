import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div>
      <div className='divform'>
        <form >
          <input type="mail" className='input' placeholder='Please enter your email' name="email" />
          <input type="password" className='input' placeholder='Please enter a strong password' name="password" />
          <div style={{ marginTop: "10px", display:"flex"}}>
            <p className='Qlink'>Need an account ? {<Link to="/register" className='linklogin'>Sign up </Link>}</p>
            <button type="submit" className="buttonlogin">Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login