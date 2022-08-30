import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addComment, getComments } from '../../redux/actions/commentActions';

function ManageComment({onenew}) {
  const comment = useSelector((state) => state.commentReducer.comment);
  const user = useSelector ((state)=> state.authReducer.user);
  const [data, setData] = useState({commentaire : ""})
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  //handle  Change 
  const handleChange = (e) => {
    setData ({...data, [e.target.name]: e.target.value})
  } 
  //add commentaire 
  const handleSubmit = (e)=>{
    e.preventDefault();
    dispatch(addComment(data, onenew._id, navigate))
    dispatch(getComments(onenew._id))
    navigate("/comments")
  }


  return (
    <div style={{ display: "flex", width:"50%"}}>
              <div >
                        <input  type="text" className='comment' name="commentaire" onChange={handleChange} />
                </div>
                <div>
                <button className='addButton' style={{marginTop:"10px"}} onClick={handleSubmit}>
                    <img src="./img/okay.png" alt="add" className='imgCard' />
                </button>
                </div>
    </div>
  )
}

export default ManageComment