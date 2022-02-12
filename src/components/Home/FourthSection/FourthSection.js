import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import HeadingText from '../../shared/HeadingText/HeadingText';
import MyButton from '../../shared/MyButton/MyButton';

const FourthSection = () => {
    return (
        <div>
            <br /><br />
            <Container className='my-5'>
                <Row>
                    <Col className='text-center'>
                        <HeadingText text="TELL US HOW YOU GET READY." size="45px"></HeadingText>
                        <MyButton text="GET STARTED" color="#001233"></MyButton>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default FourthSection;