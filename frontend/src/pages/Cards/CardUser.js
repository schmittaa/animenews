import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { removeUser ,updateRole} from '../../redux/actions/userActions';


function CardUser({ user }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(true);
  const [show, setShow] = useState(false);
  const [data, setData] = useState({name : "", email:"",  password: user?.password, role:""})
  

//delete
  const deleteUser = (e) => {
    e.preventDefault();
    if (window.confirm("Are you sure to remove this account ? ")) {
      dispatch(removeUser(user._id));
      navigate('/users')
    }
  };
  useEffect(() => {
    disabled ? setData({
      name : user?.name,
      email:user?.email,
      password: user?.password,
      role : user?.role
        }) :
    setData({name : user?.name, email:user?.email, password: user?.password,  role:user?.role })

}, [user])

  //handle  Change 
  const handleChange = (e) => {
    setData ({...data, [e.target.name]: e.target.value})
  } 
  //update user
const handleUpdate= () => {
  dispatch(updateRole(user._id,{role:data.role}))  
}

  return (
    <>
      <div>
        <Card className='Carduser'>
          <Card.Header style={{ display: "flex", justifyContent: "space-between" }}>
            <h6 style={{ color: " rgb(28, 101, 150)", paddingTop: "20px" }}> {user.name}</h6>
            <img className="inconuser" alt="card" src={user.picture} /></Card.Header>
          <Card.Body>
            <Card.Text className="Textt">Pseudo :{user.email} </Card.Text>
            <Card.Text className="Textt">Favorites :( )</Card.Text>
            <Card.Text className="Textt">Comments :( )</Card.Text>
            <Card.Text >Role : {user.role}</Card.Text>
             
         <div className="dropdowndiv">
         <Card.Text className="Textt">Change role : </Card.Text>
              <select name="role" id="role" onChange={handleChange}
              className='dropdown' disabled={disabled}>
              <option value={user.role}>  </option>
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </select>

          
         </div>
         </Card.Body>
          <footer className="cardFooter">
            <button className='iconButton' style={{marginTop:"1.5px"}} onClick={deleteUser}>
              <img src="./img/remove.png" alt="remove" className='imgCard' /></button>

              {
                          show ? 
                          <button variant="" className="iconButton" style={{marginButtom:"30%"}}
                          onClick={() =>{ handleUpdate(); setDisabled(!disabled); 
                            setShow(!show) }}>
                            <img src="./img/okay.png" alt="ok" className='editImg' />
                          </button>
                          : 
                          <button variant="" className="iconButton"
                          onClick={() => { setDisabled(!disabled); setShow(!show) }} >
                            <img src="./img/edit.png" alt="edit" className='imgCard' />
                          </button>
                        }
              </footer>
        </Card>
      </div>
    </>
  )
}

export default CardUser