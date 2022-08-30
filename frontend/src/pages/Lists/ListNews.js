import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getNews, toggleFalseNews } from '../../redux/actions/newsAction';
import CardNews from '../Cards/CardNews';
import { useNavigate } from 'react-router-dom';
import VCardNews from '../Cards/VCardNews';


function ListNews() {
  const news = useSelector(state => state.newsReducer.news)
  const auth = useSelector(state => state.authReducer.auth)
  const user = useSelector((state) => state.authReducer.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleToggleFalse = () => {
    dispatch(toggleFalseNews());
    navigate("/news");
    navigate('/ManageNews');

  }

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch])
  return (
    <div>


      {user?.role === "admin" && <button className='addButton' onClick={handleToggleFalse}>
        <img src="./img/add.png" alt="add" className='addImg' /></button>
      }

{
        auth ?

          <div>
            {
             news?.map((onenew) => (
              <CardNews onenew={onenew} key={onenew._id} />))
            }
          </div>
          :
          <div>
            {
              news?.map((onenew) => (
                <VCardNews onenew={onenew} key={onenew._id} />))
            }
          </div>
      }
   

    </div>
  )
}

export default ListNews