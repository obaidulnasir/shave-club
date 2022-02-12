import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import testiStyle from "./Testimonial.module.css"

const Testimonial = () => {
    return (
        <div>
            <div className={testiStyle.testimonialBg}>
                <br /><br />
                <Container className='py-5'>
                    <Row>
                        <Col></Col>
                        <Col className='text-center'>
                        <i style={{color:"#ff595a", fontSize:"65px"}} class="bi bi-chat-square-quote"></i>
                        <div className={`${testiStyle.feedbackSection} px-4 py-2 rounded`}>
                            <p style={{color:"#001233", fontSize:"20px"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, incidunt.</p>
                        </div>
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Testimonial;