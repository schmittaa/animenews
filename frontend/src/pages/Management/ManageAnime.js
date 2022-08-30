import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addAnime, updateAnime } from '../../redux/actions/animeActions';

function ManageAnime() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector ((state)=> state.authReducer.user)
  const anime = useSelector((state) => state.animeReducer.anime);
  const edit = useSelector((state) => state.animeReducer.edit);
  const [data, setData] = useState({title : "", description:"", poster :"", rate:"", frameUrl:"", date:""})


  useEffect(() => {
    if(user.role==="user"){
      navigate("/");
    }
    else {   

    edit ? setData({
      title: anime?.title,
      description: anime?.description,
      poster: anime?.poster,
      rate: anime?.rate,
      frameUrl: anime?.frameUrl,
      date: anime?.date
        }) :
      setData({ title : "", description:"", poster :"", rate:"", frameUrl:"", date:"" })
  }
}, [anime,edit])



  //handle  Change 
  const handleChange = (e) => {
    setData ({...data, [e.target.name]: e.target.value})
  } 
  //add anime 
  const handleSubmit = (e)=>{
    e.preventDefault();
    dispatch(addAnime(data, navigate))
    navigate("/animes")
  }
   //update anime
   const handleUpdate= (e) => {
    e.preventDefault();
    dispatch(updateAnime(anime._id,data))
    navigate('/animes')
  }

  return (
      <div style={{ width: "300px", margin: "auto", marginTop: "50px" }}>
          <Form>
              <Form.Group >
                  <input className='input' type="text" placeholder="Anime Name" name="title" value={data.title} onChange={handleChange} />
                  <input className='input' type="text" placeholder="Description" name="description" value={data.description} onChange={handleChange} />
                  <input className='input' type="text"   placeholder="Poster" name="poster" value={data.poster} onChange={handleChange} />
                  <input className='input' type="text" placeholder="frameURL" name="frameUrl" value={data.frameUrl} onChange={handleChange} />
                  <input className='input' type="text" placeholder="What kind of anime" name="genre" onChange={handleChange} />
                  <input className='input' type="date"   placeholder="date" name="date" onChange={handleChange} />
                  {
          edit ? 
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

export default ManageAnime