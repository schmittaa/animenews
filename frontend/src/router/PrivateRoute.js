import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';
import Load from '../component/Load'

function PrivateRoute({children}) {
    const { auth, loading } = useSelector(state => state.authReducer);
    const token = localStorage.getItem('token')
    return (
        <div>
            {
                loading ?
                   ( <div className="divLoad">
                        <Load type="spinningBubbles"
                            color="rgb(127, 211, 183)" />
                    </div>
                    ): auth && token ?(
                         children 
                         ): (
                         <Navigate to="/login" />
                         )                  
            }
        </div>
    )
}

export default PrivateRoute