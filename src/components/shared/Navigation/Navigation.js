import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Navigation.css'

const Navigation = () => {
    const { handleLogout, user } = useAuth();
    return (
        <div>
            <Navbar className='my-nav'  fixed="top"  collapseOnSelect expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand>
                        <Link to="/home" className='nav-link'>Shave-Club</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            
                        </Nav>
                        <Nav>
                           
                            <Link to="/home" className="nav-link">Home</Link>
                            <Link to="/product" className="nav-link">Shop</Link>
                            <Link to="/about" className="nav-link">About</Link>
                            <Link to="/dashboard" className="nav-link btn btn-info mx-1">Dashboard</Link>
                            {
                                user.email ? <div>
                                    <button type="button" onClick={handleLogout} class="d-inline btn btn-outline-warning">Logout</button>
                                </div> :
                                    <Link className="nav-link btn btn-info" to="/register">Register</Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;