import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getComments } from '../../redux/actions/commentActions';
import { getNew, removeNews, showAll, toggleTrueNews } from '../../redux/actions/newsAction';
import ManageComment from '../Management/ManageComment'

function CardNews({ onenew }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [show, setShow] = useState(false)
  const date = new Date(onenew.date);
  const user = useSelector(state => state.authReducer.user)
  const d = date.getDate();
  const m = date.getMonth() + 1;
  const y = date.getFullYear();

  const deleteNews = (e) => {
    e.preventDefault();
    if (window.confirm("Are you sure ? ")) {
      dispatch(removeNews(onenew._id));
      navigate('/news')
    }
  };
  const handleToggleTrue = () => {
    dispatch(toggleTrueNews());
    dispatch(getNew(onenew._id));
    navigate('/ManageNews');
  }

  const showAllComments = () => {
    dispatch(showAll());
    dispatch(getNew(onenew._id));
    dispatch(getComments(onenew._id))
    navigate('/comments')
  }
  return (

    <div style={{ width: '50%', margin: 'auto', height:"180px" }}>
      <Card className="CardNews" style={{height:"170px"}}>
        <blockquote>
          <p style={{ color: " rgb(28, 101, 150)", backgroundColor: "#f2f4f8" }}>{onenew?.anime}</p>

          <p style={{ fontSize: "15px", marginLeft: "10px" }}>
            {onenew.message}
          </p>


          <footer className="footer" style={{ fontSize: "10px", marginLeft: "10px" }} >
          <p className='showComments' 
            onClick={showAllComments} >
              Show all comments about this</p>
          <div style={{display:"flex"}}>

              <div >Last update {y}-{m}-{d}</div>
         

              {
              user.role === "admin" ?
                <>
                  <button className='iconButton'   style={{marginLeft:"65%"}} onClick={deleteNews}>
                    <img src="./img/remove.png" alt="remove" className='imgCard' /></button>

                  <button className='iconButton' onClick={handleToggleTrue}>
                    <img src="./img/edit.png" alt="edit" className='imgCard' onClick={handleToggleTrue} /></button>

                </>
                :
               <button className='iconButton' style={{marginLeft:"70%"}}>
                <img src="./img/comment.png" alt="comment" className='imgCard' onClick={()=>setShow(!show)} /></button>

            }
          </div>
            

            {
              show &&
               <>
                <ManageComment onenew={onenew} />
              </>
            }
          

          </footer>
        </blockquote>
      </Card>

    </div>
  )
}

export default CardNews