import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUsers } from '../../redux/actions/userActions';
import CardUser from "../Cards/CardUser"
function ListUsers() {
  const user = useSelector(state => state.authReducer.user)
  const users = useSelector(state => state.userReducer.users)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    if(user.role==="user"){
      navigate("/");
    }
    else { 
    dispatch(getUsers());
  }
}, [dispatch])
  return (
    <div className='divCard'>
      
        {
          users?.map((user) => (
            <CardUser user={user} key={user._id} />))
        }
      
    </div>
  )
}

export default ListUsers