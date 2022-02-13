import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import testiStyle from "./Testimonial.module.css"

const Testimonial = () => {
    const [review, setReview] = useState([]);
    useEffect(() => {
        fetch("https://protected-lowlands-25877.herokuapp.com/review")
            .then((res) => res.json())
            .then((data) => setReview(data));
    }, []);
    return (
        <div className='App'>
            <div className={`${testiStyle.testimonialBg}`}>
                <br /><br />
                <Container>
                <i style={{color:"#ff595a", fontSize:"75px"}} class="bi bi-chat-square-quote"></i>
                <Row xs={1} md={3} className="g-4 mt-2">
                    {review.map((rv) => (
                        <Col key={rv._insertId}>
                            <Card>
                                <Card.Body className={`${testiStyle.feedbackSection} px-4 py-2 rounded`}>
                                    <blockquote className="blockquote mb-0">
                                        <p style={{color:"#001233", fontSize:"20px"}}>
                                            {" "}
                                            {rv.review}{" "}
                                        </p>
                                        <p>Rating: {rv.rating} <i class="bi bi-star-fill"></i> </p>
                                        <footer className="blockquote-footer">
                                            {rv.userName}{" "}
                                            {/* <cite title="Source Title">Source Title</cite> */}
                                        </footer>
                                    </blockquote>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
                {/* <Container className='py-5'>
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
                </Container> */}
            </div>
        </div>
    );
};

export default Testimonial;