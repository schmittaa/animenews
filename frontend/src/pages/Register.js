import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { userRegister } from '../redux/actions/authActions'

function Register() {
  const [data, setData] = useState({ name: "", email: "", password: "" })
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //handle  Change 
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  //submit register
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userRegister(data, navigate))
  }
  return (
    <div className='loginDiv'>
      <div>
        <img src='./img/2.png' className="bg" alt="bg" />

      </div>
      <div className='divform'>
        <form onSubmit={handleSubmit}>
          <input type="text" className='input' placeholder='Please enter your name'
            name="name" onChange={handleChange} />
          <input type="text" className='input' placeholder='Please enter your nickname'
            name="email" onChange={handleChange} />
          <input type="password" className='input' placeholder='Please enter your password'
            name="password" onChange={handleChange} />
          <div style={{ marginTop: "10px", display: "flex" }}>
            <p className='Qlink'>Have an account ? {<Link to="/login" className='linklogin'>Sign in </Link>}</p>

            <button type="submit" style={{ marginLeft: "50px" }}
              onClick={handleSubmit} className="buttonlogin">Register</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register