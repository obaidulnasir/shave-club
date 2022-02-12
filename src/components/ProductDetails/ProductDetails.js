import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import HeadingText from '../shared/HeadingText/HeadingText';
import MyButton from '../shared/MyButton/MyButton';

const ProductDetails = () => {
    const { id } = useParams()
    const [singleProduct, setSingleProduct] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/singleProduct/${id}`)
            .then(res => res.json())
            .then(data => setSingleProduct(data));
    }, [id])
    return (
        <div>
            <br /> <br />
            <Container>
                <Row>
                    <Col>
                        <img src={singleProduct?.img} alt="img" width="80%" />
                    </Col>
                    <Col>
                        <HeadingText text={singleProduct.productName} size="45px"></HeadingText>
                        <HeadingText text="Copper/Blue | Limited Edition" size="16px" fWeight="400"></HeadingText>
                        <p style={{ fontSize: "30px", fontWeight: "800", color: "#001233" }}>{singleProduct.price}$</p>
                        <br />
                        <br />
                        <Link to={`/orderPage/${id}`}>
                            <MyButton color="#001233" text="Buy Now"></MyButton>
                        </Link>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ProductDetails;