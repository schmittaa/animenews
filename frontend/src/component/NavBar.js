import React from 'react'
import { Container, Form, Nav, Navbar } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../redux/actions/authActions'

function NavBar() {
    const auth = useSelector(state => state.authReducer.auth)
    const user = useSelector(state => state.authReducer.user)
    const dispatch = useDispatch()
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand><img src="./img/logo1.png" alt="logo" className="logo" /> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                                        className="me-auto my-2 my-lg-0"
                                        style={{ maxHeight: '100px' }}
                                        navbarScroll>
                                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                                        <Nav.Link as={Link} to="/animes">Anime</Nav.Link>
                                        <Nav.Link as={Link} to="/news" >News</Nav.Link>
                                    </Nav>

                        {
                            auth ?
                                <>

                                 


                                    <Form className="d-flex">
                                        <Link to="/profile"><button className="button"> Profile</button></Link>
                                        <Link to="/login"><button className="button" onClick={() => dispatch(logout())}> Logout </button></Link>
                                    </Form>
                                </>
                                :
                                <>

                                    <Form className="d-flex">
                                        <Link to="/login"><button className="button"> Sign In </button></Link>
                                        <Link to="/register"><button className="button"> Sign Up </button></Link>
                                    </Form>
                                </>

                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar