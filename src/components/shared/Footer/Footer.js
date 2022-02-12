import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div>

            <div className='py-5' style={{ backgroundColor: "#001233" }}>
                <Container>
                    <Row>
                        <Col className='col-md-9 p-5'>
                            <h3 style={{ color: "#efe0c9", fontSize: "28px" }}>A bit about the Club</h3>
                            <p style={{ color: "#efe0c9" }}>We disrupted the shaving industry in 2011 by delivering "F*cking Great Blades" at an awesome price, right to your door. We've been listening to our Members' needs ever since, and now have you covered from hair to toe with a growing list of top-shelf grooming products. We spend our days focused on helping you look, feel, and smell your best (with the occasional office dog in our lap)</p>
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>

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