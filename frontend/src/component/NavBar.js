import React from 'react'
import { Container, Form,  Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <div>
            <Navbar bg="light"  expand="lg">
                <Container fluid>
                    <Navbar.Brand><img src="logo1.png" alt="logo" className="logo" /> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll>
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/animes">Anime</Nav.Link>                          
                            <Nav.Link as={Link} to="/news" >News</Nav.Link>                          
                            <Nav.Link as={Link} to="/users">Users</Nav.Link>
                        </Nav>

                        <Form className="d-flex">
                            <Link to="/login"><button className="button"> Sing In </button></Link>
                            <Link  to="/register"><button className="button"> Sing Up </button></Link>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar