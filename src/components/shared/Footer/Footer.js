import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>

            <div className='py-5' style={{ backgroundColor: "#001233" }}>
                <Container className='my-5'>
                    <Row className='d-flex justify-content-between'>
                        <Col>
                            <Row>
                                <Col>
                                    <p>
                                        <Link style={{ color: "#efe0c9" }} className='nav-link' to="/">Help Center</Link>
                                    </p>
                                    <p>
                                        <Link style={{ color: "#efe0c9" }} className='nav-link' to="/">Privacy</Link>
                                    </p>
                                </Col>
                                <Col></Col>
                                <Col>
                                    <p>
                                        <Link style={{ color: "#efe0c9" }} className='nav-link' to="/">Contact Us</Link>
                                    </p>
                                    <p>
                                        <Link style={{ color: "#efe0c9" }} className='nav-link' to="/">Terms</Link>
                                    </p>
                                </Col>
                            </Row>
                        </Col>

                        <Col style={{ color: "#efe0c9" }} className='text-end'>
                            <h5 >Bangladesh</h5>
                            <br /><br />
                            <div className="fs-3">
                                <h5>Stay with us</h5>
                                <i className="bi bi-twitter m-1"></i>
                                <i className="bi bi-facebook m-1"></i>
                                <i className="bi bi-instagram m-1"></i>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </div>
            <div style={{ backgroundColor: "#efe0c9" }}>
                <h6 className='text-center'>&copy; All Rights Reserved by SHAVE Store</h6>
            </div>

        </div>
    );
};

export default Footer;