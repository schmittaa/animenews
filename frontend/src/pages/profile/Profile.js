import React, { useEffect, useState } from 'react'
import './profile.css';
import { useDispatch, useSelector } from 'react-redux'
import { updateUser } from '../../redux/actions/userActions';

function Profile() {

  const [disabled, setDisabled] = useState(true);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.authReducer)

  const [data, setData] = useState({name : "", email:"", favoris :"", password:""})

  useEffect(() => {
      disabled ? setData({
      name : user?.name,
       email:user?.email, 
       favoris : "", 
       password: user?.password
        }) :
      setData({name : "", email:"", favoris :"", password:""})
  }, [user])

    //handle  Change 
    const handleChange = (e) => {
      setData ({...data, [e.target.name]: e.target.value})
    } 
    //update user
  const handleUpdate= () => {
    dispatch(updateUser(user._id,data))
  }


  return (

    <div>
      <div className='body'>
      <div className=" profile" >
        <p className="animate-charcter"> つづく チームにようこそ, {user?.name} </p>

        <div className="container">
          <div className="main-body">
            {/* /Breadcrumb */}
            <div className="row gutters-sm">
              <div className="col-md-4 mb-3">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex flex-column align-items-center text-center">
                      <img src={user?.picture} alt="avatar" className="rounded-circle" width={150} />
                      <button variant="" className="iconButton">
                        <img src="./img/camera.png" alt="editpic" className='camera' />
                      </button>
                      <div className="mt-3">
                        <p className='user'> {user?.name}  </p>
                        <p className='user'> {user?.email}  </p>
                      </div>
                    </div>
                  </div>
                </div>

              </div><br />
              <div className="col-md-8">
                <div className="card mb-3">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Full Name</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">

                        <input name="name" className="inputUser" 
                        defaultValue={data.name} disabled= {disabled}
                        onChange={handleChange} />

                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Nickname</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        <input name="email" className="inputUser" 
                        defaultValue={data.email} disabled="true"
                        onChange={handleChange}/><br />
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Password</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        <input name="password" className="inputUser" 
                        type="password" defaultValue="" disabled={disabled} 
                        onChange={handleChange}/><br />
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Favorites</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        {data.favoris}
                      </div>
                    </div>
                    <hr />
                    <div className="row" style={{ float: "right" }}>
                      <div className="col-sm-12">
                        {
                          show ? 
                          <button variant="" className="iconButton" 
                          onClick={() => { handleUpdate() ; setDisabled(!disabled); setShow(!show) }} >
                            <img src="./img/okay.png" alt="ok" className='editImg' />
                          </button>
                          : 
                          <button variant="" className="iconButton"
                          onClick={() => { setDisabled(!disabled); setShow(!show) }} >
                            <img src="./img/edit.png" alt="edit" className='imgCard' />
                          </button>
                        }
                        <button variant="" className="iconButton">
                          <img src="./img/remove.png" alt="remove" className='imgCard' style={{marginTop:"1px"}} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>

    

  )
}

export default Profile