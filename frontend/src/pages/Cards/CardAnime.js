import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getAnime, removeAnime, toggleTrueAnime } from '../../redux/actions/animeActions';
import { updateFavoris } from '../../redux/actions/userActions';

function CardAnime({ anime }) {
  const user = useSelector(state => state.authReducer.user)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const date = new Date(anime.date);
  const d = date.getDate();
  const m = date.getMonth() + 1;
  const y = date.getFullYear();
  const [like, setLike] = useState(false);
  const deleteAnime = (e) => {
    e.preventDefault();
    if (window.confirm("Are you sure ? ")) {
      dispatch(removeAnime(anime._id));
      navigate('/animes')
    }
  };
  const handleToggleTrue = () => {
    dispatch(toggleTrueAnime());
    dispatch(getAnime(anime._id));
    navigate('/ManageAnime');
  }

  const handleFavoris= () => {
    dispatch(updateFavoris(anime._id))
    setLike(!like)  ;
  }
  return (
    <div style={{ width: '60%', margin: 'auto' }}>
      <Card className="CardNews">
        <Card.Header style={{ color: " rgb(28, 101, 150)" }}>{anime?.title}</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <div className='animeDiv'>
              <img className='poster' alt="poster" src={anime?.poster} />
              <div style={{ marginTop: "10px" }}>
                {anime?.description}

                <p className="footer" style={{ marginTop: "30px" }}>
                  Date : {y}-{m}-{d} 
                  {
                  
                    
                      (user?.role === "admin") ?
                        <>
                          <button className='iconButton'  onClick={deleteAnime}>
                            <img src="./img/remove.png" alt="remove" className='imgCard' /></button>

                          <button className='iconButton' style={{marginLeft:"30%"}} onClick={handleToggleTrue}>
                            <img src="./img/edit.png" alt="edit" className='imgCard' /></button>
                        </>
                        :
                        <button className='iconButton' style={{  filter: like ? "none" : " grayscale(100%) " }} onClick={handleFavoris}>
                          <img src="./img/like.png" alt="like" className='imgCard' /></button>
                  }

                </p>
              </div>
            </div>

          </blockquote>
        </Card.Body>
      </Card>

    </div>
  )
}

export default CardAnime