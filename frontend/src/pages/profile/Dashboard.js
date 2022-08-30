import React from 'react'
import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import './dashboard.css';

function Dashboard() {
  const user = useSelector(state => state.authReducer.user)
  return (

    (user.role === "admin") ?
      
    <div className='divBDash'>
    <div className='divDash'>

      <div className='divright'>
        <Card border="info"  >
          <Card.Header ><Link to="/users" className="Card">Users</Link></Card.Header>
          <Card.Body>
            <Card.Title>Info about users</Card.Title>
            <Card.Text>
            Users (6) 
            </Card.Text>
          </Card.Body>
        </Card>       
         </div>
      <div className='divleftbtm'>
        <Card border="info"  >
          <Card.Header ><Link to="/animes" className="Card">Animes</Link></Card.Header>
          <Card.Body>
            <Card.Title>Info about anime</Card.Title>
            <Card.Text>
              animes(10)
            </Card.Text>
          </Card.Body>
        </Card>        </div>
      <div className='divrightbtm'>
        <Card border="info"  >
          <Card.Header><Link to="/news" className="Card">News</Link></Card.Header>
          <Card.Body>
            <Card.Title>Info about news</Card.Title>
            <Card.Text>
            posts(5)
            </Card.Text>
          </Card.Body>
        </Card>        </div>
    </div>
    </div>
      
      :
      <Navigate to= {"/*"}/>   

  )
}

export default Dashboard