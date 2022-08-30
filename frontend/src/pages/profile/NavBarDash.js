import {Button, Container, Nav, Form, Navbar, Offcanvas} from 'react-bootstrap';
import React from 'react'
import { Link } from 'react-router-dom';

function NavBarDash() {
    return (
        <div>
            {[false].map((expand) => (
                <Navbar key={expand} bg="light" expand={expand} className="mb-3">
                    <Container fluid>
                        <Navbar.Brand href="#">Management</Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>Management</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link  as={Link} to="/dashboard">Dashboard</Nav.Link>
                                   <Nav.Link  as={Link} to="/users">Users</Nav.Link>

                                   <Nav.Link  as={Link} to="/animes">Anime</Nav.Link>
                                   <Nav.Link  as={Link} to="/news">News</Nav.Link>
                                </Nav>
                                <Form className="d-flex">
                                    <Form.Control
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                    <Button variant="outline-success">Search</Button>
                                </Form>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}

        </div>
    )
}

export default NavBarDash