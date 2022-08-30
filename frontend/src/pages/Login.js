import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { userLogin } from '../redux/actions/authActions';

function Login() {
  const [data, setData] = useState({email:"", password:"" })
  const user = useSelector(state => state.authReducer.user)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //handle  Change 
  const handleChange = (e) => {
    setData ({...data, [e.target.name]: e.target.value})
  } 
  //submit register
  const handleSubmit = (e)=>{
    e.preventDefault();
    dispatch(userLogin(data, navigate))
    if(user?.role==="admin"){
      navigate("/dashboard");
    }
    else { 
      navigate("/profile");
  }
  }
 
  return (
    <div className='loginDiv'>
      <div>
        <img src='./img/2.png'  className="bg" alt="bg"/>
        
      </div>
      <div className='divform'>
        <form >
          <input type="text"  onChange={handleChange} className='input' placeholder='Please enter your nickname' name="email" />
          <input type="password" onChange={handleChange} className='input' placeholder='Please enter your password' name="password" />
          <div style={{ marginTop: "10px", display:"flex"}}>
            <p className='Qlink'>Need an account ? {<Link to="/register" className='linklogin'>Sign up </Link>}</p>
            <button type="submit" onClick={handleSubmit} className="buttonlogin">Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login