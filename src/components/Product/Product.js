import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HeadingText from '../shared/HeadingText/HeadingText';

const Product = () => {
    const [allProduct, setAllProduct] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allProduct')
            .then(res => res.json())
            .then(data => setAllProduct(data));
    }, [])
    return (
        <div>
            <div className='text-center'>
                <HeadingText text="Shop"></HeadingText>
            </div>
            <Container>
                <Row>
                    <Col className='col-md-3'>
                        this is 3
                    </Col>
                    <Col className='col-md-9'>
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
                                                {pd.description.slice(0, 255)}
                                            </Card.Text>
                                        </Card.Body>
                                        <div className="text-center">
                                            <Link to={`/singleProduct/${pd._id}`}>
                                                View
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