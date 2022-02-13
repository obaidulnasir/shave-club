import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Accordion } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import HeadingText from '../shared/HeadingText/HeadingText';
import MyButton from '../shared/MyButton/MyButton';

const ProductDetails = () => {
    const { id } = useParams()
    const [singleProduct, setSingleProduct] = useState({});
    useEffect(() => {
        fetch(`https://protected-lowlands-25877.herokuapp.com/singleProduct/${id}`)
            .then(res => res.json())
            .then(data => setSingleProduct(data));
    }, [id])
    return (
        <div>
            <br /> <br />
            <Container className='my-5'>
                <Row>
                    <Col>
                        <img src={singleProduct?.img} alt="img" width="80%" />
                        <Row>
                            <Col>
                                <img src={singleProduct?.extImg1} alt="img" width="70%" />
                            </Col>
                            <Col>
                                <img src={singleProduct?.extImg2} alt="img" width="70%"/>
                            </Col>
                        </Row>
                    </Col>

                    <Col>
                        <HeadingText text={singleProduct.productName} size="45px"></HeadingText>
                        <HeadingText text={singleProduct.catagories} size="16px" fWeight="400"></HeadingText>
                        <p style={{ fontSize: "30px", fontWeight: "800", color: "#001233" }}>{singleProduct.price}$</p>
                        
                        <i class="bi bi-star fs-6"></i><i class="bi bi-star fs-6"></i><i class="bi bi-star fs-6"></i><i class="bi bi-star fs-6"></i><i class="bi bi-star fs-6">(5)</i>

                        <br />
                        <br />

                        <Link to={`/orderPage/${id}`}>
                            <MyButton color="#001233" text="Buy Now"></MyButton>
                        </Link>
                        <div className='mt-4'>
                            <Accordion defaultActiveKey="0" flush>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header><HeadingText text="Details" fWeight="400" size="20px"></HeadingText></Accordion.Header>
                                    <Accordion.Body>
                                      {singleProduct.description}
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header><HeadingText text="User Manual" fWeight="400" size="20px"></HeadingText></Accordion.Header>
                                    <Accordion.Body>
                                      {singleProduct.tips}
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ProductDetails;