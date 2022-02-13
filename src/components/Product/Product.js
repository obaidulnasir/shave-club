import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HeadingText from '../shared/HeadingText/HeadingText';

const Product = () => {
    const [allProduct, setAllProduct] = useState([]);
    useEffect(() => {
        fetch('https://protected-lowlands-25877.herokuapp.com/allProduct')
            .then(res => res.json())
            .then(data => setAllProduct(data));
    }, [])
    return (
        <div>
            <div className='text-center'>
                <HeadingText text="Shop"></HeadingText>
            </div>
            <Container className='my-5'>
                <Row>
                    {/* <Col className='col-md-3'>
                        this is 3
                    </Col> */}
                    <Col>
                        <Row xs={1} md={3} className="g-4">
                            {allProduct.map(pd => (
                                <Col key={pd._id}>
                                    <Card className="pb-3">
                                        <Card.Img variant="top" width="70%" src={pd.img} />
                                        <Card.Body>
                                            <HeadingText size="20px" text={`${pd.productName}`}></HeadingText>
                                            {/* <Card.Title>{pd.productName}</Card.Title> */}
                                            <Card.Text >
                                                Price: {pd.price} $
                                            </Card.Text>
                                            <Card.Text>
                                                <i class="bi bi-star fs-6">0 (5)</i>
                                            </Card.Text>
                                        </Card.Body>
                                        <div className="text-center">
                                            <Link to={`/singleProduct/${pd._id}`}>
                                                <button className='btn btn-info'>See Details</button>
                                            </Link>
                                        </div>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Product;