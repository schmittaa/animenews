import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardComment from '../Cards/CardComment'

function ListComment() {
  const user = useSelector((state) => state.authReducer.user)
  const comments = useSelector((state) => state.commentReducer.comments)




  return (
          <div style={{ marginTop:"20px", width:"500px"}}>
                <div>
                  {
                    comments?.map((comment) => (
                      <CardComment comment={comment} key={comment._id} />))
                  }
                </div>
               

          </div>
  )
}

export default ListComment