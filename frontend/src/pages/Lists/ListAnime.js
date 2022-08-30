import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAnimes, toggleFalseAnime } from '../../redux/actions/animeActions';
import CardAnime from '../Cards/CardAnime'
import VCardAnime from '../Cards/VCardAnime';
function ListAnime() {
  const animes = useSelector(state => state.animeReducer.animes)
  const auth = useSelector(state => state.authReducer.auth)
  const user = useSelector(state => state.authReducer.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleToggleFalse = () => {
    dispatch(toggleFalseAnime());
    navigate('/ManageAnime');
  }


  useEffect(() => {
    dispatch(getAnimes());
  }, [dispatch])
  return (
    <div>
       {
        user?.role === "admin" && <button className='addButton' style={{ marginLeft: '75%' }} onClick={handleToggleFalse}>

          <img src="./img/add.png" alt="add" className='addImg' /></button>
      }
      
      {
        auth ?

          <div>
            {
              animes?.map((anime) => (<CardAnime anime={anime} key={anime._id} />))
            }
          </div>
          :
          <div>
            {
              animes?.map((anime) => (<VCardAnime anime={anime} key={anime._id} />))
            }
          </div>
      }
     
    </div>
  )
}

export default ListAnime