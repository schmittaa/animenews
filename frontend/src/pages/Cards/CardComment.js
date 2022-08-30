import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  useNavigate } from 'react-router-dom';
import { getComments, removeComment } from '../../redux/actions/commentActions'
function CardComment({ comment }) {

  const user = useSelector((state) => state.authReducer.user)
  const onenew = useSelector((state) => state.newsReducer.onenew);
  const showAll = useSelector((state) => state.newsReducer.showAll);
  const [data, setData] = useState({ message: "", anime: "" });
  const navigate = useNavigate()
  const dispatch = useDispatch()
  console.log(onenew)

  useEffect(() => {
    showAll && setData({
      message: onenew?.message,
      anime: onenew?.anime,
    }) 
    console.log(data)
}, [onenew, showAll])

  //delete comment 
  const deleteComment = (e) => {
    e.preventDefault();
    if (comment.userId.email === user.email) {
      if (window.confirm("Are you sure ? ")) {
        dispatch(removeComment(comment._id));
        navigate('/comments')
      }
    }
    if (user.role==="admin") {
      if (window.confirm("Are you sure ? ")) {
        dispatch(removeComment(comment._id));
        navigate('/comments')
      }
    }
  };
  return (
    <div>
      <div>
      {data.message}
          </div>
    <div className="CommentCard">
      {comment.commentaire}
      <br />
      <p style={{ color: "gray", marginLeft: "20px" }}>
        by  {
            (comment.userId.email === user.email)  ? "me" 
            : ": " + comment.userId.email 
        }
         </p>

      <div>
        {
          ((comment.userId.email === user.email)||(user.role==="admin")) &&
          <button className='iconButton' onClick={deleteComment}>
            <img src="./img/remove.png" alt="remove" className='imgCmt' />
          </button>

        }

      </div>
    </div>

    </div>
  )
}

export default CardComment