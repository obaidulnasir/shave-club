import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import testiStyle from "./Testimonial.module.css"

const Testimonial = () => {
    return (
        <div>
            <div className={testiStyle.testimonialBg}>
                <br /><br />
                <Container>
                    <Row>
                        <Col></Col>
                        <Col className='text-center'>
                        <i style={{color:"#ff595a", fontSize:"65px"}} class="bi bi-chat-square-quote"></i>
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Testimonial;