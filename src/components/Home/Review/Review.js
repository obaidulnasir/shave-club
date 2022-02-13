import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import HeadingText from '../../shared/HeadingText/HeadingText';

const Review = () => {
    const [review, setReview] = useState([]);
    useEffect(() => {
        fetch("https://protected-lowlands-25877.herokuapp.com/review")
            .then((res) => res.json())
            .then((data) => setReview(data));
    }, []);
    return (
        <div className="App my-5">
            <div>
                <HeadingText text="Our Customer Says" size="25px"></HeadingText>
            </div>
            <Container>
                <Row xs={1} md={3} className="g-4">
                    {review.map((rv) => (
                        <Col key={rv._insertId}>
                            <Card>
                                <Card.Body>
                                    <blockquote className="blockquote mb-0">
                                        <p>
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
        </div>
    );
};

export default Review;