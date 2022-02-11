import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import shave from "./shop-cat-shave.jpeg";
import shower from "./hair.jpeg";
import skin from "./skin.jpeg";
import relShaver from "./relationship-shaver.jpeg";

const OurServices = () => {
    return (
        <div>
            <Container className="my-5">
                <Row xs={1} md={4} className="g-4">
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={skin} />
                            <Card.Body>
                                <Card.Title className='text-center'>Skin</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={shower} />
                            <Card.Body>
                                <Card.Title className='text-center'>Shower</Card.Title> 
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={relShaver} />
                            <Card.Body>
                                <Card.Title className='text-center'>Relation Shaver</Card.Title> 
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={shave} />
                            <Card.Body>
                                <Card.Title className='text-center'>Shave</Card.Title> 
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default OurServices;