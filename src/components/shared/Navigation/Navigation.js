import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Navigation.css'

const Navigation = () => {
    const {handleLogout, user} = useAuth();
    return (
        <div>
            <Navbar className='my-nav' sticky="top" collapseOnSelect expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand>
                        <Link to="/home" className='nav-link'>Shave-Club</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            {/* <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                        <Nav>
                            <Nav.Link >
                                <Link className='nav-link' to="/shop">
                                    {/* <button className="btn btn-outline-light">Dashboard</button> */}
                                    Shop
                                </Link>
                            </Nav.Link>
                            <Nav.Link >
                                <Link className='nav-link' to="/register">
                                    {/* <button className="btn btn-outline-light">Dashboard</button> */}
                                    Content
                                </Link>
                            </Nav.Link>
                            <Nav.Link >
                                <Link className='nav-link' to="/register">
                                    {/* <button className="btn btn-outline-light">Dashboard</button> */}
                                    Gift
                                </Link>
                            </Nav.Link>
                            <Nav.Link >
                            {
                                user.email ? <div>
                                    <Nav.Link><button className="btn btn-danger" onClick={handleLogout}>Logout</button></Nav.Link> 
                                    
                                </div> :
                                    <Nav.Link>
                                        <Link className="nav-link" to="/register"><button className="btn btn-info">Register</button></Link>
                                    </Nav.Link>
                            }
                            </Nav.Link>
                            {/* <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;