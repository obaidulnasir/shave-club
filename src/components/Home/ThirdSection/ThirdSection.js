import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import HeadingText from '../../shared/HeadingText/HeadingText';

const ThirdSection = () => {
    return (
        <div>
            <Container className='my-5'>
                <Row className='mt-5'>
                    <Col className='text-center'>
                        <br /><br /><br />
                    <HeadingText size="45px" text="WHY JOIN THE CLUB?"></HeadingText>
                    </Col>
                </Row>
            </Container>
            <Container>
                
            </Container>
        </div>
    );
};

export default ThirdSection;