import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addNews, updatenews } from '../../redux/actions/newsAction';


function ManageNews() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector ((state)=> state.authReducer.user)
  const onenew = useSelector((state) => state.newsReducer.onenew);
  const editnews = useSelector((state) => state.newsReducer.editnews);
  const [data, setData] = useState({ message: "", anime: "" });
  const date = new Date()
  

  useEffect(() => {
    if(user.role==="user"){
      navigate("/");
    }
    else {   

    editnews ? setData({
      message: onenew?.message,
      anime: onenew?.anime,
      date : onenew?.date,
    }) :
      setData({ message: "", anime: "" , date : date.getDate() })
  }
}, [onenew, editnews])


  //handleChange 
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  //addnew 
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNews(data, navigate))
    navigate("/news")
  }
  //update news
  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updatenews(onenew._id, data))
    navigate('/news')
  }

  return (


    <div style={{ width: "300px", margin: "auto", marginTop: "50px" }}>
      <Form>
        <Form.Group >
        <input className='input' type="text" placeholder="Anime Name" name="anime" value={data.anime} onChange={handleChange} />
          <textarea className='input' style={{height:"90px"}} type="text" placeholder="News" name="message" value={data.message} onChange={handleChange} /> 
         
              {
          editnews ? 
          <button className='iconButton' onClick={handleUpdate}>
            <img src="./img/ok.png" alt="like" className='addImg'  /></button> 
            :
          <button className='iconButton' onClick={handleSubmit}>
          <img src="./img/add.png" alt="like" className='addImg' /></button>

         }
         
        </Form.Group>
      </Form>
    </div>

  )
}



export default ManageNews