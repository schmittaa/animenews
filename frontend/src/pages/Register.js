import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { userRegister } from '../redux/actions.js/authActions'

function Register() {
  const [data, setData] = useState({name : "", email:"", password:"" })
  const dispatch = useDispatch();
  //handle  Change 
  const handleChange = (e) => {
    setData ({...data, [e.target.name]: e.target.value})
  } 
  //submit register
  const handleSubmit = (e)=>{
    e.preventDefault();
    dispatch(userRegister(data))
  }
  return (
  <div>
    <div>

    </div>
    <div className='divform'>
       <form >
          <input type="text" className='input' placeholder='Please enter your nickname' 
          name="name" onChange={handleChange} />
          <input type="mail" className='input' placeholder='Please enter your email' 
          name="email" onChange={handleChange} />
          <input type="password"  className='input' placeholder='Please enter a strong password' 
          name="password" onChange={handleChange} />
          <div style={{ marginTop: "10px", display:"flex"}}>
          <p className='Qlink'>Have an account ? {<Link to="/login"  className='linklogin'>Sign in </Link>}</p>

        <button type="submit" style={{marginLeft:"50px"}} 
        onClick={handleSubmit} className="buttonlogin">Register</button>
        </div>
      </form>      
    </div>
  </div>
  )
}

export default Register