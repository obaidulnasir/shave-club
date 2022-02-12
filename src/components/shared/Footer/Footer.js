import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div>

            <div className='py-5' style={{ backgroundColor: "#001233" }}>
                <Container className='my-5'>
                    <Row className='d-flex justify-content-between'>
                        <Col>
                            <Row>
                                <Col>1</Col>
                                <Col>2</Col>
                                <Col>3</Col>
                            </Row>
                        </Col>

                        <Col className='text-end'>
                            <h5 style={{ color: "#efe0c9" }}>Bangladesh</h5>
                            <p></p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div style={{ backgroundColor: "#efe0c9" }}>
                <h6 className='text-center'>Just completed footer</h6>
            </div>

        </div>
    );
};

export default Footer;