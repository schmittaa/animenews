import React from 'react';
import ReactLoading from 'react-loading';
import { Navigate } from 'react-router';

const Load = ({ type, color }) => (
  <div>
    <ReactLoading type={type}
      color={color}
      height={30} width={100} />
      {
        <Navigate to="/login" />
      }

  </div>
);


export default Load